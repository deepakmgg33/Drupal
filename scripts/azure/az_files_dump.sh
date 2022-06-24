#!/bin/bash

#---------------------DESCRIPTION--------------------
# This script helps to download Drupal files dump from any UCB Azure storage blob container
# Example: bash az_files_dump.sh ipvuit-preview /tmp
#
# Syntax
# bash az_files_dump.sh <PROJECT_NAME>-<INSTANCE_NAME> FOLDER_TO_SAVE_DUMP
#----------------------------------------------------


# Define constants.
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Define variables.
CONTAINER_NAME=$1
# Remove trailing slash from folder path.
FOLDER=${2%/}
# OpenShift project variables.
S3_ACCESS_KEY=''
S3_SECRET_KEY=''
# Set default folder name.
SOURCEFOLDER=$CONTAINER_NAME-files-$(date +%Y-%m-%d)
# Split container name.
IFS='-'
read -ra arr <<< "$CONTAINER_NAME"
IFS=' '
# Project name.
PROJECT_NAME="${arr[0]}"

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
# Check that directory exists.
function check_folder {
    if [ -d "$1" ]; then
        echo -e "${GREEN}Files dump will be saved as $1/$2 on your local.${NC}"
    else
        echo -e "${RED}Directory $1 does not exist. Aborting.${NC}"
        exit 0
    fi
}
# Download blobs from a blob container recursively.
function azure_batch_files_dump {
    az storage blob download-batch -s "$1" -d "$2" -o none --account-name "$3" --account-key "$4"
}

# Check count of arguments.
if [ $# != 2 ]; then
    echo -e "You must specify 2 arguments: <project_name>-<instance_name> and folder location. \nExample: bash az_files_dump.sh ipvuit-preview /myproject/sites/default/files"
    exit 0
fi
# Check Azure login status.
check_azure_login
# Check OpenShift login status.
check_openshift_login
# Be sure that directory exists.
check_folder "$FOLDER" "$SOURCEFOLDER"
# Switch project.
set_openshift_project "$CONTAINER_NAME"
# Check access to OpenShift project.
check_openshift_project_access "$CONTAINER_NAME" "$PROJECT_NAME"
# Get azure storage account name and account secret key.
S3_ACCESS_KEY=$(get_openshift_variable_name "$CONTAINER_NAME" "$DEFAULT_POD" 'S3_ACCESS_KEY')
S3_SECRET_KEY=$(get_openshift_variable_name "$CONTAINER_NAME" "$DEFAULT_POD" 'S3_SECRET_KEY')
if [ -z "$S3_ACCESS_KEY" ] && [ -z "$S3_SECRET_KEY" ] 
then
    echo -e "${RED}Please check, that variables S3_ACCESS_KEY and S3_SECRET_KEY are defined in $CONTAINER_NAME project at OpenShift. Aborted!${NC}"
    exit 0
fi
# Check if blob container exists.
is_blob_container_exist "$CONTAINER_NAME" "$S3_ACCESS_KEY" "$S3_SECRET_KEY"
# Check if directory exists.
if [ ! -d "$FOLDER/$SOURCEFOLDER" ]; then
    mkdir "$FOLDER/$SOURCEFOLDER"
fi
# Dump files from Azure storage blob container.
echo -e "${GREEN}Downloading files from Azure blob container...${NC}"
azure_batch_files_dump "$CONTAINER_NAME" "$FOLDER/$SOURCEFOLDER" "$S3_ACCESS_KEY" "$S3_SECRET_KEY"
echo -e "All operations have been finished. \nFiles dump of project $CONTAINER_NAME has been saved as $FOLDER/$SOURCEFOLDER."