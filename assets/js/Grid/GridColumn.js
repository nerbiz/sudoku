import GridCell from './GridCell';

export default class {
    /**
     * The 1-based row number in the grid
     * @type {number}
     */
    columnNumber;

    /**
     * Cells in the column
     * @type {GridCell[]}
     */
    gridCells = [];

    /**
     * @param {number} columnNumber
     */
    constructor(columnNumber) {
        this.columnNumber = columnNumber;
    }

    /**
     * Add a cell to the column
     * @param {GridCell} cell
     * @return {void}
     */
    addCell(cell) {
        this.gridCells.push(cell);
    }

    /**
     * Get the cell numbers that this column has
     * @return {Array}
     */
    getCellNumbers() {
        const numbers = [];
        let number = this.columnNumber;

        // Add the first cell number
        numbers.push(number);

        // Add 9 to the number 8 times
        for (let j = 0; j < 8; j++) {
            number += 9;
            numbers.push(number);
        }

        return numbers;
    }
}
