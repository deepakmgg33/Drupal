#!/bin/bash

# Check permissions of settings.php to be sure that writing is allowed, it will be changed back to 644 during installation.
chmod 777 docroot/sites/default/settings.php

# Execute site install with default settings using patched Drush.
#
# Options:
#
# --locale (Lowercase langcode in ISO format - en/fr/de/ru..)
#   Default language.
SITE_LOCALE="en"

#
# --account-name (String)
#   User 1 account name.
ACCOUNT_NAME="Migration"

#
# --account-pass (String)
#   User 1 password.
ACCOUNT_PASSWORD="ShowMeNewSite2020"

#
# --user-mail (String)
#   User 1 e-mail address.
ACCOUNT_EMAIL="migration@example.com"

#
# --site-mail (String)
#   Site e-mail address.
SITE_EMAIL="migration@example.com"

#
# --site-name (String)
#   Site name.
SITE_NAME="UCB WCMS"

#
# Arguments:
#
# install_configure_form.content_types (array - article,blog... )
#   Content types (multiple). Possible values:
#     article - Article
#     landing_page - Landing page
#     news - News
#     blog_post - Blog post
CONTENT_TYPES="article,landing_page,news,blog_post"

# install_configure_form.paragraph_types (array - wcms_pgph_form,wcms_pgph_logo... )
#   Paragraph types (multiple). Possible values:
#     wcms_pgph_backtotop - Back to top
#     wcms_pgph_form - Form
#     wcms_pgph_grid - Grid
#     wcms_pgph_logo - Logo
#     wcms_pgph_menu - Menu
#     wcms_pgph_printversion - Print version
#     wcms_pgph_slider - Slider
#     wcms_pgph_socialmedia - Social media links
#     wcms_pgph_teaser - Teaser
#     wcms_pgph_view - View
#     wcms_pgph_wysiwyg - Wysiwyg
#     wcms_pgph_document - Document
#     wcms_pgph_asymmetric_translation - Asymmetric Translation
PARAGRAPH_TYPES="wcms_pgph_backtotop,wcms_pgph_form,wcms_pgph_grid,wcms_pgph_logo,wcms_pgph_menu,wcms_pgph_printversion,wcms_pgph_slider,wcms_pgph_socialmedia,wcms_pgph_teaser,wcms_pgph_view,wcms_pgph_wysiwyg,wcms_pgph_document"

#
# install_configure_form.patient_storage (1 OR NULL)
#   Patient storage
PATIENT_STORAGE="NULL"

# install_configure_form.modules (array - devel,page_manager_ui,views_ui)
#   Additional development modules (multiple). Possible values:
#     page_manager - Panels and Page manager
#     devel - Devel
#     views_ui - Views user interface
DEVELOPMENT_MODULES="page_manager_ui,views_ui";

#
# install_configure_form.publication (array - deploy,workflow_config)
#   Publication workflow modules (multiple). Possible values:
#     deploy - Deploy module
#     workflow_config - Revisions support
#PUBLICATION_MODULES="deploy"

#
# install_configure_form.branded_modules (array - wcms_isi, wcms_pi_client)
#   Additional modules (multiple) for branded sites. Possible values:
#     wcms_isi - WCMS ISI module
#     wcms_pi_client - WCMS PI Client
#BRANDED_MODULES="wcms_isi,wcms_pi_client"

#
# Additional module:
#
# drupal headless mode (1 OR NULL)
#   Enable next modules:
#     jsonapi
#     jsonapi_extras
#     openapi
#     schemata
#     schemata_json_schema
#     serialization
#     simple_oauth
HEADLESS_MODE="NULL"

bin/drush site:install -y wcms \
--locale="$SITE_LOCALE" \
--account-name="$ACCOUNT_NAME" \
--account-pass="$ACCOUNT_PASSWORD" \
--account-mail="$ACCOUNT_EMAIL" \
--site-mail="$SITE_EMAIL" \
--site-name="$SITE_NAME" \
install_configure_form.enable_update_status_emails=NULL \
install_configure_form.enable_update_status_module=NULL \
install_configure_form.content_types=\[$CONTENT_TYPES\] \
install_configure_form.paragraph_types=\[$PARAGRAPH_TYPES\] \
install_configure_form.patient_storage="$PATIENT_STORAGE" \
install_configure_form.modules=\[$DEVELOPMENT_MODULES\]
#install_configure_form.publication=[$PUBLICATION_MODULES]
#install_configure_form.branded_modules=[$BRANDED_MODULES]
# Clear all chaches
bin/drush cr
# Install environment indicator and purge modules.
bin/drush en environment_indicator purge purge_processor_cron purge_processor_lateruntime purge_tokens purge_ui varnish_purger varnish_purge_tags purge_queuer_coretags components s3fs -y
# Fix config import installation issues. Set UUID corresponding to the settings.
if [ -f ../sync/shared/system.site.yml ]; then
   LINE=$(head -n 1 ../sync/shared/system.site.yml)
   UUID=${LINE#"uuid: "}
   bin/drush cset system.site uuid "${UUID}" -y
fi
# Import default config_split settings.
bin/drush cim --partial -y
# Enable devel and dblog to prevent errors on second partial config import.
bin/drush en devel dblog
# Partial import including config_split.
bin/drush cim --partial -y
# Rebuild permissions.
bin/drupal node:access:rebuild
# Enable jsonapi and openapi modules for drupal headless mode.
if [[ ${HEADLESS_MODE} -eq 1 ]]; then
   bin/drush en jsonapi jsonapi_extras openapi openapi_ui openapi_ui_redoc schemata schemata_json_schema serialization simple_oauth -y
   bin/drush cim --partial --source=../scripts/headless/ -y
fi