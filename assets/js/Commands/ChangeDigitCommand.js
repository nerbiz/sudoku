import {extend} from '../functions';
import Command from './Command';

extend(ChangeDigitCommand, Command);

/**
 * @param {number|null} digit
 * @constructor
 */
export default function ChangeDigitCommand(digit) {
    const self = this;

    /**
     * The digit to apply to cell(s)
     * @type {number|null}
     * @private
     */
    const _digit = digit;

    /**
     * The input mode for the digit
     * @type {number}
     * @private
     */
    const _inputMode = Sudoku.inputMode.getMode();

    /**
     * The cells to apply the digit to
     * @type {GridCell[]}
     * @private
     */
    const _cells = Sudoku.grid.getSelectedCells();

    /**
     * Contains the state of cells, before changing the digit
     * @type {Object}
     * @private
     */
    const _cellsState = (() => {
        // Pairs of cellNumber:{value, cornerMarks, centerMarks}
        const state = {};

        // Collect the state of all cells
        _cells.forEach(cell => {
            state[cell.getCellNumber()] = {
                value: cell.getValue(),
                cornerMarks: cell.getCornerMarks().map(item => item),
                centerMarks: cell.getCenterMarks().map(item => item),
            };
        });

        return state;
    })();

    /**
     * @inheritDoc
     */
    self.execute = () => {
        Sudoku.grid.removeAllErrors();
        _cells.forEach(cell => cell.setDigit(_digit, _inputMode));
        Sudoku.grid.checkForErrors();
    }

    /**
     * @inheritDoc
     */
    self.undo = () => {
        Sudoku.grid.removeAllErrors();

        // Apply the previous values to the cell(s)
        _cells.forEach(cell => {
            const state = _cellsState[cell.getCellNumber()];

            cell.setValue(state.value);
            cell.setCornerMarks(state.cornerMarks);
            cell.setCenterMarks(state.centerMarks);
        });

        Sudoku.grid.checkForErrors();
    };
}
