import {extend} from '../../functions';
import TogglableCommandInterface from '../TogglableCommandInterface';

extend(HighlightColumnCommand, TogglableCommandInterface);

export default function HighlightColumnCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.highlightColumnState();

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-highlight-column');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        _toggleCheckbox.checked = state;
        Sudoku.settings.highlightColumnState(state);
    };
};
