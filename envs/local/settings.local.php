<?php

// Database settings
// $databases['default']['default'] = array (
//   'database' => 'database',
//   'username' => 'dbuser',
//   'password' => 'dbpassword',
//   'host' => 'localhost',
//   'port' => '3306',
//   'driver' => 'mysql',
//   'prefix' => '',
//   'collation' => 'utf8mb4_general_ci',
// );

$databases['default']['default'] = array (
    'database' => 'ucbcompassv3',
    'username' => 'drupal',
    'password' => '9603534760',
    'prefix' => '',
    'host' => 'localhost',
    'port' => '3306',
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'driver' => 'mysql',
  );

// Redis settings.
// if (!drupal_installation_attempted()) {
//   $settings['redis.connection']['interface'] = 'PhpRedis';
//   $settings['redis.connection']['host']      = 'localhost';
//   $settings['redis.connection']['password']      = 'redis';
//   $settings['cache']['default'] = 'cache.backend.redis';
// }
