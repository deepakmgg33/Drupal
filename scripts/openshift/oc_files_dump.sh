#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to download Drupal files dump (archive) from any UCB site located on OpenShift
# Example: bash oc_files_dump.sh ipvuit preview /tmp
#
# Syntax
# bash oc_files_dump.sh PROJECT_NAME INSTANCE_NAME FOLDER_TO_SAVE_DUMP
#----------------------------------------------------

# Check count of arguments.
if [ $# != 3 ]; then
    echo "You must specify 3 arguments: project name, instance name and folder location. Example: bash oc_files_dump.sh ipvuit preview /tmp"
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
  echo "Files dump will be saved as $FOLDER/$FILENAME on your local"
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

# Detect platform version. Check existing of envs folder.
PLATFORM_ENV=$(oc exec "${DEFAULT_POD}" -- ls -1 /var/www | grep envs)
if [[ "$PLATFORM_ENV" == 'envs' ]]; then
  FILES_FOLDER="/var/www/docroot/sites/default/files"
else
  FILES_FOLDER="/var/www/html/sites/subs/files"
fi

# Create tar archive on OpenShift.
echo "Execution of remote files dump creation command..."
oc exec "$DEFAULT_POD" -- tar -cvf /tmp/"$FILENAME" --exclude='.htaccess' --exclude='php' --exclude='css' --exclude='js' -C "$FILES_FOLDER" .
# Download tar archive.
echo "Downloading files dump from OpenShift..."
oc cp "$DEFAULT_POD":/tmp/"$FILENAME" "$FOLDER"
echo "All operations have been finished. Files dump of project $PROJECT ($INSTANCE instance) has been saved as $FOLDER/$FILENAME"