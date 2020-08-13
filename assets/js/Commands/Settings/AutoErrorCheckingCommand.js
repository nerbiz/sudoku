import {extend} from '../../functions';
import TogglableCommandInterface from '../TogglableCommandInterface';

extend(AutoErrorCheckingCommand, TogglableCommandInterface);

export default function AutoErrorCheckingCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.autoErrorCheckingState();

    /**
     * The manual error checking button
     * @type {HTMLElement}
     * @private
     */
    const _errorCheckingButton = document.getElementById('check-errors');

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-auto-error-checking');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        const toggleMethod = state ? 'add' : 'remove';
        _errorCheckingButton.classList[toggleMethod]('hide');

        _toggleCheckbox.checked = state;

        Sudoku.settings.autoErrorCheckingState(state);

        // Check or remove errors
        (state === true)
            ? Sudoku.grid.checkForErrors()
            : Sudoku.grid.removeAllErrors();
    };
}
