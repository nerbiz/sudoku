<?php

use Dotenv\Dotenv;
use Sudoku\Webpack;

require __DIR__ . '/vendor/autoload.php';

// Load .env values
$dotEnv = Dotenv::createImmutable(__DIR__);
$dotEnv->load();

// Read the Webpack manifest
Webpack::readManifest(__DIR__ . '/dist/manifest.json');

// Show the page
require __DIR__ . '/views/main.php';
