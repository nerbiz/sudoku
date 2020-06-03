import GridCell from './GridCell';

export default class {
    /**
     * The 1-based row number in the grid
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

    /**
     * Get the cell numbers that this row has
     * @return {Array}
     */
    getCellNumbers() {
        const numbers = [];

        for (let i = 1; i < 10; i++) {
            numbers.push(i + ((this.rowNumber - 1) * 9));
        }

        return numbers;
    }
}
