import GridCell from './GridCell';

export default class {
    /**
     * The box number in the grid
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
     * Get the cell numbers that this box can have
     * @return {Array}
     */
    getEligibleCells() {
        const boxIndex = this.boxNumber - 1;
        const boxRowIndex = Math.floor(boxIndex / 3);

        // Determine the top-left number of the 3x3 box
        let topLeftNumber = boxIndex * 3;
        topLeftNumber += boxRowIndex * 18;
        // Make the number 1-based
        topLeftNumber++;

        // Get eligible cell numbers,
        // based on top-left 3x3 box number
        const eligibleCells = [];
        for (let i = 0; i < 3; i++) {
            eligibleCells.push(topLeftNumber);
            eligibleCells.push(++topLeftNumber);
            eligibleCells.push(++topLeftNumber);
            topLeftNumber += 7;
        }

        return eligibleCells;
    }
}
