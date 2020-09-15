<?php

namespace Sudoku;

class UrlParser
{
    /**
     * Get the puzzle ID from the URL
     * @return string|null
     */
    public static function getPuzzleId(): ?string
    {
        $requestUriParts = array_values(array_filter(explode('/', $_SERVER['REQUEST_URI'])));
        return $requestUriParts[0] ?? null;
    }
}
