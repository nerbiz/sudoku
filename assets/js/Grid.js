import GridCell from './GridCell';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';

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
     * All the 3x3 boxes in the grid
     * @type {Array}
     */
    boxes = [];

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
        // Create 9 rows, columns and 3x3 boxes
        for (let i = 1; i < 10; i++) {
            this.rows.push(new GridRow(i));
            this.columns.push(new GridColumn(i));
            this.boxes.push(new GridBox(i));
        }

        // Add all 81 cells
        let gridCell;
        for (let i = 1; i < 82; i++) {
            gridCell = new GridCell(i);
            gridCell.init();

            // Add the cell
            this.cells.push(gridCell);

            // Add the cell to the applicable row/column/box
            for (let j = 0; j < 9; j++) {
                if (this.rows[j].getCellNumbers().indexOf(i) !== -1) {
                    this.rows[j].addCell(gridCell);
                }

                if (this.columns[j].getCellNumbers().indexOf(i) !== -1) {
                    this.columns[j].addCell(gridCell);
                }

                if (this.boxes[j].getCellNumbers().indexOf(i) !== -1) {
                    this.boxes[j].addCell(gridCell);
                }
            }
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
