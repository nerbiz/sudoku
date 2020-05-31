import GridCell from './GridCell';

export default class {
    /**
     * The row number in the grid
     * @type {Number}
     */
    rowNumber = null;

    /**
     * Cells in the row
     * @type {Array}
     */
    cells = [];

    /**
     * @param {Number} rowNumber
     */
    constructor(rowNumber) {
        this.rowNumber = rowNumber;
    }

    /**
     * Add a cell to the row
     * @param {GridCell} cell
     */
    addCell(cell) {
        this.cells.push(cell);
    }
}
