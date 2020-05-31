import GridCell from './GridCell';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBlock from './GridBlock';

export default class {
    /**
     * All the cells in the grid
     * @type {Array}
     */
    cells = [];

    /**
     * All the rows in the grid
     * @type {Array}
     */
    rows = [];

    /**
     * All the columns in the grid
     * @type {Array}
     */
    columns = [];

    /**
     * All the 3x3 squares in the grid
     * @type {Array}
     */
    blocks = [];

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
        // Create 9 rows, columns and 3x3 blocks
        for (let i = 0; i < 9; i++) {
            // Numbers are 1-based
            this.rows.push(new GridRow(i + 1));
            this.columns.push(new GridColumn(i + 1));
            this.blocks.push(new GridBlock(i + 1));
        }

        // Add all 81 cells
        let gridCell;
        for (let i = 0; i < 81; i++) {
            // Cell number is 1-based
            gridCell = new GridCell(i + 1);
            gridCell.init();

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
