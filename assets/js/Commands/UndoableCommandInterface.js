import {extend} from '../functions';
import CommandInterface from './CommandInterface';

extend(UndoableCommandInterface, CommandInterface);

export default function UndoableCommandInterface() {
    const self = this;
    CommandInterface.call(self);

    /**
     * Undo the command
     * @return {void}
     */
    self.undo = () => {
        throw new Error("'undo' method is not implemented in the command");
    };
}
