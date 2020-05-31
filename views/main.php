<?php
use Sudoku\Webpack;
?>

<!DOCTYPE html>
<html class="page-html">
    <head>
        <title>
            <?php echo getenv('APP_NAME'); ?>
        </title>
        <link rel="stylesheet" href="<?php echo Webpack::getAssetUrl('app.css'); ?>">
    </head>

    <body class="page-body">
        <main class="page-content">
            <section id="sudoku-grid">
                <?php for ($i = 0; ++$i < 82;): ?>
                    <div class="grid-cell" id="grid-cell-<?php echo $i; ?>">
                        <div class="corner-marks">
                            <?php for ($j = 0; ++$j < 9;): ?>
                                <span class="corner-mark" id="corner-mark-<?php echo $j; ?>"></span>
                            <?php endfor; ?>
                        </div>

                        <span class="center-mark"></span>

                        <span class="cell-value"></span>
                    </div>
                <?php endfor; ?>
            </section>
        </main>

        <script src="<?php echo Webpack::getAssetUrl('app.js'); ?>"></script>
    </body>
</html>
