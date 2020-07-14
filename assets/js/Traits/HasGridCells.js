import GridCell from '../Grid/GridCell';

export default function HasGridCells() {
    const self = this;

    /**
     * Cells in the row
     * @type {GridCell[]}
     */
    self.gridCells = [];

    /**
     * Add a cell to the row
     * @param {GridCell} cell
     * @return {number}
     */
    self.addCell = cell => self.gridCells.push(cell);

    /**
     * @return {GridCell[]}
     */
    self.getCells = () => self.gridCells;

    /**
     * Get a cell by its cell number
     * @param {number} number A 1-based cell number
     * @return {GridCell|null}
     */
    self.getCell = number => {
        const cell = self.gridCells.find(cell => cell.getCellNumber() === number);
        return (cell === undefined) ? null : cell;
    };

    /**
     * Get a list of cell values
     * @return {Array}
     */
    self.getCellValues = () => self.gridCells
        .map(cell => cell.getValue())
        .filter(value => value !== null);

    /**
     * See if the list of cell values contains duplicates
     * @return {boolean}
     */
    self.checkDuplicateCellValues = () => {
        // Pairs of value:gridCell[]
        // Arrays of cells that have a certain value
        const cellValues = {};

        self.gridCells.forEach(cell => {
            // Get the filled in value of the cell
            const cellValue = cell.getValue();

            // A value is needed for checking
            if (cellValue === null) {
                return;
            }

            // Get the cells that have that value an add the cell
            const cells = cellValues[cellValue] || [];
            cells.push(cell);
            cellValues[cellValue] = cells;

            // Set an error status on all duplicate cells, if there are any
            if (cells.length > 1) {
                cells.forEach(cell => cell.setErrorState(true));
            }
        });
    };
}
