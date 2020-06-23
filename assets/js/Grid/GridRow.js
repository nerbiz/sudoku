import GridCell from './GridCell';

export default class {
    /**
     * The 1-based row number in the grid
     * @type {number}
     */
    rowNumber;

    /**
     * Cells in the row
     * @type {GridCell[]}
     */
    gridCells = [];

    /**
     * @param {number} rowNumber
     */
    constructor(rowNumber) {
        this.rowNumber = rowNumber;
    }

    /**
     * Add a cell to the row
     * @param {GridCell} cell
     * @return {void}
     */
    addCell(cell) {
        this.gridCells.push(cell);
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

    /**
     * Get a list of cell values
     * @return {Array}
     */
    getCellValues() {
        return this.gridCells
            .map(cell => cell.getValue())
            .filter(value => value !== null);
    }

    /**
     * See if the list of cell values contains duplicates
     * @return {boolean}
     */
    hasDuplicateCellValues() {
        const cellValues = this.getCellValues();
        return (new Set(cellValues)).size !== cellValues.length;
    }
}
