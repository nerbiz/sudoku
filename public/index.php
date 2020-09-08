<?php

use Dotenv\Dotenv;
use Sudoku\Webpack;
use voku\helper\HtmlMin;

require __DIR__ . '/../vendor/autoload.php';

// Load .env values
$dotEnv = Dotenv::createImmutable(__DIR__ . '/../');
$dotEnv->load();

// Read the Webpack manifest
Webpack::readManifest(__DIR__ . '/dist/manifest.json');

// Show the page, with minified HTML
ob_start();
require __DIR__ . '/../views/main.php';
echo (new HtmlMin())->minify(ob_get_clean());
