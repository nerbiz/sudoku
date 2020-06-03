import GridCell from './GridCell';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';

export default class {
    /**
     * All the cells in the grid
     * @type {GridCell[]}
     */
    gridCells = [];

    /**
     * All the rows in the grid
     * @type {GridRow[]}
     */
    gridRows = [];

    /**
     * All the columns in the grid
     * @type {GridColumn[]}
     */
    gridColumns = [];

    /**
     * All the 3x3 boxes in the grid
     * @type {GridBox[]}
     */
    gridBoxes = [];

    /**
     * The currently active (clicked) cell
     * @type {GridCell|null}
     */
    activeCell = null;

    /**
     * Collect all the cell elements
     * @return {void}
     */
    collectCells() {
        // Create 9 rows, columns and 3x3 boxes
        for (let i = 1; i < 10; i++) {
            this.gridRows.push(new GridRow(i));
            this.gridColumns.push(new GridColumn(i));
            this.gridBoxes.push(new GridBox(i));
        }

        // Add all 81 cells
        let gridCell;
        for (let i = 1; i < 82; i++) {
            gridCell = new GridCell(i);
            gridCell.init();

            // Add the cell
            this.gridCells.push(gridCell);

            // Add the cell to the applicable row/column/box
            // And vice versa
            for (let j = 0; j < 9; j++) {
                if (this.gridRows[j].getCellNumbers().indexOf(i) !== -1) {
                    this.gridRows[j].addCell(gridCell);
                    gridCell.setRow(this.gridRows[j]);
                }

                if (this.gridColumns[j].getCellNumbers().indexOf(i) !== -1) {
                    this.gridColumns[j].addCell(gridCell);
                    gridCell.setColumn(this.gridColumns[j]);
                }

                if (this.gridBoxes[j].getCellNumbers().indexOf(i) !== -1) {
                    this.gridBoxes[j].addCell(gridCell);
                    gridCell.setBox(this.gridBoxes[j]);
                }
            }
        }
    }

    /**
     * Change the currently active cell
     * @param {GridCell} cell
     * @return {void}
     */
    setActiveCell(cell) {
        // Make a current active cell inactive
        if (this.activeCell !== null) {
            this.activeCell.makeUnselected();
        }

        // Make the given cell the active one
        cell.makeSelected();
        this.activeCell = cell;
    }
}
