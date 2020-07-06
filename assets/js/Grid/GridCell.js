import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';
import GridCellEventHandler from '../EventHandlers/GridCellEventHandler';
import InputMode from '../InputMode';

/**
 * @param {number} cellNumber
 * @constructor
 */
export default function GridCell(cellNumber) {
    const self = this;

    /**
     * The 1-based cell number in the grid
     * @type {number}
     */
    self.cellNumber = cellNumber;

    /**
     * The row the cell belongs to
     * @type {GridRow|null}
     */
    self.gridRow = null;

    /**
     * The column the cell belongs to
     * @type {GridColumn|null}
     */
    self.gridColumn = null;

    /**
     * The 3x3 box the cell belongs to
     * @type {GridBox|null}
     */
    self.gridBox = null;

    /**
     * The HTML element that is the cell
     * @type {HTMLElement|null}
     */
    self.element = null;

    /**
     * Whether the cell value is set at the start
     * @type {boolean}
     */
    self.isPrefilled = false;

    /**
     * The background color number of the cell
     * @type {number}
     */
    self.colorNumber = 1;

    /**
     * The value of the cell
     * @type {number|null}
     * @private
     */
    let _value = null;

    /**
     * The pencil mark values (corner mode)
     * @type {number[]}
     * @private
     */
    let _cornerMarks = [];

    /**
     * The pencil mark values (center mode)
     * @type {number[]}
     * @private
     */
    let _centerMarks = [];

    /**
     * Whether the cell is currently selected
     * @type {boolean}
     * @private
     */
    let _isSelected = false;

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        // Get the HTML cell element
        self.element = document.getElementById(`grid-cell-${self.cellNumber}`);
        if (self.element === null) {
            throw new Error(`Cell element with ID 'grid-cell-${self.cellNumber}' not found`);
        }

        // Register event handlers
        const eventHandler = new GridCellEventHandler(self);
        eventHandler.register();
    };

    /**
     * Wrapper for value, corner-marks and center-marks setting
     * @param {number|null} digit
     * @return {void}
     */
    self.setDigit = digit => {
        switch (Sudoku.inputMode.getMode()) {
            case InputMode.MODE_VALUE:
                self.setValue(digit);
                break;
            case InputMode.MODE_CORNER:
                self.setCornerMark(digit);
                break;
            case InputMode.MODE_CENTER:
                self.setCenterMark(digit);
                break;
        }
    };

    /**
     * @return {number|null}
     */
    self.getValue = () => _value;

    /**
     * @param {number|null} digit
     * @return {void}
     */
    self.setValue = digit => {
        // Remove the value, if the same digit is entered
        if (digit === self.getValue()) {
            digit = null;
        }

        // Show or hide the pencil marks
        toggleMarksVisibility((digit === null));

        // Show the value on screen
        self.element.getElementsByClassName('cell-value')[0].innerText = digit;

        _value = digit;
    };

    /**
     * @return {number[]}
     */
    self.getCornerMarks = () => _cornerMarks;

    /**
     * Add or remove a digit from the corner marks
     * @param {number} digit
     * @return {void}
     */
    self.setCornerMark = digit => {
        const cornerMarks = self.getCornerMarks();

        // Remove if the digit exists, otherwise add it
        const existingIndex = cornerMarks.indexOf(digit);
        if (existingIndex > -1) {
            cornerMarks.splice(existingIndex, 1);
        } else {
            // Don't add if the maximum amount is reached
            if (cornerMarks.length < 8) {
                cornerMarks.push(digit);
            }
        }

        // Clear all corner marks first
        const allElements = self.element.getElementsByClassName('corner-mark');
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].innerText = null;
        }

        // Show the corner marks
        cornerMarks.sort((a, b) => a - b)
            .forEach((item, index) => document
                .getElementById(`corner-mark-${self.cellNumber}-${index + 1}`)
                .innerText = item.toString(10));

        _cornerMarks = cornerMarks;
    };

    /**
     * @return {number[]}
     */
    self.getCenterMarks = () => _centerMarks;

    /**
     * Add or remove a digit from the center marks
     * @param {number} digit
     * @return {void}
     */
    self.setCenterMark = digit => {
        const centerMarks = self.getCenterMarks();

        // Remove if the digit exists, otherwise add it
        const existingIndex = centerMarks.indexOf(digit);
        if (existingIndex > -1) {
            centerMarks.splice(existingIndex, 1);
        } else {
            // Don't add if the maximum amount is reached
            if (centerMarks.length < 5) {
                centerMarks.push(digit);
            }
        }

        // Show the center marks
        self.element.getElementsByClassName('center-marks')[0]
            .innerText = centerMarks.sort((a, b) => a - b).join('');

        _centerMarks = centerMarks;
    };

    /**
     * Toggle the visibility of the pencil marks
     * @param {boolean} show
     */
    const toggleMarksVisibility = show => {
        const toggleMethod = (show) ? 'remove' : 'add';

        // Toggle the corner marks
        for (let i = 1; i < 9; i++) {
            document.getElementById(`corner-mark-${self.cellNumber}-${i}`)
                .classList[toggleMethod]('hide');
        }

        // Toggle the center marks
        self.element.getElementsByClassName('center-marks')[0]
            .classList[toggleMethod]('hide');
    };

    /**
     * @return {boolean}
     */
    self.getIsSelected = () => _isSelected;

    /**
     * @param {boolean} selected
     * @return {void}
     */
    self.setIsSelected = selected => {
        if (selected) {
            self.element.classList.add('selected');

            // Don't add duplicates to the list of selected cells
            if (! self.getIsSelected()) {
                Sudoku.grid.addSelectedCell(self);
            }
        }

        else {
            self.element.classList.remove('selected');
        }

        _isSelected = selected;
    };

    /**
     * @param {GridRow} row
     * @return {GridRow}
     */
    self.setRow = row => self.gridRow = row;

    /**
     * @param {GridColumn} column
     * @return {GridColumn}
     */
    self.setColumn = column => self.gridColumn = column;

    /**
     * @param {GridBox} box
     * @return {GridBox}
     */
    self.setBox = box => self.gridBox = box;

    /**
     * Set the error status of the element
     * @param {boolean} on
     * @return {void}
     */
    self.setErrorStatus = (on = true) => {
        if (on) {
            self.element.classList.add('has-error');
        } else {
            self.element.classList.remove('has-error');
        }
    };

    /**
     * Get the state of the cell
     * @return {string}
     */
    self.getState = () => 'n' + self.cellNumber
        + (self.isPrefilled ? 'p' : '')
        + 'v' + self.getValue()
        + 'c' + self.colorNumber
        + 'cr' + self.getCornerMarks().join('')
        + 'cn' + self.getCenterMarks().join('');
}
