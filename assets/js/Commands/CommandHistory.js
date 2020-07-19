import UndoableCommand from './UndoableCommand';

export default function CommandHistory() {
    const self = this;

    /**
     * The list of commands that have been executed
     * @type {UndoableCommand[]}
     * @private
     */
    let _past = [];

    /**
     * The list of commands to redo
     * @type {UndoableCommand[]}
     * @private
     */
    let _future = [];

    /**
     * Add a command to be executed
     * @param {UndoableCommand} command
     * @param {boolean} clearFuture Whether to clear the future (redo) stack
     * @return {number}
     */
    self.execute = (command, clearFuture = true) => {
        if (! (command instanceof UndoableCommand)) {
            throw new Error('Command needs to have UndoableCommand in its prototype chain');
        }

        command.execute();
        _past.push(command);

        // Clear the future (redo) list if needed
        if (clearFuture) {
            _future = [];
        }
    };

    /**
     * Undo the most recent command
     * @return {void}
     */
    self.undo = () => {
        // A command needs to exist
        if (_past.length < 1) {
            return;
        }

        // Undo the command
        const command = _past.pop();
        command.undo();

        // Put the command in the future stack, for redoing
        _future.push(command);
    };

    /**
     * Execute the most recent command from the future stack
     * @return {void}
     */
    self.redo = () => {
        // A command needs to exist
        if (_future.length < 1) {
            return;
        }

        // Redo the command
        const command = _future.pop();
        self.execute(command, false);
    };
}
