import GridCell from './GridCell';

export default class {
    /**
     * The row number in the grid
     * @type {Number}
     */
    columnNumber = null;

    /**
     * Cells in the column
     * @type {Array}
     */
    cells = [];

    /**
     * @param {Number} columnNumber
     */
    constructor(columnNumber) {
        this.columnNumber = columnNumber;
    }

    /**
     * Add a cell to the column
     * @param {GridCell} cell
     */
    addCell(cell) {
        this.cells.push(cell);
    }
}
