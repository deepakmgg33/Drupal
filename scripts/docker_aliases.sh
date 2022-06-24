#!/bin/bash
echo "alias dps='docker-compose -f boilerplate-compose.yml ps'
alias dstart='docker-compose -f boilerplate-compose.yml start'
alias dstop='docker-compose -f boilerplate-compose.yml stop'
alias drestart='docker-compose -f boilerplate-compose.yml restart'
alias dbash='docker-compose -f boilerplate-compose.yml exec php bash'
alias ddrush='docker-compose -f boilerplate-compose.yml exec -T php bin/drush'
alias dup='docker-compose -f boilerplate-compose.yml up -d'" >> ~/.bash_profile;

printf "----Commands aliases for Docker\n"
printf "dstart - Start docker containers\n";
printf "dstop - Stop docker containers\n";
printf "drestart - Restart docker containers\n";
printf "dbash - Exec bash\n";
printf "ddrush COMMAND - Exec drush command in docker container\n";
printf "dup - Rebuild docker containers\n";
# shellcheck source=/dev/null
. "$HOME/.bash_profile"