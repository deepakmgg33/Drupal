<?php

/**
 * @file
 * 
 * Settings that should be added only after the installation. 
 */

 // Redis settings.
if (!drupal_installation_attempted()) {
    // $settings['redis.connection']['interface'] = 'PhpRedis';
    // $settings['redis.connection']['host']      = 'redis';
    // $settings['cache']['default'] = 'cache.backend.redis';
    // $settings['container_yamls'][] = 'modules/contrib/redis/example.services.yml';
}
