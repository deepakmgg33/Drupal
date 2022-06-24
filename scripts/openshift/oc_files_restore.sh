#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to upload local files dump (Folder or *.tar archive) to any UCB site located on OpenShift
# Example: bash oc_files_restore.sh ipvuit preview /myproject/sites/default/files OR ash oc_files_restore.sh ipvuit preview files.tar
#
# Syntax
# bash oc_files_restore.sh PROJECT_NAME INSTANCE_NAME PATH_TO_FILES_FOLDER
#----------------------------------------------------

# Check count of arguments.
if [ $# != 3 ]; then
    echo "You must specify 3 arguments: project name, instance name and files folder parameters. Example: bash oc_sql_restore.sh ipvuit preview bash oc_files_restore.sh ipvuit preview /myproject/sites/default/files"
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
FILENAME=$NAMESPACE-files-$(date +%Y-%m-%d).tar
# List of possible instances.
ALLOWED_INSTANCES=(dev qa preview prod)

# Be sure that directory exists.
if [ -d "$FOLDER" ]; then
  echo "Files folder $FOLDER will be packed with tar on your local and uploaded to OpenShift"
elif [ -f "$FOLDER" ] && [[ $(basename "$FOLDER") == *.tar ]]; then
  echo "Files archive $FOLDER will be uploaded to OpenShift"
  FILENAME=$(basename "$FOLDER")
else
  echo "Directory $FOLDER does not exist or file $FOLDER is not a tar archive. Aborting"
  exit 0
fi


# Check that second argument is an instance.
INSTANCE_MATCH=$(echo "${ALLOWED_INSTANCES[@]:0}" | grep -o "$INSTANCE")
if [[ -n "$INSTANCE_MATCH" ]]; then
  # Try to switch project as first step to get error if user is not logged.
  oc project "$NAMESPACE"
else
  echo "You should specify instance (dev,qa,preview,prod) as second argument"
  exit 0
fi

# Notify user for changes.
echo -n "You are going to overwrite files folder on $PROJECT project $INSTANCE instance and replace it with data from folder $FOLDER. Continue? Y/N "

read -r confirmation
case "$confirmation" in
    y|Y) echo "Preparing files dump for uploading..."
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

# Uploading files dump to Openshift.
echo "Uploading files dump to OpenShift..."

# Packing files dump if its a folder
if [[ $(basename "$FOLDER") == *.tar ]]; then
  oc cp "$FOLDER" "$DEFAULT_POD":/tmp/"$FILENAME"
else
# Pack files with tar
  tar -cvf /tmp/"$FILENAME" --exclude='php' --exclude='css' --exclude='js' -C "$FOLDER" .
  echo "Copy files to Openshift"
  oc cp /tmp/"$FILENAME" "$DEFAULT_POD":/tmp/"$FILENAME"
fi

# Detect platform version. Check existing of envs folder.
PLATFORM_ENV=$(oc exec "${DEFAULT_POD}" -- ls -1 /var/www | grep envs)
if [[ $PLATFORM_ENV == 'envs' ]]; then
  FILES_FOLDER="/var/www/docroot/sites/default/files"
else
  FILES_FOLDER="/var/www/html/sites/subs/files"
fi

# Unpacking archive
echo "Unpacking files on OpenShift"
oc exec "${DEFAULT_POD}" -- tar xvf /tmp/"$FILENAME" -C "$FILES_FOLDER" --strip-components=1 --overwrite
echo "All operations have been finished. Test your site by next link - https://$NAMESPACE.ucbweb.net"