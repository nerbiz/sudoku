<?php
use Sudoku\Webpack;
?>

<!DOCTYPE html>
<html class="page-html">
    <head>
        <meta charset="utf-8">
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

                <h2>Controls</h2>

                <h4>Navigating the grid</h4>
                <p>
                    <span class="keyboard-button">↑</span>
                    <span class="keyboard-button">←</span>
                    <span class="keyboard-button">↓</span>
                    <span class="keyboard-button">→</span>
                    <span class="keyboard-button">w</span>
                    <span class="keyboard-button">a</span>
                    <span class="keyboard-button">s</span>
                    <span class="keyboard-button">d</span>
                </p>

                <h4>Setting a pencil mark or value</h4>
                <span class="keyboard-button">1</span>
                <span class="keyboard-button">2</span>
                <span class="keyboard-button">3</span>
                <span class="keyboard-button">4</span>
                <span class="keyboard-button">5</span>
                <span class="keyboard-button">6</span>
                <span class="keyboard-button">7</span>
                <span class="keyboard-button">8</span>
                <span class="keyboard-button">9</span>

                <h4>Removing a cell value</h4>
                <span class="keyboard-button">Delete</span>
                <span class="keyboard-button">Backspace</span>

                <h4>Changing the input mode</h4>
                <span class="keyboard-button">Spacebar</span>
                <span class="keyboard-button">i</span>
                <span class="keyboard-button">o</span>
                <span class="keyboard-button">p</span>

                <h4>Making multiple cell selections</h4>
                <span class="keyboard-button">Ctrl</span> or
                <span class="keyboard-button">Cmd</span> (hold)

                <h4>(De)select a cell</h4>
                <span class="keyboard-button">Ctrl</span>
                + mouseclick

                <h4>Selecting multiple cells</h4>
                (<span class="keyboard-button">Ctrl</span> or
                <span class="keyboard-button">Cmd</span>) +
                <span class="keyboard-button">↑</span>
                <span class="keyboard-button">←</span>
                <span class="keyboard-button">↓</span>
                <span class="keyboard-button">→</span>
                <span class="keyboard-button">w</span>
                <span class="keyboard-button">a</span>
                <span class="keyboard-button">s</span>
                <span class="keyboard-button">d</span>

                <h4>Undoing an action</h4>
                <span class="keyboard-button">Ctrl</span> +
                <span class="keyboard-button">z</span>

                <h4>Redoing an action</h4>
                <span class="keyboard-button">Ctrl</span> +
                <span class="keyboard-button">y</span>
                or
                <span class="keyboard-button">Ctrl</span> +
                <span class="keyboard-button">Shift</span> +
                <span class="keyboard-button">z</span>

                <h4>Pausing and resuming</h4>
                <span class="keyboard-button">Esc</span>

                <p>
                    Mouseclick: select a cell<br>
                    Mouse drag: select multiple cells<br>
                </p>
            </section>
        </main>

        <script src="<?php echo Webpack::getAssetUrl('app.js'); ?>"></script>
    </body>
</html>
