<?php

namespace Sudoku;

class Visitor
{
    /**
     * Indicates whether the visitor's OS is macOS
     * @var string|null
     */
    protected static $usesMacOs = null;

    /**
     * @return mixed
     */
    public static function usesMacOs()
    {
        if (static::$usesMacOs === null) {
            $userAgent = strtolower($_SERVER['HTTP_USER_AGENT']);
            static::$usesMacOs = (mb_strpos($userAgent, 'macintosh') !== false);
        }

        return static::$usesMacOs;
    }
}
