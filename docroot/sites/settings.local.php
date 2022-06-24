<?php

$databases['default']['default'] = array (
'database' => 'ucbcompassv3',
'username' => 'drupal',
'password' => '9603534760',
'host' => 'localhost',
'port' => '3306',
'driver' => 'mysql',
'prefix' => '',
'collation' => 'utf8mb4_general_ci',
);

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

$config['system.logging']['error_level'] = 'verbose';
