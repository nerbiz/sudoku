<?php

namespace Sudoku;

use PDO;
use stdClass;

class Database
{
    /**
     * @var PDO|null
     */
    protected static $connection;

    public function __construct()
    {
        static::$connection = new PDO('sqlite:../sudoku.db', null, null, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        ]);

        $this->ensureTables();
    }

    /**
     * Make sure the table(s) exist
     * @return void
     */
    protected function ensureTables(): void
    {
        static::$connection->exec('
            create table if not exists `puzzles` (
                `id` text not null,
                `password` text null,
                `start_state` text not null,
                `title` text not null,
                `notes` text not null,
                `state` text null
            );
        ');
    }

    /**
     * Find a puzzle by its ID and get its properties
     * @param string $puzzleId
     * @return stdClass|null
     */
    public function getPuzzleProperties(string $puzzleId): ?stdClass
    {
        $statement = static::$connection->prepare(
            'select * from `puzzles` where `id` = :id;'
        );

        $statement->execute(['id' => $puzzleId]);
        $result = $statement->fetch();
        if ($result === false) {
            return null;
        }

        return $result;
    }
}
