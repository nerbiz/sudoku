<?php
$modalId = 'pause-modal';
$modalTitle = 'Game paused';
ob_start();
?>

    <p>The game is paused</p>

<?php
$modalContent = ob_get_clean();
require __DIR__ . '/modal-base.php';
