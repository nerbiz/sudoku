import {extend} from '../../functions';
import TogglableCommandInterface from '../TogglableCommandInterface';

extend(AutoRemovePencilMarksCommand, TogglableCommandInterface);

export default function AutoRemovePencilMarksCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.autoRemovePencilMarksState();

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-auto-remove-pencil-marks');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        _toggleCheckbox.checked = state;
        Sudoku.settings.autoRemovePencilMarksState(state);
    };
};
