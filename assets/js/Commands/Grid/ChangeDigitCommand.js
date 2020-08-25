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
    const _inputMode = Sudoku.inputMode.getMode();

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
                isPrefilled: cell.isPrefilled(),
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

            cell.isPrefilled(state.isPrefilled);
            cell.toggleValue(state.value);
            // Copy the array, because they go by reference
            cell.getCornerMarks().setDigits(state.cornerMarks.map(item => item));
            cell.getCenterMarks().setDigits(state.centerMarks.map(item => item));
        });

        if (Sudoku.settings.autoErrorCheckingState() === true) {
            Sudoku.grid.checkForErrors();
        }
    };
}
