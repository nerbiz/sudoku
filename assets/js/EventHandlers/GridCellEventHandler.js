import GridCell from '../Grid/GridCell';

/**
 * @param {GridCell} gridCell
 * @constructor
 */
export default function GridCellEventHandler(gridCell) {
    const self = this;

    /**
     * The cell to register event handlers for
     * @type {GridCell}
     */
    self.gridCell = gridCell;

    /**
     * Register event handlers for a grid cell
     * @return {void}
     */
    self.register = () => {
        registerMouseDownEvent();
        registerMouseEnterEvent();
        registerMouseUpEvent();
    };

    /**
     * @return {void}
     */
    const registerMouseDownEvent = () => {
        self.gridCell.element.addEventListener('mousedown', () => {
            if (Sudoku.controls.ctrlKeyPressed) {
                // Toggle the selected status when clicked, if the ctrl key is pressed
                self.gridCell.setIsSelected(! self.gridCell.getIsSelected());
            } else {
                // Select only this cell, if the ctrl key is not pressed
                Sudoku.grid.deselectAllCells();
                self.gridCell.setIsSelected(true);
            }
        });
    };

    /**
     * @return {void}
     */
    const registerMouseEnterEvent = () => {
        self.gridCell.element.addEventListener('mouseenter', () => {
            // Allow multiple cells to be selected
            if (Sudoku.controls.mousePressed) {
                self.gridCell.setIsSelected(true);
            }
        });
    };

    /**
     * @return {void}
     */
    const registerMouseUpEvent = () => {
        // On mouse up, this is the last selected cell
        self.gridCell.element.addEventListener(
            'mouseup',
            () => Sudoku.grid.setLastNavigatedCell(self.gridCell)
        );
    };
}
