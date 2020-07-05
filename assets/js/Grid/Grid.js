import GridCell from './GridCell';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';

export default function Grid() {
    const self = this;
    
    /**
     * All the cells in the grid
     * @type {GridCell[]}
     */
    self.gridCells = [];

    /**
     * All the rows in the grid
     * @type {GridRow[]}
     */
    self.gridRows = [];

    /**
     * All the columns in the grid
     * @type {GridColumn[]}
     */
    self.gridColumns = [];

    /**
     * All the 3x3 boxes in the grid
     * @type {GridBox[]}
     */
    self.gridBoxes = [];

    /**
     * A list of currently selected (highlighted) cells
     * @type {GridCell[]}
     */
    self.selectedCells = [];

    /**
     * The cell that is last navigated to
     * @type {GridCell|null}
     */
    self.lastNavigatedCell = null;

    /**
     * Collect all the cell elements
     * @return {void}
     */
    self.collectCells = () => {
        // Create 9 rows, columns and 3x3 boxes
        for (let i = 1; i < 10; i++) {
            self.gridRows.push(new GridRow(i));
            self.gridColumns.push(new GridColumn(i));
            self.gridBoxes.push(new GridBox(i));
        }

        // Add all 81 cells
        let gridCell;
        for (let i = 1; i < 82; i++) {
            gridCell = new GridCell(i);
            gridCell.init();

            // Add the cell
            self.gridCells.push(gridCell);

            // Add the cell to the applicable row/column/box
            // And vice versa
            for (let j = 0; j < 9; j++) {
                if (self.gridRows[j].getCellNumbers().indexOf(i) !== -1) {
                    self.gridRows[j].addCell(gridCell);
                    gridCell.setRow(self.gridRows[j]);
                }

                if (self.gridColumns[j].getCellNumbers().indexOf(i) !== -1) {
                    self.gridColumns[j].addCell(gridCell);
                    gridCell.setColumn(self.gridColumns[j]);
                }

                if (self.gridBoxes[j].getCellNumbers().indexOf(i) !== -1) {
                    self.gridBoxes[j].addCell(gridCell);
                    gridCell.setBox(self.gridBoxes[j]);
                }
            }
        }

        self.setLastNavigatedCell(null);
    };

    /**
     * Add a cell to the list of selected cells
     * @param {GridCell} cell
     * @return {number}
     */
    self.addSelectedCell = cell => self.selectedCells.push(cell);

    /**
     * @param {GridCell|null} cell
     * @return {null}
     */
    self.setLastNavigatedCell = cell => {
        // The default last navigated cell is the center one
        if (cell === null) {
            self.lastNavigatedCell = self.gridCells[40];
        } else {
            self.lastNavigatedCell = cell;
        }
    };

    /**
     * Deselect all the selected cells
     * @return {void}
     */
    self.deselectAllCells = () => {
        self.selectedCells.forEach(cell => cell.setIsSelected(false));
    };

    /**
     * Get the state of the entire grid
     * @return {string}
     */
    self.getState = () =>
        // Application version
        'a1'
        // Elapsed milliseconds
        + 't' + Sudoku.timer.getTotalElapsedMs()
        // Cells state
        + self.gridCells.map(cell => cell.getState()).join('');
}
