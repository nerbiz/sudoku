import {extend} from '../functions';
import TogglableCommand from './TogglableCommand';
import InputMode from '../InputMode';

extend(AutoCandidateModeCommand, TogglableCommand);

export default function AutoCandidateModeCommand() {
    const self = this;
    TogglableCommand.call(self);

    /**
     * @inheritDoc
     */
    self.state = false;

    /**
     * The label containing the checkbox for the 'center marks' input mode
     * @type {HTMLElement}
     * @private
     */
    const _inputModeCenterLabel = document.getElementById('input-mode-center-label');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        if (state === true) {
            Sudoku.grid.determineCandidates();

            // Disable the input mode checkbox
            _inputModeCenterLabel.classList.add('strike-through');
            _inputModeCenterLabel.getElementsByTagName('input')[0].disabled = true;

            // Don't leave the disabled input mode in an active state
            if (Sudoku.inputMode.getMode() === InputMode.MODE_CENTER) {
                Sudoku.inputMode.setMode(InputMode.MODE_VALUE);
            }
        } else {
            Sudoku.grid.removeCandidates();

            // Enable the input mode checkbox
            _inputModeCenterLabel.classList.remove('strike-through');
            _inputModeCenterLabel.getElementsByTagName('input')[0].disabled = false;
        }

        Sudoku.settings.autoCandidateState(state);
        self.state = state;
    };
}
