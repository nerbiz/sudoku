import GridCell from './GridCell';

/**
 * @param {number} boxNumber
 * @constructor
 */
export default function GridBox(boxNumber) {
    const self = this;

    /**
     * The 1-based box number in the grid
     * @type {number}
     */
    self.boxNumber = boxNumber;

    /**
     * Cells in the box
     * @type {GridCell[]}
     */
    self.gridCells = [];

    /**
     * Add a cell to the box
     * @param {GridCell} cell
     * @return {number}
     */
    self.addCell = cell => self.gridCells.push(cell);

    /**
     * Get the cell numbers that self box has
     * @return {Array}
     */
    self.getCellNumbers = () => {
        const boxIndex = self.boxNumber - 1;
        // The row index of the box (0, 1 or 2)
        const boxRowIndex = Math.floor(boxIndex / 3);

        // Determine the top-left number of the 3x3 box
        let topLeftNumber = boxIndex * 3;
        topLeftNumber += boxRowIndex * 18;
        // Make the number 1-based
        topLeftNumber++;

        // Get cell numbers,
        // based on the top-left number in the box
        const numbers = [];
        for (let i = 0; i < 3; i++) {
            numbers.push(topLeftNumber);
            numbers.push(++topLeftNumber);
            numbers.push(++topLeftNumber);
            topLeftNumber += 7;
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
