import {extend} from '../../functions';
import TogglableCommandInterface from '../TogglableCommandInterface';

extend(HighlightValueCommand, TogglableCommandInterface);

export default function HighlightValueCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.highlightValueState();

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-highlight-value');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        _toggleCheckbox.checked = state;
        Sudoku.settings.highlightValueState(state);
    };
};
