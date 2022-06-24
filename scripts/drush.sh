#!/bin/bash

# Current OS
UNAME=$(uname)

if [[ "$UNAME" == CYGWIN* ]] || [[ "$UNAME" == MINGW* ]] ; then
    winpty docker-compose -f boilerplate-compose.yml exec -T php bin/drush "$@"
else
    docker-compose -f boilerplate-compose.yml exec -T php bin/drush "$@"
fi