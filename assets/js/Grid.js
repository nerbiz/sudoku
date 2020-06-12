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
     * A list of currently selected (highlighted) cells
     * @type {GridCell[]}
     */
    selectedCells = [];

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
     * Add a cell to the list of selected cells
     * @param {GridCell} cell
     * @return {void}
     */
    addSelectedCell(cell) {
        // Don't add the cell, if it's already in the list
        for (let i = 0; i < this.selectedCells.length; i++) {
            if (this.selectedCells[i].cellNumber === cell.cellNumber) {
                return;
            }
        }

        this.selectedCells.push(cell);
    }

    /**
     * Get the state of the entire grid
     * @return {string}
     */
    getState() {
        return this.gridCells.map(cell => cell.getState()).join('');
    }
}
