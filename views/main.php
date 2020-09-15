<?php

use Sudoku\Database;
use Sudoku\UrlParser;
use Sudoku\Webpack;

// Get puzzle properties
$database = new Database();
$puzzleId = UrlParser::getPuzzleId();
$puzzleProperties = ($puzzleId !== null)
    ? $database->getPuzzleProperties($puzzleId)
    : null;
?>

<!DOCTYPE html>
<html class="page-html">
    <head>
        <meta charset="utf-8">
        <meta id="meta-app-name" name="app-name" content="<?php echo getenv('APP_NAME'); ?>">
        <title class="page-title">
            <?php echo getenv('APP_NAME'); ?>
        </title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap">
        <link rel="stylesheet" href="<?php echo Webpack::getAssetUrl('app.css'); ?>">
    </head>

    <body id="page-body">
        <?php require __DIR__ . '/parts/header.php'; ?>

        <main id="page-content">
            <ul id="main-grid">
                <?php for ($i = 0; ++$i < 82;): ?>
                    <li class="grid-cell" id="grid-cell-<?php echo $i; ?>">
                        <div class="grid-cell-borders"></div>

                        <div class="grid-cell-content">
                            <div class="corner-marks">
                                <?php for ($j = 0; ++$j < 9;): ?>
                                    <span class="corner-mark corner-mark-<?php echo $j; ?>"
                                          id="corner-mark-<?php echo $i . '-' . $j; ?>"
                                    ></span>
                                <?php endfor; ?>
                            </div>

                            <span class="center-marks"
                                  id="center-marks-<?php echo $i; ?>"
                            ></span>

                            <span class="cell-value"></span>
                        </div>
                    </li>

                    <?php // Add a line break after every 9th cell ?>
                    <?php if ($i % 9 === 0): ?>
                        <div class="flex-line-break"></div>
                    <?php endif; ?>
                <?php endfor; ?>
            </ul>

            <aside id="meta-panel">
                <p>
                    Puzzle title<br>
                    <input type="text" id="puzzle-title"><br>

                    Puzzle notes<br>
                    <textarea id="puzzle-notes"></textarea>
                </p>

                <p>
                    Input mode:<br>
                    <label id="input-mode-value-label">
                        <input type="radio" name="input_mode" value="1">
                        Normal
                    </label>
                    <label id="input-mode-corner-label">
                        <input type="radio" name="input_mode" value="2">
                        Corner marks
                    </label>
                    <label id="input-mode-center-label">
                        <input type="radio" name="input_mode" value="3">
                        Center marks
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox" id="setting-auto-candidate">
                        Automatically show candidates
                    </label>
                </p>
            </aside>
        </main>

        <section id="modal-backdrop">
            <?php require __DIR__ . '/modals/pause-modal.php'; ?>
            <?php require __DIR__ . '/modals/settings-modal.php'; ?>
            <?php require __DIR__ . '/modals/controls-modal.php'; ?>
        </section>

        <script src="<?php echo Webpack::getAssetUrl('app.js'); ?>"></script>
        <script>
            Sudoku.startState = '<?php echo $puzzleProperties->start_state ?? ''; ?>';
            Sudoku.state = '<?php echo $puzzleProperties->state ?? ''; ?>';
        </script>
    </body>
</html>
