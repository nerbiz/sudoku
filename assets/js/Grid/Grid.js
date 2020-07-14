import {trait} from '../functions';
import GridCell from './GridCell';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridBox from './GridBox';
import HasGridCells from '../Traits/HasGridCells';

export default function Grid() {
    const self = this;
    trait(self, HasGridCells);

    /**
     * All the rows in the grid
     * @type {GridRow[]}
     * @private
     */
    const _gridRows = [];

    /**
     * All the columns in the grid
     * @type {GridColumn[]}
     * @private
     */
    const _gridColumns = [];

    /**
     * All the 3x3 boxes in the grid
     * @type {GridBox[]}
     * @private
     */
    const _gridBoxes = [];

    /**
     * A list of currently selected cells
     * @type {GridCell[]}
     * @private
     */
    let _selectedCells = [];

    /**
     * A list of currently highlighted cells
     * @type {GridCell[]}
     * @private
     */
    let _highlightedCells = [];

    /**
     * The cell that is last navigated to
     * @type {GridCell|null}
     * @private
     */
    let _lastNavigatedCell = null;

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        collectCells();
    };

    /**
     * Collect all the cell elements
     * @return {void}
     */
    const collectCells = () => {
        // Create 9 rows, columns and 3x3 boxes
        for (let i = 1; i < 10; i++) {
            _gridRows.push(new GridRow(i));
            _gridColumns.push(new GridColumn(i));
            _gridBoxes.push(new GridBox(i));
        }

        // Add all 81 cells
        let gridCell;
        for (let i = 1; i < 82; i++) {
            gridCell = new GridCell(i);
            gridCell.init();
            self.addCell(gridCell);

            // Add the cell to the applicable row/column/box
            // And vice versa
            for (let j = 0; j < 9; j++) {
                if (_gridRows[j].getCellNumbers().indexOf(i) !== -1) {
                    _gridRows[j].addCell(gridCell);
                    gridCell.setRow(_gridRows[j]);
                }

                if (_gridColumns[j].getCellNumbers().indexOf(i) !== -1) {
                    _gridColumns[j].addCell(gridCell);
                    gridCell.setColumn(_gridColumns[j]);
                }

                if (_gridBoxes[j].getCellNumbers().indexOf(i) !== -1) {
                    _gridBoxes[j].addCell(gridCell);
                    gridCell.setBox(_gridBoxes[j]);
                }
            }
        }

        self.setLastNavigatedCell(null);
    };

    /**
     * @return {GridCell[]}
     */
    self.getSelectedCells = () => _selectedCells;

    /**
     * Add a cell to the list of selected cells
     * @param {GridCell} cell
     * @return {void}
     */
    self.addSelectedCell = cell => {
        _selectedCells.push(cell);

        // Highlight related cells after selecting
        self.highlightRelatedCells();
    };

    /**
     * Deselect all the selected cells
     * @return {void}
     */
    self.deselectAllCells = () => {
        self.getSelectedCells().forEach(cell => cell.setSelectedState(false));
        _selectedCells = [];
    };

    /**
     * @return {GridCell[]}
     */
    self.getHighlightedCells = () => _highlightedCells;

    /**
     * Add a cell to the list of highlighted cells
     * @param {GridCell} cell
     * @return {number}
     */
    self.addHighlightedCell = cell => _highlightedCells.push(cell);

    /**
     * De-highlight all the highlighted cells
     * @return {void}
     */
    self.dehighlightAllCells = () => {
        self.getHighlightedCells().forEach(cell => cell.setHighlightedState(false));
        _highlightedCells = [];
    };

    /**
     * Highlight all cells that are related to selected cell(s)
     * @return {void}
     */
    self.highlightRelatedCells = () => {
        self.dehighlightAllCells();

        let cellNumbers = [];

        // Add the cell numbers of the row, column and box that the cell is in
        self.getSelectedCells().forEach(cell => {
            cellNumbers = cellNumbers.concat(cell.getRow().getCellNumbers())
                .concat(cell.getColumn().getCellNumbers())
                .concat(cell.getBox().getCellNumbers());

            // See if the cell has a value, for further highlighting
            const cellValue = cell.getValue();
            if (cellValue === null) {
                return;
            }

            // Add the cell numbers of cells that contain the same digit
            const sameDigitCellNumbers = self.getCells()
                .filter(cell => {
                    return (cell.hasValue(cellValue)
                        || cell.hasCornerMark(cellValue)
                        || cell.hasCenterMark(cellValue));
                })
                .map(cell => cell.getCellNumber());

            cellNumbers = cellNumbers.concat(sameDigitCellNumbers);
        });

        cellNumbers
            // Remove duplicates
            .filter((value, index, numbers) => {
                return numbers.indexOf(value) === index;
            })
            // Highlight the cells
            .forEach(cellNumber => {
                self.getCell(cellNumber).setHighlightedState(true);
            });
    };

    /**
     * @return {GridCell|null}
     */
    self.getLastNavigatedCell = () => _lastNavigatedCell;

    /**
     * @param {GridCell|null} cell
     * @return {null}
     */
    self.setLastNavigatedCell = cell => {
        // The default last navigated cell is the center one
        if (cell === null) {
            _lastNavigatedCell = self.getCell(41);
        } else {
            _lastNavigatedCell = cell;
        }
    };

    /**
     * Check for errors in the grid
     * @return {void}
     */
    self.checkForErrors = () => {
        _gridRows.forEach(row => row.checkDuplicateCellValues());
        _gridColumns.forEach(column => column.checkDuplicateCellValues());
        _gridBoxes.forEach(box => box.checkDuplicateCellValues());
    };

    /**
     * Remove the error status of all cells
     * @return {void}
     */
    self.removeAllErrors = () => {
        self.getCells().forEach(cell => cell.setErrorState(false));
    };

    /**
     * Get the state of the entire grid
     * @return {string}
     */
    self.getState = () =>
        // Application version
        'a1'
        // Elapsed milliseconds
        + 't' + Sudoku.clock.getTotalElapsedMs()
        // Cells state
        + self.getCells().map(cell => cell.getState()).join('');
}
