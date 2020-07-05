import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';

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
     * The pencil mark values (corner mode)
     * @type {number[]}
     */
    self.cornerMarks = [];

    /**
     * The pencil mark values (center mode)
     * @type {number[]}
     */
    self.centerMarks = [];

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

    (() => {
        // The HTML cell element
        self.element = document.getElementById(`grid-cell-${self.cellNumber}`);
        if (self.element === null) {
            throw new Error(`Cell element with ID 'grid-cell-${self.cellNumber}' not found`);
        }
    })();

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        self.registerEventHandlers();
    };

    /**
     * @return {number|null}
     */
    self.getValue = () => _value;

    /**
     * @param {number|null} value
     * @return {void}
     */
    self.setValue = value => {
        _value = value;

        // Show the value on screen
        self.element.getElementsByClassName('cell-value')[0].innerText = value;
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
     * Handle events that happen on/for the cell
     * @return {void}
     */
    self.registerEventHandlers = () => {
        self.element.addEventListener('mousedown', () => {
            // Deselect all cells, if the ctrl is not pressed
            // (Ctrl key allows multiple selections)
            if (! Sudoku.controls.ctrlKeyPressed) {
                Sudoku.grid.deselectAllCells();
            }

            self.setIsSelected(true);
        });

        self.element.addEventListener('mouseenter', () => {
            // Allow multiple cells to be selected
            if (Sudoku.controls.mousePressed) {
                self.setIsSelected(true);
            }
        });

        // On mouse up, this is the last seleted cell
        self.element.addEventListener('mouseup', () => Sudoku.grid.setLastNavigatedCell(this));

        document.addEventListener('keydown', event => {
            // Change the cell value if it's selected
            if (self.getIsSelected()) {
                // Set a number value
                if (Sudoku.controls.isNumberKey(event.code)) {
                    self.setValue(parseInt(event.key, 10));
                }

                // Remove the value
                if (Sudoku.controls.isDeleteKey(event.code)) {
                    self.setValue(null);
                }
            }
        });
    };

    /**
     * Get the state of the cell
     * @return {string}
     */
    self.getState = () => 'n' + self.cellNumber
        + (self.isPrefilled ? 'p' : '')
        + 'v' + self.getValue()
        + 'c' + self.colorNumber
        + 'cr' + self.cornerMarks.join('')
        + 'cn' + self.centerMarks.join('');
}
