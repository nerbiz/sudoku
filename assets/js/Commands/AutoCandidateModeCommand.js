import {extend} from '../functions';
import TogglableCommandInterface from './TogglableCommandInterface';
import InputMode from '../InputMode';

extend(AutoCandidateModeCommand, TogglableCommandInterface);

export default function AutoCandidateModeCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

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
