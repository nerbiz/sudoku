import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';

export default class {
    /**
     * The row the cell belongs to
     * @type {GridRow|null}
     */
    gridRow = null;

    /**
     * The column the cell belongs to
     * @type {GridColumn|null}
     */
    gridColumn = null;

    /**
     * The 3x3 box the cell belongs to
     * @type {GridBox|null}
     */
    gridBox = null;

    /**
     * The 1-based cell number in the grid
     * @type {number}
     */
    cellNumber;

    /**
     * The HTML element that is the cell
     * @type {HTMLElement}
     */
    element;

    /**
     * Whether the cell value is set at the start
     * @type {boolean}
     */
    prefilled = false;

    /**
     * The value of the cell
     * @type {number|null}
     */
    value = null;

    /**
     * The background color number of the cell
     * @type {number}
     */
    colorNumber = 1;

    /**
     * The pencil mark values (corner mode)
     * @type {number[]}
     */
    cornerMarks = [];

    /**
     * The pencil mark values (center mode)
     * @type {number[]}
     */
    centerMarks = [];

    /**
     * Whether the cell is currently selected
     * @type {boolean}
     * @private
     */
    _selected = false;

    /**
     * Getter for '_selected'
     * @return {boolean}
     */
    get selected() {
        return this._selected;
    }

    /**
     * Setter for '_selected'
     * @param {boolean} selected
     * @return {void}
     */
    set selected(selected) {
        if (selected) {
            this.element.classList.add('selected');

            // Don't add duplicates to the list of selected cells
            if (! this.selected) {
                Sudoku.grid.addSelectedCell(this);
            }
        }

        else {
            this.element.classList.remove('selected');
        }

        this._selected = selected;
    }

    /**
     * @param {number} cellNumber
     */
    constructor(cellNumber) {
        this.cellNumber = cellNumber;

        // The HTML cell element
        this.element = document.getElementById(`grid-cell-${cellNumber}`);
        if (this.element === null) {
            throw new Error(`Cell element with ID 'grid-cell-${cellNumber}' not found`);
        }

        // Register this cell to the controls object
        Sudoku.controls.registerCell(this);
    }

    /**
     * @param {GridRow} row
     * @return {void}
     */
    setRow(row) {
        this.gridRow = row;
    }

    /**
     * @param {GridColumn} column
     * @return {void}
     */
    setColumn(column) {
        this.gridColumn = column;
    }

    /**
     * @param {GridBox} box
     * @return {void}
     */
    setBox(box) {
        this.gridBox = box;
    }

    /**
     * Initialize the object
     * @return {void}
     */
    init() {
        this.registerEventHandlers();
    }

    /**
     * Handle events that happen on/for the cell
     * @return {void}
     */
    registerEventHandlers() {
        this.element.addEventListener('mousedown', () => {
            this.selected = true;
        });

        this.element.addEventListener('mouseenter', () => {
            if (Sudoku.controls.mouseDown) {
                this.selected = true;
            }
        });
    }

    /**
     * Get the state of the cell
     * @return {string}
     */
    getState() {
        return 'n' + this.cellNumber
            + (this.prefilled ? 'p' : '')
            + 'v' + this.value
            + 'c' + this.colorNumber
            + 'cr' + this.cornerMarks.join('')
            + 'cn' + this.centerMarks.join('');
    }
}
