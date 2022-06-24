<?php

/**
 * @file
 * Default Drupal settings for all instances.
 */

/**
 * Database settings.
 *
 * @codingStandardsIgnoreStart
 * The $databases array specifies the database connection or
 * connections that Drupal may use.  Drupal is able to connect
 * to multiple databases, including multiple types of databases,
 * during the same request.
 *
 * One example of the simplest connection array is shown below. To use the
 * sample settings, copy and uncomment the code below between the @code and
 * @endcode lines and paste it after the $databases declaration. You will need
 * to replace the database username and password and possibly the host and port
 * with the appropriate credentials for your database system.
 *
 * The next section describes how to customize the $databases array for more
 * specific needs.
 *
 * @code
 * $databases['default']['default'] = array (
 *   'database' => 'databasename',
 *   'username' => 'sqlusername',
 *   'password' => 'sqlpassword',
 *   'host' => 'localhost',
 *   'port' => '3306',
 *   'driver' => 'mysql',
 *   'prefix' => '',
 *   'collation' => 'utf8mb4_general_ci',
 * );
 * @endcode
 * @codingStandardsIgnoreEnd
 */
$databases = [];

// Get Database Settings from OpenShift if defined.
if (getenv('MYSQL_DATABASE')) {
  $databases['default']['default'] = [
    'database' => getenv('MYSQL_DATABASE'),
    'username' => getenv('MYSQL_USER'),
    'password' => getenv('MYSQL_PASSWORD'),
    'host' => getenv('MYSQL_HOST'),
    'port' => '3306',
    'driver' => 'mysql',
    'prefix' => '',
    'collation' => 'utf8mb4_general_ci',
  ];
}


// File system settings.
if (getenv('SITE_TIER')) {
  $settings['file_public_path'] = 'sites/default/files';
  $settings['file_private_path'] = 'sites/default/files/private';
  $settings['translation_path'] = 'sites/default/files/private/translations';
  $config['system.file']['path']['temporary'] = '/tmp';
}

/**
 * Environment detection.
 */
$current_env = getenv('SITE_TIER') ?: 'local';

// Redis configuration.
if (($redis_host = getenv('REDIS_HOST')) && !drupal_installation_attempted()) {
  $settings['redis.connection']['interface'] = 'PhpRedis';
  $settings['redis.connection']['host'] = $redis_host;
  $settings['cache']['default'] = 'cache.backend.redis';
  $settings['cache_prefix'] = getenv('DRUPAL_NAME') . '_';
  $settings['container_yamls'][] = 'modules/contrib/redis/example.services.yml';
}
// Set chainedfast cache for bootstrap.
$settings['cache']['bins']['bootstrap'] = 'cache.backend.chainedfast';
$settings['cache']['bins']['discovery'] = 'cache.backend.chainedfast';
$settings['cache']['bins']['config'] = 'cache.backend.chainedfast';

// Varnish config.
if ($varnish_key = getenv('VARNISH_PURGE_KEY')) {
  $config['varnish_purger.settings.2256b1f537']['headers'][0]['value'] = $varnish_key;
  $config['varnish_purger.settings.2256b1f537']['hostname'] = getenv('VARNISH_HOST') ?: 'varnish';
  // Second Varnish instance for Production.
  if ($current_env == 'prod') {
    $config['varnish_purger.settings.2256b1f538']['headers'][0]['value'] = $varnish_key;
    $config['varnish_purger.settings.2256b1f538']['hostname'] = getenv('VARNISH_HOST_2') ?: 'varnish-1.varnish';
  }
}

// As we use proxy, it needs to inform drupal about https.
// @codingStandardsIgnoreStart
if (!empty($_SERVER['REMOTE_ADDR'])) {
  $settings['reverse_proxy'] = TRUE;
  $settings['reverse_proxy_addresses'] = [$_SERVER['REMOTE_ADDR']];
  $settings['reverse_proxy_forwarded_header'] = 'HTTP_FORWARDED';
  if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
    $_SERVER['HTTPS'] = 'on';
    $_SERVER['SERVER_PORT'] = isset($_SERVER['HTTP_X_FORWARDED_PORT']) ? $_SERVER['HTTP_X_FORWARDED_PORT'] : 443;
  }
}
// @codingStandardsIgnoreEnd

// Set the configs that must not be exported and imported.
$config_blacklist = [
  'relaxed.settings',
  'relaxed.remote.*',
  'system.cron',
  'multiversion.*',
  'shortcut.*',
];
// Set default config_ignore settings.
$config['config_ignore.settings']['ignored_config_entities'] = $config_blacklist;

/**
 * Location of the site configuration files.
 *
 * The $settings['config_sync_directory'] specifies the location of file system
 * directory used for syncing configuration data. On install, the directory is
 * created. This is used for configuration imports.
 *
 * The default location for this directory is inside a randomly-named
 * directory in the public files path. The setting below allows you to set
 * its location.
 */
$settings['config_sync_directory'] = '../sync/shared';

