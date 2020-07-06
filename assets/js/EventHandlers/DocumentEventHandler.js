export default function DocumentEventHandler() {
    const self = this;

    /**
     * Register event handlers for the document
     * @return {void}
     */
    self.register = () => {
        self.registerKeyboardNavigation();
        self.registerErrorEvent();
    };

    /**
     * Register keyboard navigation events
     * @return {void}
     */
    self.registerKeyboardNavigation = () => {
        document.addEventListener('keydown', event => {
            if (Sudoku.controls.isArrowKey(event.code)) {
                // First deselect all cells
                Sudoku.grid.deselectAllCells();

                let newCellIndex = Sudoku.grid.lastNavigatedCell.cellNumber - 1;
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
                newCell = Sudoku.grid.getCellByIndex(newCellIndex);
                newCell.setIsSelected(true);
                Sudoku.grid.setLastNavigatedCell(newCell);
            }
        });
    };

    /**
     * Register error events
     * @return {void}
     */
    self.registerErrorEvent = () => {
        document.addEventListener('keydown', event => {
            // Remove all errors status when the cell changes
            Sudoku.grid.removeAllErrors();

            Sudoku.grid.getSelectedCells().forEach(cell => {
                // Change the cell value
                if (Sudoku.controls.isNumberKey(event.code)) {
                    const numberValue = parseInt(event.key, 10);

                    if (numberValue === cell.getValue()) {
                        // Remove the value, if the same number is entered
                        cell.setValue(null);
                    } else {
                        // Set a number value
                        cell.setValue(numberValue);
                    }
                } else if (Sudoku.controls.isDeleteKey(event.code)) {
                    // Remove the value
                    cell.setValue(null);
                }
            });

            // See if there are any errors
            Sudoku.grid.checkForErrors();
        });
    };
}
