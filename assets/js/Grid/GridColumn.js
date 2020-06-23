import GridCell from './GridCell';

/**
 * @param {number} columnNumber
 * @constructor
 */
export default function GridColumn(columnNumber) {
    const self = this;

    /**
     * The 1-based row number in the grid
     * @type {number}
     */
    self.columnNumber = columnNumber;

    /**
     * Cells in the column
     * @type {GridCell[]}
     */
    self.gridCells = [];

    /**
     * Add a cell to the column
     * @param {GridCell} cell
     * @return {number}
     */
    self.addCell = cell => self.gridCells.push(cell);

    /**
     * Get the cell numbers that self column has
     * @return {Array}
     */
    self.getCellNumbers = () => {
        const numbers = [];
        let number = self.columnNumber;

        // Add the first cell number
        numbers.push(number);

        // Add 9 to the number 8 times
        for (let j = 0; j < 8; j++) {
            number += 9;
            numbers.push(number);
        }

        return numbers;
    };

    /**
     * Get a list of cell values
     * @return {Array}
     */
    self.getCellValues = () => self.gridCells
        .map(cell => cell.getValue())
        .filter(value => value !== null);

    /**
     * See if the list of cell values contains duplicates
     * @return {boolean}
     */
    self.hasDuplicateCellValues = () => {
        const cellValues = self.getCellValues();
        return (new Set(cellValues)).size !== cellValues.length;
    };
}
