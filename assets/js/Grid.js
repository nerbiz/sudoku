import GridCell from './GridCell';

export default class {
    /**
     * Collect all the cell elements
     * @return {void}
     */
    collectCells() {
        this.cells = [];
        let gridCell;

        // Get all 81 cells
        for (let i = 0; ++i < 82;) {
            gridCell = new GridCell(`grid-cell-${i}`);
            this.cells.push(gridCell);
        }
    }
}
