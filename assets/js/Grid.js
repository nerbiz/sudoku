import GridCell from './GridCell';

export default class {
    /**
     * All the cells in the grid
     * @type {Array}
     */
    cells = [];

    /**
     * The currently active (clicked) cell
     * @type {GridCell}
     */
    activeCell = null;

    /**
     * Collect all the cell elements
     * @return {void}
     */
    collectCells() {
        let gridCell;

        // Add all 81 cells
        for (let i = 0; ++i < 82;) {
            gridCell = new GridCell(i);
            gridCell.registerEventHandlers();

            this.cells.push(gridCell);
        }
    }

    /**
     * Change the currently active cell
     * @param {GridCell} cell
     * @return {void}
     */
    changeActiveCell(cell) {
        // Make a current active cell inactive
        if (this.activeCell !== null) {
            this.activeCell.makeInactive();
        }

        // Make the given cell the active one
        cell.makeActive();
        this.activeCell = cell;
    }
}
