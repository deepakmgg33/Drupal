<?php

/**
 * Default local host patterns.
 */
$settings['trusted_host_patterns'] = [
  '.loc',
  'localhost',
  '.dev',
  '.docksal',
];

// Config split.
$config['config_split.config_split.local']['status'] = TRUE;


// Environment indicator.
$config['environment_indicator.indicator']['name'] = 'Local';
$config['environment_indicator.indicator']['bg_color'] = '#23812D';
$config['environment_indicator.indicator']['fg_color'] = '#FFFFFF';

/**
 * Load local development override configuration, if available.
 *
 * Use settings.local.php to override variables on secondary (staging,
 * development, etc) installations of this site. Typically used to disable
 * caching, JavaScript/CSS compression, re-routing of outgoing emails, and
 * other things that should not happen on development and testing sites.
 *
 * Keep this code block at the end of this file to take full effect.
 */
if (file_exists(__DIR__ . '/settings.local.php')) {
  include __DIR__ . '/settings.local.php';
}
if (file_exists(__DIR__ . '/local.services.yml')) {
  $settings['container_yamls'][] = __DIR__ . '/local.services.yml';
}
