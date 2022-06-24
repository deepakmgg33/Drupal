#!/bin/bash

# Current OS
UNAME=$(uname)

function run {
    if [[ "$UNAME" == CYGWIN* ]] || [[ "$UNAME" == MINGW* ]] ; then
        echo "Up containers..."
        winpty docker-compose -f boilerplate-compose.yml up -d --remove-orphans
    else
        echo "Up containers..."
        docker-compose -f boilerplate-compose.yml up -d --remove-orphans
    fi
}

function restore_db {
    if [[ "$UNAME" == CYGWIN* ]] || [[ "$UNAME" == MINGW* ]] ; then
        winpty docker-compose -f boilerplate-compose.yml exec -T php bin/drush sql-cli < "$1"
    else
        docker-compose -f boilerplate-compose.yml exec -T php bin/drush sql-cli < "$1"
    fi
}
echo "Running compose install..."
if [[ "$UNAME" == CYGWIN* ]] || [[ "$UNAME" == MINGW* ]] ; then
    # Remove trailing slash
    sed -i 's/\r$//' scripts/site-install.sh scripts/setup.sh scripts/post-install.sh scripts/prepare.sh
fi
COMPOSER_MEMORY_LIMIT=-1 composer install
echo "Creating .env file..."
cat boilerplate.env > .env
run
if [[ $1 != "" ]]; then
    echo "Restoring database dump from $1..."
    restore_db "$1"
    echo "Importing active configurations..."
    sh ./scripts/drush.sh cim
    echo "Clearing cache..."
    sh ./scripts/drush.sh cr
fi