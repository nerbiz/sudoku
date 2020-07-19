import {extend} from '../functions';
import Command from './Command';

extend(TogglableCommand, Command);

export default function TogglableCommand() {
    const self = this;
    Command.call(self);

    /**
     * The current state of the command
     * @type {boolean|function|null}
     * @private
     */
    self.state = null;

    /**
     * @inheritDoc
     * @param {boolean} state
     */
    self.execute = state => {
        throw new Error("'execute' method is not implemented in the command");
    };

    /**
     * Toggle between states of the command
     * @return {void}
     */
    self.toggle = () => {
        const state = ((typeof self.state) === 'function')
            ? self.state()
            : self.state;

        if (state === null) {
            throw new Error('The command needs an (initial) true/false state');
        }

        self.execute(! state);
    };
}
