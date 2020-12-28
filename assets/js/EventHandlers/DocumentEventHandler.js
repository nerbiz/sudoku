import ChangeDigitCommand from '../Commands/Grid/ChangeDigitCommand';
import PauseGameCommand from '../Commands/PauseGameCommand';

export default function DocumentEventHandler() {
    const self = this;

    /**
     * Initialize the object
     */
    self.init = () => {
        _registerKeyboardEvents();
        _registerMouseEvents();
    };

    /**
     * @return {void}
     * @private
     */
    const _registerKeyboardEvents = () => {
        const pauseGameCommand = new PauseGameCommand();

        document.addEventListener('keydown', event => {
            if (Sudoku.controls.cancelKeyboardEvent(event)) {
                return;
            }

            if (Sudoku.controls.isArrowKey(event)) {
                // Deselect all cells, if the ctrl key is not pressed
                if (! Sudoku.controls.ctrlKeyIsPressed()) {
                    Sudoku.grid.deselectAllCells();
                }

                let newCellIndex = Sudoku.grid.getLastNavigatedCell().getCellNumber() - 1;
                let newCell = null;

                // Then navigate to the intended cell
                // Wrap around if needed
                if (Sudoku.controls.isArrowKey(event, 'up')) {
                    if ((newCellIndex -= 9) < 0) {
                        newCellIndex = 81 + newCellIndex;
                    }
                } else if (Sudoku.controls.isArrowKey(event, 'down')) {
                    if ((newCellIndex += 9) > 80) {
                        newCellIndex = newCellIndex - 81;
                    }
                } else if (Sudoku.controls.isArrowKey(event, 'left')) {
                    if ((--newCellIndex + 1) % 9 === 0) {
                        newCellIndex += 9;
                    }
                } else if (Sudoku.controls.isArrowKey(event, 'right')) {
                    if (++newCellIndex % 9 === 0) {
                        newCellIndex -= 9;
                    }
                }

                // Make the new cell the active one
                newCell = Sudoku.grid.getCell(newCellIndex + 1);
                newCell.setSelectedState(true);
                Sudoku.grid.setLastNavigatedCell(newCell);
            }

            if (Sudoku.controls.isNumberKey(event)) {
                // Set a number value
                const digit = parseInt(event.key, 10);
                if (digit > 0) {
                    Sudoku.history.execute(new ChangeDigitCommand(digit));
                }
            } else if (Sudoku.controls.isDeleteKey(event)) {
                // Remove a value
                Sudoku.history.execute(new ChangeDigitCommand(null));
            } else if (event.code === 'KeyZ') {
                if (Sudoku.controls.ctrlKeyIsPressed()) {
                    // Redo or undo an action
                    if (Sudoku.controls.shiftKeyIsPressed()) {
                        Sudoku.history.redo();
                    } else {
                        Sudoku.history.undo();
                    }
                }
            } else if (event.code === 'KeyY') {
                // Redo an action
                if (Sudoku.controls.ctrlKeyIsPressed()) {
                    Sudoku.history.redo();
                }
            } else if (event.code === 'Escape') {
                (Sudoku.modal.openState() === true)
                    // Close a modal dialog
                    ? Sudoku.modal.close()
                    // Pause / unpause the game
                    : pauseGameCommand.toggle();
            }
        });
    };

    /**
     * @return {void}
     * @private
     */
    const _registerMouseEvents = () => {
        document.addEventListener('mousedown', event => {
            // Deselect all cells, when clicking outside the grid
            if (event.target.closest('.grid-cell') === null) {
                Sudoku.grid.deselectAllCells();
                Sudoku.gridCellHighlighter.dehighlightAllCells();
            }
        });
    };
}
