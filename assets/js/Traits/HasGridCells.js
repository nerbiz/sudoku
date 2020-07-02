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
    self.hasDuplicateCellValues = () => {
        const cellValues = self.getCellValues();
        return (new Set(cellValues)).size !== cellValues.length;
    };
}
