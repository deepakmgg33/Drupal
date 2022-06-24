#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to call Drush commands on any UCB site located on OpenShift
# Example: bash oc_drush.sh ipvuit preview updatedb -y
#
# Syntax
# bash oc_drush.sh PROJECT_NAME INSTANCE_NAME DRUSH_COMMAND DRUSH_ARGUMENTS
#----------------------------------------------------

# Check count of arguments.
if [ $# -lt 3 ]; then
    echo "You must specify 3 arguments at least: project name, instance name and drush command. Example: bash oc_drush.sh ipvuit preview updatedb -y"
    exit 0
fi

# Re-escape arguments.
clean_arguments=" "
for var in "${@:4}";
do
	clean_arguments="$clean_arguments \"$var\""
done

# Try to check login status as first.
if oc status 2>&1 | grep -q 'You must be logged in to the server'; then
  echo "You are not logged to OpenShift CLI"
  exit 0
fi

# Define variables.
PROJECT=$1
INSTANCE=$2
NAMESPACE=$1-$2
DRUSH_COMMAND=$3

# List of possible instances.
ALLOWED_INSTANCES=(dev qa preview prod)

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

# Set Default POD.
DEFAULT_POD=$(oc get po | grep "$PROJECT"'.*Running' | cut -d " " -f1 | head -1)

# Get site domain with WCMS_SUBSITE variable. It should be added to drush command.
SITE_DOMAIN=$(oc env pod/"${DEFAULT_POD}" --list | grep WCMS_SUBSITE= | cut -d "=" -f2)

# Detect platform version. Check existing of envs folder.
PLATFORM_ENV=$(oc exec "${DEFAULT_POD}" -- ls -1 | grep envs)
if [[ $PLATFORM_ENV == 'envs' ]]; then
  COMMAND="oc exec $DEFAULT_POD -- bin/drush $DRUSH_COMMAND$clean_arguments --uri=$SITE_DOMAIN"
else
  COMMAND="oc exec $DEFAULT_POD -- drush $DRUSH_COMMAND$clean_arguments --uri=$SITE_DOMAIN"
fi

echo "Execution Drush command $DRUSH_COMMAND on project $PROJECT ($INSTANCE instance)..."
eval "$COMMAND";