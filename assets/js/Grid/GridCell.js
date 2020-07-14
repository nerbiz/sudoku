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
     * @private
     */
    const _cellNumber = cellNumber;

    /**
     * The HTML element that is the cell
     * @type {HTMLDivElement|null}
     * @private
     */
    let _element = null;

    /**
     * The row the cell belongs to
     * @type {GridRow|null}
     * @private
     */
    let _gridRow = null;

    /**
     * The column the cell belongs to
     * @type {GridColumn|null}
     * @private
     */
    let _gridColumn = null;

    /**
     * The 3x3 box the cell belongs to
     * @type {GridBox|null}
     * @private
     */
    let _gridBox = null;

    /**
     * Whether the cell value is set at the start
     * @type {boolean}
     * @private
     */
    let _isPrefilled = false;

    /**
     * The background color number of the cell
     * @type {number}
     * @private
     */
    let _colorNumber = 1;

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
     * Whether the cell is currently highlighted
     * @type {boolean}
     * @private
     */
    let _isHighlighted = false;

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        // Get the HTML cell element
        _element = document.getElementById(`grid-cell-${self.getCellNumber()}`);
        if (_element === null) {
            throw new Error(`Cell element with ID 'grid-cell-${self.getCellNumber()}' not found`);
        }

        // Register event handlers
        const eventHandler = new GridCellEventHandler(self);
        eventHandler.register();
    };

    /**
     * @return {number}
     */
    self.getCellNumber = () => _cellNumber;

    /**
     * @return {HTMLDivElement|null}
     */
    self.getElement = () => _element;

    /**
     * @return {boolean}
     */
    self.isPrefilled = () => _isPrefilled;

    /**
     * @return {number}
     */
    self.getColorNumber = () => _colorNumber;

    /**
     * Wrapper for value, corner-marks and center-marks setting
     * @param {number|null} digit
     * @param {number|null} mode The input mode, uses current mode by default
     * @return {void}
     * @see InputMode for the mode constants
     */
    self.setDigit = (digit, mode = null) => {
        // Use the current input mode, if null
        if (mode === null) {
            mode = Sudoku.inputMode.getMode();
        }

        // Null means deleting
        if (digit === null) {
            // Remove the marks only if no value is filled in
            if (self.getValue() === null) {
                self.setCornerMarks([]);
                self.setCenterMarks([]);
            } else {
                self.setValue(null);
            }

            return;
        }

        switch (mode) {
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
        showMarks(digit === null);

        // Show the value on screen
        self.getElement().getElementsByClassName('cell-value')[0].innerText = digit;

        _value = digit;

        // Highlight other cells, also when the value is removed
        Sudoku.grid.highlightRelatedCells();
    };

    /**
     * Check if the cell has a value
     * @param {number|null} digit
     * @return {boolean}
     */
    self.hasValue = (digit = null) => {
        // Check if the cell has any value
        if (digit === null) {
            return (self.getValue() !== null);
        }

        // Or check for a specific value
        return (self.getValue() === digit);
    };

    /**
     * @return {number[]}
     */
    self.getCornerMarks = () => _cornerMarks;

    /**
     * Add or remove a digit from the corner marks
     * @param {number|null} digit
     * @return {void}
     */
    self.setCornerMark = digit => {
        // Don't set a corner mark, if a value is filled in
        if (self.getValue() !== null) {
            return;
        }

        const cornerMarks = self.getCornerMarks();

        // Remove if the digit exists, otherwise add it
        const existingIndex = cornerMarks.indexOf(digit);
        if (existingIndex > -1) {
            cornerMarks.splice(existingIndex, 1);
        } else {
            // Don't add if the maximum amount is reached
            if (digit !== null && cornerMarks.length < 8) {
                cornerMarks.push(digit);
            }
        }

        self.setCornerMarks(cornerMarks);
    };

    /**
     * @param {number[]} cornerMarks
     * @return {number[]}
     */
    self.setCornerMarks = cornerMarks => {
        _cornerMarks = cornerMarks;
        fillCornerMarks();
    };

    /**
     * Fill corner marks in the cell
     * @return {void}
     */
    const fillCornerMarks = () => {
        // Clear all corner marks first
        const allElements = self.getElement().getElementsByClassName('corner-mark');
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].innerText = null;
        }

        // Show the corner marks
        self.getCornerMarks()
            .sort((a, b) => a - b)
            .forEach((item, index) => {
                document.getElementById(`corner-mark-${self.getCellNumber()}-${index + 1}`)
                    .innerText = item.toString(10);
            });
    };

    /**
     * Check if the cell has a corner mark
     * @param {number|null} digit
     * @return {boolean}
     */
    self.hasCornerMark = (digit = null) => {
        // Check if the cell has any corner mark
        if (digit === null) {
            return (self.getCornerMarks().length > 0);
        }

        // Or check for a specific value
        return (self.getCornerMarks().indexOf(digit) > -1);
    };

    /**
     * @return {number[]}
     */
    self.getCenterMarks = () => _centerMarks;

    /**
     * Add or remove a digit from the center marks
     * @param {number|null} digit
     * @return {void}
     */
    self.setCenterMark = digit => {
        // Don't set a center mark, if a value is filled in
        if (self.getValue() !== null) {
            return;
        }

        const centerMarks = self.getCenterMarks();

        // Remove if the digit exists, otherwise add it
        const existingIndex = centerMarks.indexOf(digit);
        if (existingIndex > -1) {
            centerMarks.splice(existingIndex, 1);
        } else {
            // Don't add if the maximum amount is reached
            if (digit !== null && centerMarks.length < 5) {
                centerMarks.push(digit);
            }
        }

        self.setCenterMarks(centerMarks);
    };

    /**
     * @param {number[]} centerMarks
     * @return {number[]}
     */
    self.setCenterMarks = centerMarks => {
        _centerMarks = centerMarks;
        fillCenterMarks();
    };

    /**
     * Fill corner marks in the cell
     * @return {void}
     */
    const fillCenterMarks = () => {
        const centerMarks = self.getCenterMarks().sort((a, b) => a - b).join('');
        self.getElement().getElementsByClassName('center-marks')[0].innerText = centerMarks;
    };

    /**
     * Check if the cell has a center mark
     * @param {number|null} digit
     * @return {boolean}
     */
    self.hasCenterMark = (digit = null) => {
        // Check if the cell has any center mark
        if (digit === null) {
            return (self.getCenterMarks().length > 0);
        }

        // Or check for a specific value
        return (self.getCenterMarks().indexOf(digit) > -1);
    };

    /**
     * Toggle the visibility of the pencil marks
     * @param {boolean} show
     */
    const showMarks = show => {
        const toggleMethod = show ? 'remove' : 'add';

        // Toggle the corner marks
        for (let i = 1; i < 9; i++) {
            document.getElementById(`corner-mark-${self.getCellNumber()}-${i}`)
                .classList[toggleMethod]('hide');
        }

        // Toggle the center marks
        self.getElement().getElementsByClassName('center-marks')[0]
            .classList[toggleMethod]('hide');
    };

    /**
     * @return {boolean}
     */
    self.isSelected = () => _isSelected;

    /**
     * @param {boolean} selected
     * @return {void}
     */
    self.setSelectedState = selected => {
        const toggleMethod = selected ? 'add' : 'remove';
        self.getElement().classList[toggleMethod]('is-selected');

        // Don't add duplicates to the list
        if (selected && ! self.isSelected()) {
            Sudoku.grid.addSelectedCell(self);
        }

        _isSelected = selected;
    };

    /**
     * @return {boolean}
     */
    self.isHighlighted = () => _isHighlighted;

    /**
     * @param {boolean} highlighted
     * @return {void}
     */
    self.setHighlightedState = highlighted => {
        const toggleMethod = highlighted ? 'add' : 'remove';
        self.getElement().classList[toggleMethod]('is-highlighted');

        // Don't add duplicates to the list
        if (highlighted && ! self.isHighlighted()) {
            Sudoku.grid.addHighlightedCell(self);
        }

        _isHighlighted = highlighted;
    };

    /**
     * @return {GridRow|null}
     */
    self.getRow = () => _gridRow;

    /**
     * @param {GridRow} row
     * @return {GridRow}
     */
    self.setRow = row => _gridRow = row;

    /**
     * @return {GridColumn|null}
     */
    self.getColumn = () => _gridColumn;

    /**
     * @param {GridColumn} column
     * @return {GridColumn}
     */
    self.setColumn = column => _gridColumn = column;

    /**
     * @return {GridBox|null}
     */
    self.getBox = () => _gridBox;

    /**
     * @param {GridBox} box
     * @return {GridBox}
     */
    self.setBox = box => _gridBox = box;

    /**
     * Set the error status of the element
     * @param {boolean} on
     * @return {void}
     */
    self.setErrorState = on => {
        const toggleMethod = on ? 'add' : 'remove';
        self.getElement().classList[toggleMethod]('has-error');
    };

    /**
     * Get the state of the cell
     * @return {string}
     */
    self.getState = () => 'n' + self.getCellNumber()
        + (self.isPrefilled() ? 'p' : '')
        + 'v' + self.getValue()
        + 'c' + self.getColorNumber()
        + 'cr' + self.getCornerMarks().join('')
        + 'cn' + self.getCenterMarks().join('');
}
