<?php

namespace Sudoku;

use stdClass;

class Webpack
{
    /**
     * The parsed Webpack manifest
     * @var stdClass|null
     */
    protected static $manifest = null;

    /**
     * Read a manifest file
     * @param  string $path The full path to the manifest file
     * @return void
     */
    public static function readManifest(string $path): void
    {
        if (! is_readable($path)) {
            throw new \Exception(sprintf(
                "%s(): The path '%s' is not readable, or doesn't exist",
                __METHOD__,
                is_object($path) ? get_class($path) : $path
            ));
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
