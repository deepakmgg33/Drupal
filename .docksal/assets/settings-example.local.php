<?php

/**
 * @file
 * Default settings file for the docksal.
 */

// Database settings.
$databases['default']['default'] = array (
  'database' => 'default',
  'username' => 'user',
  'password' => 'user',
  'host' => 'db',
  'port' => '3306',
  'driver' => 'mysql',
  'prefix' => '',
  'collation' => 'utf8mb4_general_ci',
);

// Post-install settings.
if (file_exists(__DIR__ . '/settings.postinstall.php')) {
  include __DIR__ . '/settings.postinstall.php';
}
