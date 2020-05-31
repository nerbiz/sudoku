import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBlock from './GridBlock';

export default class {
    /**
     * The row the cell belongs to
     * @type {GridRow}
     */
    gridRow = null;

    /**
     * The column the cell belongs to
     * @type {GridColumn}
     */
    gridColumn = null;

    /**
     * The 3x3 block the cell belongs to
     * @type {GridBlock}
     */
    gridBlock = null;

    /**
     * The cell number in the grid
     * @type {Number}
     */
    cellNumber = null;

    /**
     * The HTML element that is the cell
     * @type {HTMLElement}
     */
    element = null;

    /**
     * Whether the cell value is set at the start
     * @type {Boolean}
     */
    predetermined = false;

    /**
     * The value of the cell
     * @type {Number}
     */
    value = null;

    /**
     * The background color of the cell
     * @type {String}
     */
    color = '#ffffff';

    /**
     * The pencil mark values (corner mode)
     * @type {Array}
     */
    cornerMarks = [];

    /**
     * The pencil mark values (center mode)
     * @type {Array}
     */
    centerMarks = [];

    /**
     * @param {Number} cellNumber
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
     */
    setRow(row) {
        this.gridRow = row;
    }

    /**
     * @param {GridColumn} column
     */
    setColumn(column) {
        this.gridColumn = column;
    }

    /**
     * @param {GridBlock} block
     */
    setBlock(block) {
        this.gridBlock = block;
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
        this.element.addEventListener('click', () => {
            Sudoku.grid.changeActiveCell(this);
        });
    }

    /**
     * Give the cell an active state
     * @return {void}
     */
    makeActive() {
        this.element.classList.add('active');
    }

    /**
     * Remove the active state from the cell
     * @return {void}
     */
    makeInactive() {
        this.element.classList.remove('active');
    }
}
