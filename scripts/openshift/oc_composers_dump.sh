#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to download composer dumps from all UCB site located on OpenShift
# Example: bash oc_composer_status.sh preview /tmp
#
# Syntax
# bash oc_composer_status.sh INSTANCE_NAME FOLDER_TO_SAVE_DUMP
#----------------------------------------------------

# Check count of arguments.
if [ $# != 2 ]; then
    echo "You must specify 2 arguments: instance name and folder location. Example: bash oc_composer_status.sh preview /tmp"
    exit 0
fi

# Try to check login status as first.
if oc status 2>&1 | grep -q 'You must be logged in to the server'; then
  echo "You are not logged to OpenShift CLI"
  exit 0
fi

# Define variables.
INSTANCE=$1
# Set default dumps dir.
DUMPS_DIR=${2%/}/$INSTANCE-$(date +%Y-%m-%d)
# List of possible instances.
ALLOWED_INSTANCES=(dev qa preview prod)

# Be sure that directory exists.
if [ -d "$2" ]; then
  echo "Composer dumps will be saved as $DUMPS_DIR on your local"
  mkdir -p "$DUMPS_DIR"
else
  echo "Directory $DUMPS_DIR does not exist. Aborting"
  exit 0
fi

# Check that second argument is an instance.
INSTANCE_MATCH=$(echo "${ALLOWED_INSTANCES[@]:0}" | grep -o "$INSTANCE")
if [[ -n "$INSTANCE_MATCH" ]]; then
  PROJECTS=$(oc projects -q | grep "$INSTANCE")
  echo "$PROJECTS"
  for PROJECT in $PROJECTS; do
    oc project "$PROJECT"
    # Check project access.
    if oc projects 2>&1 | grep -oq "$INSTANCE_MATCH"; then
      # Set Default POD.
      PROJECT_PREFIX=${PROJECT%-"$INSTANCE"}
      DEFAULT_POD=$(oc get po | grep "$PROJECT_PREFIX"'.*Running' | cut -d " " -f1 | head -1)
      # Checks composer files path.
      # Possible composer pathes - /var/www, /var/www/html
      COMPOSER_PATH="/var/www"
      PATH_RESULT=$(oc exec "$DEFAULT_POD" -- ls "$COMPOSER_PATH" | grep 'composer.*')
      if [ -z "$PATH_RESULT" ]; then
        COMPOSER_PATH="/var/www/html"
        PATH_RESULT=$(oc exec "$DEFAULT_POD" -- ls "$COMPOSER_PATH" | grep 'composer.*')
      fi
      # Downloading composer files.
      echo "Downloading composer files by path $COMPOSER_PATH..."
      mkdir -p "$DUMPS_DIR"/"$PROJECT_PREFIX"
      oc cp "$DEFAULT_POD":"$COMPOSER_PATH"/composer.json "$DUMPS_DIR"/"$PROJECT_PREFIX"
      oc cp "$DEFAULT_POD":"$COMPOSER_PATH"/composer.lock "$DUMPS_DIR"/"$PROJECT_PREFIX"
      echo "All operations have been finished. Composer dumps of project $PROJECT ($INSTANCE instance) has been saved as $DUMPS_DIR/$PROJECT_PREFIX"
    else
      echo "Project $PROJECT is not exists or you have not access to it"
    fi
  done
else
  echo "You should specify instance (dev,qa,preview,prod) as second argument"
  exit 0
fi

