<?php

namespace Sudoku;

class Application
{
    /**
     * The environment of the application
     * @var string|null
     */
    protected static $environment = null;

    /**
     * @return string|null
     */
    public static function getEnvironment(): ?string
    {
        if (static::$environment === null) {
            static::$environment = getenv('APP_ENV');
        }

        return static::$environment;
    }

    /**
     * Determine if errors should be reported
     * @return void
     */
    public static function determineErrorReporting(): void
    {
        if (static::getEnvironment() === 'production') {
            error_reporting(0);
            ini_set('display_errors', 0);
        } else {
            error_reporting(E_ALL);
            ini_set('display_errors', 1);
        }
    }
}
