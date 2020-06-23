import GridCell from './GridCell';

/**
 * @param {number} rowNumber
 * @constructor
 */
export default function GridRow(rowNumber) {
    const self = this;

    /**
     * The 1-based row number in the grid
     * @type {number}
     */
    self.rowNumber = rowNumber;

    /**
     * Cells in the row
     * @type {GridCell[]}
     */
    self.gridCells = [];

    /**
     * Add a cell to the row
     * @param {GridCell} cell
     * @return {number}
     */
    self.addCell = cell => self.gridCells.push(cell);

    /**
     * Get the cell numbers that self row has
     * @return {Array}
     */
    self.getCellNumbers = () => {
        const numbers = [];

        for (let i = 1; i < 10; i++) {
            numbers.push(i + ((self.rowNumber - 1) * 9));
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
