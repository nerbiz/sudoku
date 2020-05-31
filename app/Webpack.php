<?php

namespace Sudoku;

use stdClass;

class Webpack
{
    /**
     * The parsed Webpack manifest
     * @var stdClass
     */
    protected static $manifest;

    /**
     * Read a manifest file
     * @param  string $path The full path to the manifest file
     * @return void
     */
    public static function readManifest(string $path): void
    {
        if (! is_readable($path)) {
            return;
        }

        static::$manifest = json_decode(file_get_contents($path));
    }

    /**
     * Get an asset URL by the original name
     * @param  string $originalFilename
     * @return string|null
     */
    public static function getAssetUrl(string $originalFilename): ?string
    {
        if (isset(static::$manifest->{$originalFilename})) {
            return static::$manifest->{$originalFilename};
        }

        return null;
    }
}
