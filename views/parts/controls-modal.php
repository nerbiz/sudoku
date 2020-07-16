<?php
use Sudoku\Visitor;

$modalId = 'controls-modal';
$modalTitle = 'Controls';

$ctrlButtonName = Visitor::usesMacOs() ? 'Cmd' : 'Ctrl';
ob_start();
?>

    <h3>Mouse</h3>
    <p>
        Mouseclick: select a cell<br>
        Mouse drag: select multiple cells<br>
    </p>

    <p>
        Allow multiple selections by holding
        <span class="keyboard-button">
            <?php echo $ctrlButtonName; ?>
        </span>
    </p>

    <h3>Keyboard</h3>

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

    <h4>Allow multiple selections</h4>
    <span class="keyboard-button">
        <?php echo $ctrlButtonName; ?>
    </span> (hold)

    <h4>(De)select a cell</h4>
    <span class="keyboard-button">
        <?php echo $ctrlButtonName; ?>
    </span> + mouseclick

    <h4>Selecting multiple cells</h4>
    <span class="keyboard-button">
        <?php echo $ctrlButtonName; ?>
    </span>
    + <span class="keyboard-button">↑</span>
    <span class="keyboard-button">←</span>
    <span class="keyboard-button">↓</span>
    <span class="keyboard-button">→</span>
    <span class="keyboard-button">w</span>
    <span class="keyboard-button">a</span>
    <span class="keyboard-button">s</span>
    <span class="keyboard-button">d</span>

    <h4>Undoing an action</h4>
    <span class="keyboard-button">
        <?php echo $ctrlButtonName; ?>
    </span>
    + <span class="keyboard-button">z</span>

    <h4>Redoing an action</h4>
    <span class="keyboard-button">
        <?php echo $ctrlButtonName; ?>
    </span>
    + <span class="keyboard-button">y</span>
    or <span class="keyboard-button">
        <?php echo $ctrlButtonName; ?>
    </span>
    + <span class="keyboard-button">Shift</span> +
    <span class="keyboard-button">z</span>

    <h4>Pausing and resuming</h4>
    <span class="keyboard-button">Esc</span>

<?php
$modalContent = ob_get_clean();
require __DIR__ . '/modal-base.php';
