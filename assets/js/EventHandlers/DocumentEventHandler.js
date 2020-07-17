import ChangeDigitCommand from '../Commands/Grid/ChangeDigitCommand';

export default function DocumentEventHandler() {
    const self = this;

    /**
     * Register event handlers for the document
     * @return {void}
     */
    self.register = () => {
        registerKeyboardNavigation();
        registerValueSetting();
        registerCellsDeselecting();
    };

    /**
     * Register keyboard navigation events
     * @return {void}
     */
    const registerKeyboardNavigation = () => {
        document.addEventListener('keydown', event => {
            if (Sudoku.controls.cancelKeyboardEvent(event)) {
                return;
            }

            if (Sudoku.controls.isArrowKey(event.code)) {
                // Deselect all cells, if the ctrl key is not pressed
                if (! Sudoku.controls.ctrlKeyIsPressed()) {
                    Sudoku.grid.deselectAllCells();
                }

                let newCellIndex = Sudoku.grid.getLastNavigatedCell().getCellNumber() - 1;
                let newCell = null;

                // Then navigate to the intended cell
                // Wrap around if needed
                if (Sudoku.controls.isArrowKey(event.code, 'up')) {
                    if ((newCellIndex -= 9) < 0) {
                        newCellIndex = 81 + newCellIndex;
                    }
                } else if (Sudoku.controls.isArrowKey(event.code, 'down')) {
                    if ((newCellIndex += 9) > 80) {
                        newCellIndex = newCellIndex - 81;
                    }
                } else if (Sudoku.controls.isArrowKey(event.code, 'left')) {
                    if ((--newCellIndex + 1) % 9 === 0) {
                        newCellIndex += 9;
                    }
                } else if (Sudoku.controls.isArrowKey(event.code, 'right')) {
                    if (++newCellIndex % 9 === 0) {
                        newCellIndex -= 9;
                    }
                }

                // Make the new cell the active one
                newCell = Sudoku.grid.getCell(newCellIndex + 1);
                newCell.setSelectedState(true);
                Sudoku.grid.setLastNavigatedCell(newCell);
            }
        });
    };

    /**
     * Register setting of values
     * @return {void}
     */
    const registerValueSetting = () => {
        document.addEventListener('keydown', event => {
            if (Sudoku.controls.cancelKeyboardEvent(event)) {
                return;
            }

            if (Sudoku.controls.isNumberKey(event.code)) {
                // Set a number value
                const digit = parseInt(event.key, 10);
                Sudoku.history.execute(new ChangeDigitCommand(digit));
            } else if (Sudoku.controls.isDeleteKey(event.code)) {
                // Remove the value
                Sudoku.history.execute(new ChangeDigitCommand(null));
            } else if (event.code === 'KeyZ') {
                if (Sudoku.controls.ctrlKeyIsPressed()) {
                    if (Sudoku.controls.shiftKeyIsPressed()) {
                        Sudoku.history.redo();
                    } else {
                        Sudoku.history.undo();
                    }
                }
            } else if (event.code === 'KeyY') {
                if (Sudoku.controls.ctrlKeyIsPressed()) {
                    Sudoku.history.redo();
                }
            } else if (event.code === 'Escape') {
                if (Sudoku.modal.isOpen()) {
                    // Close a modal dialog
                    Sudoku.modal.close();
                } else {
                    // Pause / unpause the clock
                    Sudoku.clock.isPaused()
                        ? Sudoku.clock.unpause()
                        : Sudoku.clock.pause();
                }
            }
        });
    };

    /**
     * Deselect all cells when clicking outside the grid
     * @return {void}
     */
    const registerCellsDeselecting = () => {
        document.addEventListener('mousedown', event => {
            if (event.target.closest('.grid-cell') === null) {
                Sudoku.grid.deselectAllCells();
                Sudoku.grid.dehighlightAllCells();
            }
        });
    };
}
