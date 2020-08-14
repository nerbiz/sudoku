import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';
import GridCellEventHandler from '../EventHandlers/GridCellEventHandler';
import InputMode from '../InputMode';
import CornerMarks from './PencilMarks/CornerMarks';
import CenterMarks from './PencilMarks/CenterMarks';

/**
 * The maximum amount of pencil marks
 * @type {number}
 * @static
 */
GridCell.MAX_CORNER_MARKS = 8;
GridCell.MAX_CENTER_MARKS = 5;

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
     * @type {HTMLLIElement|null}
     * @private
     */
    let _element = null;

    /**
     * The corner marks of the cell
     * @type {CornerMarks}
     * @private
     */
    const _cornerMarks = new CornerMarks(self);

    /**
     * The center marks of the cell
     * @type {CenterMarks}
     * @private
     */
    const _centerMarks = new CenterMarks(self);

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
     * @return {HTMLLIElement|null}
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
        // Remove error state in manual error checking mode
        if (! Sudoku.settings.autoErrorCheckingState()) {
            self.setErrorState(false);
        }

        // Use the current input mode, if null
        if (mode === null) {
            mode = Sudoku.inputMode.getMode();
        }

        // Null means deleting
        if (digit === null) {
            // Remove the marks only if no value is filled in
            if (self.getValue() === null) {
                self.getCornerMarks().setDigits([]);

                if (! Sudoku.settings.autoCandidateState()) {
                    self.getCenterMarks.setDigits([]);
                }
            } else {
                self.toggleValue(null);
            }

            return;
        }

        switch (mode) {
            case InputMode.MODE_VALUE:
                self.toggleValue(digit);
                break;
            case InputMode.MODE_CORNER:
                self.getCornerMarks().toggleDigit(digit);
                break;
            case InputMode.MODE_CENTER:
                self.getCenterMarks().toggleDigit(digit);
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
    self.toggleValue = digit => {
        // Remove the value, if the same digit is entered
        if (digit === self.getValue()) {
            digit = null;
        }

        // Show or hide the pencil marks
        _toggleMarksVisibility(digit === null);

        // Show the value on screen
        self.getElement().getElementsByClassName('cell-value')[0].innerText = digit;

        _value = digit;

        // Highlight other cells
        Sudoku.gridCellHighlighter.highlightRelatedCells();

        // Remove pencil marks of related cells, if needed
        if (Sudoku.settings.autoRemovePencilMarksState() === true) {
            _removeRelatedPencilMarks(digit);
        }

        // Show possible candidates if needed
        if (Sudoku.settings.autoCandidateState() === true) {
            Sudoku.grid.determineCandidates();
        }
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
     * Remove a pencil mark
     * @param type 'corner' or 'center'
     * @param digit
     * @return {void}
     */
    self.removePencilMark = (type, digit) => {
        if (['corner', 'center'].indexOf(type) < 0) {
            throw new Error(`Invalid pencil mark type given, only 'corner' and 'center' are valid, '${type}' given`);
        }

        const pencilMarksObject = (type === 'corner')
            ? self.getCornerMarks()
            : self.getCenterMarks();

        // Only remove the digit, if it exists
        const pencilMarks = pencilMarksObject.get();
        const digitIndex = pencilMarks.indexOf(digit);
        if (digitIndex > -1) {
            pencilMarks.splice(digitIndex, 1);
            pencilMarksObject.setDigits(pencilMarks);
        }
    };

    /**
     * Toggle the visibility of the pencil marks
     * @param {boolean} show
     * @private
     */
    const _toggleMarksVisibility = show => {
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
     * Remove pencil marks of related cells, based on cell value
     * @param {number} digit
     * @return {void}
     * @private
     */
    const _removeRelatedPencilMarks = digit => {
        self.getRow().getCells()
            .concat(self.getColumn().getCells())
            .concat(self.getBox().getCells())
            .forEach(cell => {
                cell.removePencilMark('corner', digit);
                cell.removePencilMark('center', digit);
            });
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
            Sudoku.gridCellHighlighter.addHighlightedCell(self);
        }

        _isHighlighted = highlighted;
    };

    /**
     * @return {CornerMarks}
     */
    self.getCornerMarks = () => _cornerMarks;

    /**
     * @return {CenterMarks}
     */
    self.getCenterMarks = () => _centerMarks;

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
        + 'cr' + self.getCornerMarks().get().join('')
        + 'cn' + self.getCenterMarks().get().join('');
}
