import {extend} from '../functions';
import Command from './Command';

extend(UndoableCommand, Command);

export default function UndoableCommand() {
    const self = this;
    Command.call(self);

    /**
     * Undo the command
     * @return {void}
     */
    self.undo = () => {
        throw new Error("'undo' method is not implemented in the command");
    };
}
