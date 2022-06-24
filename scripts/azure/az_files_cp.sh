#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to copy files from UCB Azure storage blob container to another.
# Example: bash az_files_cp.sh ipvuit-qa ipvuit-preview
#
# Syntax
# bash oc_files_cp.sh <PROJECT_NAME>-<INSTANCE_NAME> <PROJECT_NAME>-<INSTANCE_NAME>
#----------------------------------------------------

# Define constants.
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'
# Define variables.
# OpenShift project variables.
SOURCE_S3_ACCESS_KEY=''
SOURCE_S3_SECRET_KEY=''
DESTINATION_S3_ACCESS_KEY=''
DESTINATION_S3_SECRET_KEY=''
# The source container from which blobs are copied.
SOURCE_CONTAINER=$1
# Split container name.
IFS='-'
read -ra arr <<< "$SOURCE_CONTAINER"
# Source project name.
SOURCE_PROJECT_NAME="${arr[0]}"

# The blob container where the selected source files or blobs will be copied to.
DESTINATION_CONTAINER=$2
read -ra arr <<< "$DESTINATION_CONTAINER"
# Destination project name.
DESTINATION_PROJECT_NAME="${arr[0]}"
IFS=''

# Try to check login status as first.
function check_openshift_login {
    if [[ $(oc status 2>&1 | grep "You must be logged in to the server") ]] || [[ $(oc status 2>&1 | grep "Error from server (Forbidden)") ]]; then
      echo -e "${RED}You are not logged to OpenShift CLI.${NC}"
      exit 0
    fi
}
# Switch project.
function set_openshift_project {
    if oc projects 2>&1 | grep -oq "$1"; then
        oc project "$1"
    else
        echo -e "${RED}Either project $1 doesn't exist or you don't have access to it. Aborted!${NC}"
        exit 0 
    fi
}
# Check OpenShift project access.
function check_openshift_project_access {
    if oc projects 2>&1 | grep -oq "$1"; then
        DEFAULT_POD=$(oc get po | grep "$2"'.*Running' | cut -d " " -f1 | head -1)
    else
        echo -e "${RED}Either project $2 is not exists or you don't have access to it. Aborted!${NC}"
        exit 0
    fi
}
# Get variable value from OpenShift project active pod.
function get_openshift_variable_name {  
    if oc exec "$2" printenv 2>&1 | grep -q "$3"; then
        oc exec "$2" printenv "$3"
    fi
}
# Check if user is logged-in to azure cli.
function check_azure_login {
    if az account show 2>&1 | grep "Please run 'az login' to setup account"; then
        echo -e "${RED}You are not logged to Azure CLI.${NC}"
        exit 0
    fi
}
# Check for the existence of a storage container.
function is_blob_container_exist {
    if ! az storage container exists -n "$1" -o tsv --account-name "$2" --account-key "$3" 2>&1 | grep -oq "True"; then
        echo -e "${RED}The blob container $1 doesn't exist. Aborted!${NC}"
        exit 0
    fi
}
# Copy multiple blobs or files to a blob container.
function azure_blob_copy_batch {
    az storage blob copy start-batch --source-container "$1" --source-account-name "$2" --source-account-key "$3" --destination-container "$4" --account-name "$5" --account-key "$6" -o none
}

# Check count of arguments.
if [ $# != 2 ]; then
    echo -e "You must specify 2 arguments: <project_name>-<instance_name> and <project_name>-<instance_name>. \nExample: bash az_files_cp.sh ipvuit-qa ipvuit-preview"
    exit 0
fi
# Try to check login status as first.
check_azure_login
# Check OpenShift login status.
check_openshift_login
# Check Azure login status.
check_azure_login
# Switch source project.
set_openshift_project "$SOURCE_CONTAINER"
# Check access to OpenShift source project.
check_openshift_project_access "$SOURCE_CONTAINER" "$SOURCE_PROJECT_NAME"
SOURCE_S3_ACCESS_KEY=$(get_openshift_variable_name "$SOURCE_CONTAINER" "$DEFAULT_POD" 'S3_ACCESS_KEY')
SOURCE_S3_SECRET_KEY=$(get_openshift_variable_name "$SOURCE_CONTAINER" "$DEFAULT_POD" 'S3_SECRET_KEY')
if [ -z "$SOURCE_S3_ACCESS_KEY" ] && [ -z "$SOURCE_S3_SECRET_KEY" ] 
then
    echo -e "${RED}Please check, that variables S3_ACCESS_KEY and S3_SECRET_KEY are defined in $SOURCE_CONTAINER project at OpenShift. Aborted!${NC}"
    exit 0
fi
# Switch destination project.
set_openshift_project "$DESTINATION_CONTAINER" 
# Check access to OpenShift source project.
check_openshift_project_access "$DESTINATION_CONTAINER" "$DESTINATION_PROJECT_NAME"
DESTINATION_S3_ACCESS_KEY=$(get_openshift_variable_name "$DESTINATION_CONTAINER" "$DEFAULT_POD" 'S3_ACCESS_KEY')
DESTINATION_S3_SECRET_KEY=$(get_openshift_variable_name "$DESTINATION_CONTAINER" "$DEFAULT_POD" 'S3_SECRET_KEY')
if [ -z "$DESTINATION_S3_ACCESS_KEY" ] && [ -z "$DESTINATION_S3_SECRET_KEY" ] 
then
    echo -e "${RED}Please check, that variables S3_ACCESS_KEY and S3_SECRET_KEY are defined in $DESTINATION_CONTAINER project at OpenShift. Aborted!${NC}"
    exit 0
fi
# Check if source and destination blob containers exist.
is_blob_container_exist "$SOURCE_CONTAINER" "$SOURCE_S3_ACCESS_KEY" "$SOURCE_S3_SECRET_KEY"
is_blob_container_exist "$DESTINATION_CONTAINER" "$DESTINATION_S3_ACCESS_KEY" "$DESTINATION_S3_SECRET_KEY"
# Copying files from source blob container to destination.
echo -e "${GREEN}Copying files from $SOURCE_CONTAINER blob container to $DESTINATION_CONTAINER...${NC}"
azure_blob_copy_batch "$SOURCE_CONTAINER" "$SOURCE_S3_ACCESS_KEY" "$SOURCE_S3_SECRET_KEY" "$DESTINATION_CONTAINER" "$DESTINATION_S3_ACCESS_KEY" "$DESTINATION_S3_SECRET_KEY"
echo -e "All operations have been finished. \nTest your site by next link - ${BLUE}https://$DESTINATION_CONTAINER.ucbweb.net${NC}."