FROM uwhpci.azurecr.io/baseimage:7.3

COPY . /var/www

RUN mkdir -p ~/.ssh; echo -en "$SSH_PRIVATE_KEY" >> ~/.ssh/id_rsa; \ 
    chmod 700 ~/.ssh/; chmod 600 ~/.ssh/id_rsa;