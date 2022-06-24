#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to download DB dump from any UCB site located on OpenShift
# Example: bash oc_sql_dump.sh ipvuit preview /tmp
#
# Syntax
# bash oc_sql_dump.sh PROJECT_NAME INSTANCE_NAME FOLDER_TO_SAVE_DUMP
#----------------------------------------------------

# Current OS
UNAME=$(uname)

# Windows
is_windows ()
{
    [[ "$UNAME" == CYGWIN* ]] || [[ "$UNAME" == MINGW* ]]
}

# Check count of arguments.
if [ $# != 3 ]; then
    echo "You must specify 3 arguments: project name, instance name and folder location. Example: bash oc_sql_dump.sh ipvuit preview /tmp"
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
# Remove trailing slash from folder path.
FOLDER=${3%/}
# Set default dump filename.
FILENAME=$NAMESPACE-$(date +%Y-%m-%d).sql
# List of possible instances.
ALLOWED_INSTANCES=(dev qa preview prod)

# Be sure that directory exists.
if [ -d "$FOLDER" ]; then
    if is_windows ; then
        echo "Database dump will be saved as $FOLDER/$FILENAME on your local"
    else
        echo "Database dump will be saved as $FOLDER/$FILENAME.gz on your local"
    fi
else
  echo "Directory $FOLDER does not exist. Aborting"
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

# Check project access.
if oc projects 2>&1 | grep -oq "$NAMESPACE"; then
  # Set Default POD.
  DEFAULT_POD=$(oc get po | grep "$PROJECT"'.*Running' | cut -d " " -f1 | head -1)
else
  echo "Project $PROJECT is not exists or you have not access to it"
  exit 0
fi

# Execute mysqldump restore.
echo "Execution of remote MySQL dump creation command..."
DESTINATION_HOST=$(oc env pod/"${DEFAULT_POD}" --list | grep MYSQL_HOST= | cut -d "=" -f2)
DESTINATION_DATABASE=$(oc env pod/"${DEFAULT_POD}" --list | grep MYSQL_DATABASE= | cut -d "=" -f2)
DESTINATION_PASSWORD=$(oc exec "${DEFAULT_POD}" -- printenv | grep MYSQL_PASSWORD= | cut -d "=" -f2)
DESTINATION_USERNAME=$(oc env pod/"${DEFAULT_POD}" --list | grep MYSQL_USER= | cut -d "=" -f2)
COMMAND="mysqldump --opt --single-transaction --protocol=TCP --user=$DESTINATION_USERNAME --password=$DESTINATION_PASSWORD --host=$DESTINATION_HOST $DESTINATION_DATABASE > /tmp/$FILENAME"
oc exec -i "$DEFAULT_POD" -- bash -c "$COMMAND"

if is_windows ; then
    # Download dump.
    echo "Downloading MySQL dump..."
    oc cp "$DEFAULT_POD":/tmp/"$FILENAME" "$FOLDER"
    echo "All operations have been finished. MySQL dump of project $PROJECT ($INSTANCE instance) has been saved as $FOLDER/$FILENAME"
else
    # Execute gzip.
    echo "Packing MySQL dump with gzip..."
    oc exec -i "$DEFAULT_POD" -- gzip -f /tmp/"$FILENAME"
    # Download dump.
    echo "Downloading MySQL dump..."
    oc cp "$DEFAULT_POD":/tmp/"$FILENAME".gz "$FOLDER"
    echo "All operations have been finished. MySQL dump of project $PROJECT ($INSTANCE instance) has been saved as $FOLDER/$FILENAME.gz"
fi
