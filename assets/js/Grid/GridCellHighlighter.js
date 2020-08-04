import GridCell from './GridCell';

export default function GridCellHighlighter() {
    const self = this;

    /**
     * A list of currently highlighted cells
     * @type {GridCell[]}
     * @private
     */
    let _highlightedCells = [];

    /**
     * Add a cell to the list of highlighted cells
     * @param {GridCell} cell
     * @return {number}
     */
    self.addHighlightedCell = cell => _highlightedCells.push(cell);

    /**
     * @return {GridCell[]}
     */
    self.getHighlightedCells = () => _highlightedCells;

    /**
     * Highlight all cells that are related to selected cell(s)
     * @return {void}
     */
    self.highlightRelatedCells = () => {
        self.dehighlightAllCells();

        let cellNumbers = [];

        // Add the cell numbers of the row, column and box that the cell is in
        Sudoku.grid.getSelectedCells().forEach(cell => {
            if (Sudoku.settings.highlightRowState()) {
                cellNumbers = cellNumbers.concat(cell.getRow().getCellNumbers());
            }

            if (Sudoku.settings.highlightColumnState()) {
                cellNumbers = cellNumbers.concat(cell.getColumn().getCellNumbers());
            }

            if (Sudoku.settings.highlightBoxState()) {
                cellNumbers = cellNumbers.concat(cell.getBox().getCellNumbers());
            }

            // See if the cell has a value, for further highlighting
            const cellValue = cell.getValue();
            if (cellValue === null) {
                return;
            }

            // Add the cell numbers of cells that contain the same digit
            const sameDigitCellNumbers = Sudoku.grid.getCells()
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
                Sudoku.grid.getCell(cellNumber).setHighlightedState(true);
            });
    };

    /**
     * De-highlight all the highlighted cells
     * @return {void}
     */
    self.dehighlightAllCells = () => {
        self.getHighlightedCells()
            .forEach(cell => cell.setHighlightedState(false));

        _highlightedCells = [];
    };
}
