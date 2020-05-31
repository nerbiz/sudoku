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
        </main>

        <script src="<?php echo Webpack::getAssetUrl('app.js'); ?>"></script>
    </body>
</html>
