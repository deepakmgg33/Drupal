#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to upload local DB dump to any UCB site locate on OpenShift
# Example: bash oc_sql_restore.sh ipvuit preview mydump.sql
#
# Syntax
# bash oc_sql_restore.sh PROJECT_NAME INSTANCE_NAME PATH_TO_MYSQL_DUMP
#----------------------------------------------------

# Check count of arguments.
if [ $# != 3 ]; then
    echo "You must specify 3 arguments: project name, instance name and file parameters. Example: bash oc_sql_restore.sh ipvuit preview mydump.sql"
    exit 0
fi

# Try to check login status as first.
if oc status 2>&1 | grep -q 'You must be logged in to the server'; then
  echo "You are not logged to OpenShift CLI"
  exit 0
fi

# Define variables.
PROJECT=$1
INSTANCE=$2
NAMESPACE=$1-$2
FILENAME=$3
# List of possible instances.
ALLOWED_INSTANCES=(dev qa preview prod)

# Check that file exists.
if [ -f "$FILENAME" ]; then
   echo "File $FILENAME will be used as SQL dump"
else
   echo "File $FILENAME does not exist. Aborting"
   exit 0
fi


# Check that second argument is an instance.
INSTANCE_MATCH=$(echo "${ALLOWED_INSTANCES[@]:0}" | grep -o "$INSTANCE")
if [[ -n $INSTANCE_MATCH ]]; then
  # Try to switch project as first step to get error if user is not logged.
  oc project "$NAMESPACE"
else
  echo "You should specify instance (dev,qa,preview,prod) as second argument"
  exit 0
fi

# Notify user for changes.
echo -n "You are going to destroy database on $PROJECT project $INSTANCE instance and replace it with data from file $FILENAME. Continue? Y/N "

read -r confirmation
case "$confirmation" in
    y|Y) echo "Starting uploading dump to OpenShift..."
        ;;
    n|N) echo "Aborted"
        exit 0
        ;;
    *) echo "Wrong input. Aborted"
        exit 0
        ;;
esac

# Check project access.
if oc projects 2>&1 | grep -oq "$NAMESPACE"; then
  # Set Default POD.
  DEFAULT_POD=$(oc get po | grep "$PROJECT"'.*Running' | cut -d " " -f1 | head -1)
else
  echo "Project $PROJECT is not exists or you have not access to it"
  exit 0
fi

# Set remote file name.
REMOTE_FILENAME=$(basename "$FILENAME")
oc cp "$FILENAME" "$DEFAULT_POD":/tmp/"$REMOTE_FILENAME"
# Check if file is compressed with gzip and unzip it before restore.
if [[ $REMOTE_FILENAME == *.gz ]]; then
  echo "The file is recognized as packed with gzip. Execution of gunzip on OpenShift..."
  oc exec "${DEFAULT_POD}" -- gunzip -f /tmp/"$REMOTE_FILENAME"
  REMOTE_FILENAME="${REMOTE_FILENAME%.*}"
  echo "File unpacked ans saved as /tmp/$REMOTE_FILENAME on OpenShift"
fi
# Execute mysqldump restore.
echo "Execution of remote MySQL dump restore command..."
DESTINATION_HOST=$(oc env pod/"${DEFAULT_POD}" --list | grep MYSQL_HOST= | cut -d "=" -f2)
DESTINATION_DATABASE=$(oc env pod/"${DEFAULT_POD}" --list | grep MYSQL_DATABASE= | cut -d "=" -f2)
DESTINATION_PASSWORD=$(oc exec "${DEFAULT_POD}" -- printenv | grep MYSQL_PASSWORD= | cut -d "=" -f2)
DESTINATION_USERNAME=$(oc env pod/"${DEFAULT_POD}" --list | grep MYSQL_USER= | cut -d "=" -f2)
COMMAND="mysql -u$DESTINATION_USERNAME -p$DESTINATION_PASSWORD -h$DESTINATION_HOST $DESTINATION_DATABASE < /tmp/$REMOTE_FILENAME"
oc exec -i "$DEFAULT_POD" -- bash -c "$COMMAND"

# Detect platform version. Check existing of envs folder.
PLATFORM_ENV=$(oc exec "${DEFAULT_POD}" -- ls -1 | grep envs)
if [[ $PLATFORM_ENV == 'envs' ]]; then
  DRUSH_CLEAR="bin/drush cr"
else
  DRUSH_CLEAR="drush cr -l subs"
fi

# Finish. Propose to clear Drupal cache.
echo
echo "Dump restore has been finished. Its recommended to clear Drupal cache after dump restore. Y/N "
echo -n
read -r confirmation
case "$confirmation" in
    y|Y) echo "Clearing Drupal cache..."
       # shellcheck disable=SC2086
       oc exec "${DEFAULT_POD}" -- ${DRUSH_CLEAR}
        ;;
    n|N) echo "Skipping cache clear..."
        ;;
    *) echo "Wrong input. Aborted."
        exit 0
        ;;
esac
echo "All operations have been finished. Test your site by next link - https://$NAMESPACE.ucbweb.net"