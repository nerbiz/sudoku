import {extend} from '../functions';
import TogglableCommandInterface from './TogglableCommandInterface';

extend(AutoCandidateModeCommand, TogglableCommandInterface);

export default function AutoCandidateModeCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.autoCandidateModeState();

    /**
     * @inheritDoc
     */
    self.execute = state => {
        Sudoku.settings.autoCandidateModeState(state);
        Sudoku.inputMode.triggerAutoCandidateModeActions(state);

        (state === true)
            ? Sudoku.grid.determineCandidates()
            : Sudoku.grid.removeCandidates();
    };
}
