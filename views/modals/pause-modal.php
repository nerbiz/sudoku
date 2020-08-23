<?php
$modalId = 'pause-modal';
$modalTitle = 'Game paused';
ob_start();
?>

    <p>The game is paused.</p>

    <p>
        <a href="#" class="click-prevent" id="game-resume-button">Resume game</a>
    </p>

<?php
$modalContent = ob_get_clean();
require __DIR__ . '/modal-base.php';
