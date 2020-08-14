import {extend} from '../../functions';
import UndoableCommandInterface from '../UndoableCommandInterface';
import InputMode from '../../InputMode';

extend(ChangeDigitCommand, UndoableCommandInterface);

/**
 * @param {number|null} digit
 * @constructor
 */
export default function ChangeDigitCommand(digit) {
    const self = this;
    UndoableCommandInterface.call(self);

    /**
     * The digit to apply to cell(s)
     * @type {number|null}
     * @private
     */
    const _digit = digit;

    /**
     * The cells to apply the digit to
     * @type {GridCell[]}
     * @private
     */
    const _cells = Sudoku.grid.getSelectedCells();

    /**
     * The input mode for the digit
     * @type {number}
     * @private
     */
    const _inputMode = (() => {
        const currentMode = Sudoku.inputMode.getMode();

        // When more than 1 cell is selected,
        // switch to pencil mark notation if the input mode is 'value'
        return (_cells.length > 1 && currentMode === InputMode.MODE_VALUE)
            ? InputMode.MODE_CORNER
            : currentMode;
    })();

    /**
     * Contains the state of cells, before changing the digit
     * @type {object}
     * @private
     */
    const _cellsState = (() => {
        // Pairs of cellNumber:{value, cornerMarks, centerMarks}
        const state = {};

        // Collect the state of all cells
        _cells.forEach(cell => {
            state[cell.getCellNumber()] = {
                value: cell.getValue(),
                // Copy the array, because they go by reference
                cornerMarks: cell.getCornerMarks().get().map(item => item),
                centerMarks: cell.getCenterMarks().get().map(item => item),
            };
        });

        return state;
    })();

    /**
     * @inheritDoc
     */
    self.execute = () => {
        _cells.forEach(cell => cell.setDigit(_digit, _inputMode));

        if (Sudoku.settings.autoErrorCheckingState()) {
            Sudoku.grid.checkForErrors();
        }
    }

    /**
     * @inheritDoc
     */
    self.undo = () => {
        // Apply the previous values to the cell(s)
        _cells.forEach(cell => {
            const state = _cellsState[cell.getCellNumber()];

            cell.toggleValue(state.value);
            // Copy the array, because they go by reference
            cell.getCornerMarks.setDigits(state.cornerMarks.map(item => item));
            cell.getCenterMarks.setDigits(state.centerMarks.map(item => item));
        });

        if (Sudoku.settings.autoErrorCheckingState()) {
            Sudoku.grid.checkForErrors();
        }
    };
}
