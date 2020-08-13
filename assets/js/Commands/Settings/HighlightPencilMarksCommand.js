import {extend} from '../../functions';
import TogglableCommandInterface from '../TogglableCommandInterface';

extend(HighlightPencilMarksCommand, TogglableCommandInterface);

export default function HighlightPencilMarksCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.highlightPencilMarksState();

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-highlight-pencil-marks');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        _toggleCheckbox.checked = state;
        Sudoku.settings.highlightPencilMarksState(state);
    };
};
