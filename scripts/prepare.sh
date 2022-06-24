#!/bin/bash

# Current OS
UNAME=$(uname)

function run_install {
    if [[ "$UNAME" == CYGWIN* ]] || [[ "$UNAME" == MINGW* ]] ; then
        echo "Building containers..."
        winpty docker-compose -f boilerplate-compose.yml build
        echo "Up containers..."
        winpty docker-compose -f boilerplate-compose.yml up -d --remove-orphans
        echo "Installing website..."
        winpty docker-compose -f boilerplate-compose.yml exec php bash scripts/site-install.sh
    else
        echo "Building containers..."
        docker-compose -f boilerplate-compose.yml build
        echo "Up containers..."
        docker-compose -f boilerplate-compose.yml up -d --remove-orphans
        echo "Installing website..."
        docker-compose -f boilerplate-compose.yml exec php bash scripts/site-install.sh
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
run_install
