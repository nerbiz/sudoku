import {extend} from '../../functions';
import TogglableCommand from '../TogglableCommand';

extend(ShowClockCommand, TogglableCommand);

export default function ShowClockCommand() {
    const self = this;
    TogglableCommand.call(self);

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
     * @inheritDoc
     */
    self.execute = state => {
        const toggleMethod = state ? 'remove' : 'add';
        _clockElement.classList[toggleMethod]('hide');

        Sudoku.settings.clockState(state);
        self.state = state;
    };
}
