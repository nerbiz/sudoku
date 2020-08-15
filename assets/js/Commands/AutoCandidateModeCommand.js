import {extend} from '../functions';
import TogglableCommandInterface from './TogglableCommandInterface';

extend(AutoCandidateModeCommand, TogglableCommandInterface);

export default function AutoCandidateModeCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.autoCandidateState();

    /**
     * @inheritDoc
     */
    self.execute = state => {
        Sudoku.settings.autoCandidateState(state);
        Sudoku.inputMode.triggerAutoCandidateActions(state);

        (state === true)
            ? Sudoku.grid.determineCandidates()
            : Sudoku.grid.removeCandidates();
    };
}
