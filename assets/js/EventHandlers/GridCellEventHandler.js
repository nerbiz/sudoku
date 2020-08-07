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
     * @private
     */
    const _gridCell = gridCell;

    /**
     * Register event handlers for a grid cell
     * @return {void}
     */
    self.register = () => {
        _registerMouseDownEvent();
        _registerMouseEnterEvent();
        _registerMouseUpEvent();
    };

    /**
     * @return {void}
     * @private
     */
    const _registerMouseDownEvent = () => {
        _gridCell.getElement().addEventListener('mousedown', () => {
            if (Sudoku.controls.ctrlKeyIsPressed()) {
                // Toggle the selected status when clicked, if the ctrl key is pressed
                _gridCell.setSelectedState(! _gridCell.isSelected());
            } else {
                // Select only this cell, if the ctrl key is not pressed
                Sudoku.grid.deselectAllCells();
                _gridCell.setSelectedState(true);
            }
        });
    };

    /**
     * @return {void}
     * @private
     */
    const _registerMouseEnterEvent = () => {
        _gridCell.getElement().addEventListener('mouseenter', () => {
            // Allow multiple cells to be selected
            if (Sudoku.controls.mouseIsPressed()) {
                _gridCell.setSelectedState(true);
            }
        });
    };

    /**
     * @return {void}
     * @private
     */
    const _registerMouseUpEvent = () => {
        // On mouse up, this is the last selected cell
        _gridCell.getElement().addEventListener(
            'mouseup',
            () => Sudoku.grid.setLastNavigatedCell(_gridCell)
        );
    };
}
