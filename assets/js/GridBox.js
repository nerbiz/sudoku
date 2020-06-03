import GridCell from './GridCell';

export default class {
    /**
     * The 1-based box number in the grid
     * @type {Number}
     */
    boxNumber = null;

    /**
     * Cells in the box
     * @type {Array}
     */
    cells = [];

    /**
     * @param {Number} boxNumber
     */
    constructor(boxNumber) {
        this.boxNumber = boxNumber;
    }

    /**
     * Add a cell to the box
     * @param {GridCell} cell
     */
    addCell(cell) {
        this.cells.push(cell);
    }

    /**
     * Get the cell numbers that this box has
     * @return {Array}
     */
    getCellNumbers() {
        const boxIndex = this.boxNumber - 1;
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
    }
}
