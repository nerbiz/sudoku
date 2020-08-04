import {extend} from '../../functions';
import TogglableCommand from '../TogglableCommand';

extend(HighlightBoxCommand, TogglableCommand);

export default function HighlightBoxCommand() {
    const self = this;
    TogglableCommand.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.highlightBoxState;

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-highlight-box');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        _toggleCheckbox.checked = state;

        Sudoku.settings.highlightBoxState(state);
        self.state = state;
    };
};
