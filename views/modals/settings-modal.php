<?php
$modalId = 'settings-modal';
$modalTitle = 'Settings';
ob_start();
?>

    <label>
        <input type="checkbox" id="setting-show-clock">
        Show the clock
    </label>

    <label>
        <input type="checkbox" id="setting-auto-error-checking">
        Check for errors automatically
    </label>

    <label>
        <input type="checkbox" id="setting-auto-remove-pencil-marks">
        Automatically remove pencil marks when setting values
    </label>

    <h3>Highlighting</h3>

    <label>
        <input type="checkbox" id="setting-highlight-row">
        Highlight row of selected cell
    </label>

    <label>
        <input type="checkbox" id="setting-highlight-column">
        Highlight column of selected cell
    </label>

    <label>
        <input type="checkbox" id="setting-highlight-box">
        Highlight 3x3 box of selected cell
    </label>

    <label>
        <input type="checkbox" id="setting-highlight-value">
        Highlight cells containing the same digit (value)
    </label>

    <label>
        <input type="checkbox" id="setting-highlight-pencil-marks">
        Highlight cells containing the same digit (pencil mark)
    </label>

<?php
$modalContent = ob_get_clean();
require __DIR__ . '/modal-base.php';
