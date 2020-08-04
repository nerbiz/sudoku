import {extend} from '../../functions';
import TogglableCommand from '../TogglableCommand';

extend(HighlightRowCommand, TogglableCommand);

export default function HighlightRowCommand() {
    const self = this;
    TogglableCommand.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.highlightRowState;

    /**
     * The checkbox that toggles the setting
     * @type {HTMLElement}
     * @private
     */
    const _toggleCheckbox = document.getElementById('setting-highlight-row');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        _toggleCheckbox.checked = state;

        Sudoku.settings.highlightRowState(state);
        self.state = state;
    };
};
