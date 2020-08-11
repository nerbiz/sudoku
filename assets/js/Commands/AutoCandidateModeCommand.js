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
     * @inheritDoc
     */
    self.execute = state => {
        Sudoku.settings.autoCandidateState(state);
        Sudoku.inputMode.triggerAutoCandidateActions(state);

        (state === true)
            ? Sudoku.grid.determineCandidates()
            : Sudoku.grid.removeCandidates();

        self.state = state;
    };
}
