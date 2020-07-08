<?php
use Sudoku\Webpack;
?>

<!DOCTYPE html>
<html class="page-html">
    <head>
        <title>
            <?php echo getenv('APP_NAME'); ?>
        </title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap">
        <link rel="stylesheet" href="<?php echo Webpack::getAssetUrl('app.css'); ?>">
    </head>

    <body class="page-body">
        <main class="page-content">
            <section id="main-grid">
                <?php for ($i = 0; ++$i < 82;): ?>
                    <div class="grid-cell" id="grid-cell-<?php echo $i; ?>">
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
                    </div>

                    <?php // Add a line break after every 9th cell ?>
                    <?php if ($i % 9 === 0): ?>
                        <div class="flex-line-break"></div>
                    <?php endif; ?>
                <?php endfor; ?>
            </section>

            <section id="sudoku-controls">
                <p>Time: <span id="elapsed-time">0:00</span></p>

                <p>
                    Input mode:<br>
                    <label>
                        <input type="radio" name="input_mode" value="1"> Normal
                    </label><br>
                    <label>
                        <input type="radio" name="input_mode" value="2"> Corner marks
                    </label><br>
                    <label>
                        <input type="radio" name="input_mode" value="3"> Center marks
                    </label><br>
                </p>

                <p>Controls:</p>
                <p>
                    Arrow keys and WASD keys: navigate the grid<br>
                    Numbers and keypad: set a pencil mark or value<br>
                    Delete and backspace keys: remove a cell value<br>
                    Spacebar, I, O and P keys: change input mode<br>
                    Hold ctrl or command key: enable multiple cell selections<br>
                    Ctrl or command key + mouseclick: (de)select a cell<br>
                    Ctrl or command key + arrow keys or WASD keys: select multiple cells<br>
                    Ctrl+Z: undo<br>
                    Ctrl+Shift+Z or Ctrl+Y: redo<br>
                    Esc: pause / unpause
                </p>
                <p>
                    Mouseclick: select a cell<br>
                    Mouse drag: select multiple cells<br>
                </p>
            </section>
        </main>

        <script src="<?php echo Webpack::getAssetUrl('app.js'); ?>"></script>
    </body>
</html>