/**
 * Salt for one-time login links, cancel links, form tokens, etc.
 *
 * This variable will be set to a random value by the installer. All one-time
 * login links will be invalidated if the value is changed. Note that if your
 * site is deployed on a cluster of web servers, you must ensure that this
 * variable has the same value on each server.
 *
 * For enhanced security, you may set this variable to the contents of a file
 * outside your document root; you should also ensure that this file is not
 * stored with backups of your database.
 *
 * Example:
 * @code
 *   $settings['hash_salt'] = file_get_contents('/home/example/salt.txt');
 * @endcode
 */
$settings['hash_salt'] = '6kxeAg7d5BvkZ9QuPO4swZlQGgsKBsFLqX4bRUI50G4GPbrNQ3SXjn7BeonKrZQyfZ0SXMNSigyJhaAm';

/**
 * Access control for update.php script.
 *
 * If you are updating your Drupal installation using the update.php script but
 * are not logged in using either an account with the "Administer software
 * updates" permission or the site maintenance account (the account that was
 * created during installation), you will need to modify the access check
 * statement below. Change the FALSE to a TRUE to disable the access check.
 * After finishing the upgrade, be sure to open this file again and change the
 * TRUE back to a FALSE!
 */
$settings['update_free_access'] = FALSE;

/**
 * Trusted host configuration.
 * @codingStandardsIgnoreStart
 * Drupal core can use the Symfony trusted host mechanism to prevent HTTP Host
 * header spoofing.
 *
 * To enable the trusted host mechanism, you enable your allowable hosts
 * in $settings['trusted_host_patterns']. This should be an array of regular
 * expression patterns, without delimiters, representing the hosts you would
 * like to allow.
 *
 * For example:
 * @code
 * $settings['trusted_host_patterns'] = array(
 *   '^www\.example\.com$',
 * );
 * @endcode
 * will allow the site to only run from www.example.com.
 *
 * If you are running multisite, or if you are running your site from
 * different domain names (eg, you don't redirect http://www.example.com to
 * http://example.com), you should specify all of the host patterns that are
 * allowed by your site.
 *
 * For example:
 * @code
 * $settings['trusted_host_patterns'] = array(
 *   '^example\.com$',
 *   '^.+\.example\.com$',
 *   '^example\.org$',
 *   '^.+\.example\.org$',
 * );
 * @endcode
 * will allow the site to run off of all variants of example.com and
 * example.org, with all subdomains included.
 * @codingStandardsIgnoreEnd
 */
$settings['trusted_host_patterns'] = [
  '.ucbweb.net$',
];

// Check WCMS_SUBSITE variable value.
if ($wcms_domain = getenv('WCMS_SUBSITE')) {
  $settings['trusted_host_patterns'][] = $wcms_domain . '$';
  $config['simple_sitemap.settings']['base_url'] = 'https://' . $wcms_domain;
}

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * The default list of directories that will be ignored by Drupal's file API.
 *
 * By default ignore node_modules and bower_components folders to avoid issues
 * with common frontend tools and recursive scanning of directories looking for
 * extensions.
 *
 * @see file_scan_directory()
 * @see \Drupal\Core\Extension\ExtensionDiscovery::scanDirectory()
 */
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

/**
 * Fast 404 pages.
 */
$config['system.performance']['fast_404']['exclude_paths'] = '/\/(?:styles)|(?:system\/files)\//';
$config['system.performance']['fast_404']['paths'] = '/\.(?:txt|png|gif|jpe?g|css|js|ico|swf|flv|cgi|bat|pl|dll|exe|asp)$/i';
$config['system.performance']['fast_404']['html'] = '<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL "@path" was not found on this server.</p></body></html>';

/**
 * Default Twig cache folder.
 */
$settings['php_storage']['twig']['directory'] = getenv('TWIG_FOLDER') ?: '/tmp';

/**
 * Azure Blob Storage settings.
 */
if (in_array($current_env, ['dev', 'preview', 'prod', 'qa'])) {
  $settings['s3fs.access_key'] = getenv('S3_ACCESS_KEY');
  $settings['s3fs.secret_key'] = getenv('S3_SECRET_KEY');
  $config['s3fs.settings']['bucket'] = getenv('DRUPAL_NAME');
  $config['s3fs.settings']['domain'] = 'static.ucbweb.net/' . getenv('DRUPAL_NAME');
  $config['s3fs.settings']['hostname'] = 'static.ucbweb.net';
  $config['s3fs.settings']['use_cname'] = TRUE;
  $config['s3fs.settings']['use_customhost'] = TRUE;
  $config['s3fs.settings']['use_https'] = TRUE;
  $config['s3fs.settings']['no_rewrite_cssjs'] = TRUE;
  $config['s3fs.settings']['public_folder'] = 'public';
  $config['s3fs.settings']['ignore_cache'] = TRUE;
  $config['s3fs.settings']['use_path_style_endpoint'] = TRUE;
  $config['s3fs.settings']['private_folder'] = 'private';
  $config['s3fs.settings']['cache_control_header'] = 'public, max-age=3600';
  $settings['s3fs.use_s3_for_public'] = TRUE;
  $settings['s3fs.use_s3_for_private'] = TRUE;
}

/**
 * Include per env settings.php.
 */
include __DIR__ . "/$current_env/settings.php";
