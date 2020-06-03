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
    predetermined = false;

    /**
     * The value of the cell
     * @type {number|null}
     */
    value = null;

    /**
     * The background color number of the cell
     * @type {number}
     */
    color = 1;

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
     * @param {number} cellNumber
     */
    constructor(cellNumber) {
        this.cellNumber = cellNumber;

        // The HTML cell element
        this.element = document.getElementById(`grid-cell-${cellNumber}`);
        if (this.element === null) {
            throw new Error(`Cell element with ID 'grid-cell-${cellNumber}' not found`);
        }
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
            this.makeSelected();
        });

        this.element.addEventListener('mouseenter', () => {
            if (Sudoku.controls.mouseDown) {
                this.makeSelected();
            }
        });

        this.element.addEventListener('mouseup', () => {
            Sudoku.grid.setActiveCell(this);
        });
    }

    /**
     * Give the cell an selected state
     * @return {void}
     */
    makeSelected() {
        this.element.classList.add('selected');
    }

    /**
     * Remove the selected state from the cell
     * @return {void}
     */
    makeUnselected() {
        this.element.classList.remove('selected');
    }

    /**
     * Get the state of the cell
     * @return {Object}
     */
    getState() {
        return {
            n: this.cellNumber,
            p: this.predetermined ? 1 : 0,
            v: this.value,
            c: this.color,
            cr: this.cornerMarks,
            cn: this.centerMarks,
        };
    }
}
