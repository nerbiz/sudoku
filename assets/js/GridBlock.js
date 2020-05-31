import GridCell from './GridCell';

export default class {
    /**
     * The row number in the grid
     * @type {Number}
     */
    blockNumber = null;

    /**
     * Cells in the block
     * @type {Array}
     */
    cells = [];

    /**
     * @param {Number} blockNumber
     */
    constructor(blockNumber) {
        this.blockNumber = blockNumber;
    }

    /**
     * Add a cell to the block
     * @param {GridCell} cell
     */
    addCell(cell) {
        this.cells.push(cell);
    }

    /**
     * Get the cell numbers that this block can have
     * @return {Array}
     */
    getEligibleCells() {
        const blockIndex = this.blockNumber - 1;
        const blockRowIndex = Math.floor(blockIndex / 3);

        // Determine the top-left number of the 3x3 block
        let topLeftNumber = blockIndex * 3;
        topLeftNumber += blockRowIndex * 18;
        // Make the number 1-based
        topLeftNumber++;

        // Get eligible cell numbers,
        // based on top-left 3x3 block number
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
