import {extend} from '../functions';
import TogglableCommandInterface from './TogglableCommandInterface';

extend(DesignModeCommand, TogglableCommandInterface);

export default function DesignModeCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => Sudoku.settings.designModeState();

    /**
     * @inheritDoc
     */
    self.execute = state => {
        Sudoku.settings.designModeState(state);
        Sudoku.inputMode.triggerDesignModeActions(state);
    };
}
