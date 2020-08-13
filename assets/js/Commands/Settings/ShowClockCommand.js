import {extend} from '../../functions';
import TogglableCommandInterface from '../TogglableCommandInterface';

extend(ShowClockCommand, TogglableCommandInterface);

export default function ShowClockCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.clockState();

    /**
     * @type {HTMLElement}
     * @private
     */
    const _clockElement = document.getElementById('clock-wrapper');

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-show-clock');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        const toggleMethod = state ? 'remove' : 'add';
        _clockElement.classList[toggleMethod]('hide');

        _toggleCheckbox.checked = state;

        Sudoku.settings.clockState(state);
    };
}
