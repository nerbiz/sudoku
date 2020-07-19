import {extend} from '../../functions';
import TogglableCommand from '../TogglableCommand';

extend(PauseGameCommand, TogglableCommand);

export default function PauseGameCommand() {
    const self = this;
    TogglableCommand.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => false;

    /**
     * @inheritDoc
     */
    self.execute = state => {
        if (state === true) {
            Sudoku.clock.pause();
        } else {
            Sudoku.clock.unpause();
        }

        self.state = state;
    };
}
