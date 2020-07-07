import Command from './Command';

export default function CommandHistory() {
    const self = this;

    /**
     * The list of commands that have been executed
     * @type {Command[]}
     * @private
     */
    let _past = [];

    /**
     * The list of commands to redo
     * @type {Command[]}
     * @private
     */
    let _future = [];

    /**
     * Add a command to be executed
     * @param {Command} command
     * @param {boolean} clearFuture
     * @return {number}
     */
    self.executeCommand = (command, clearFuture = true) => {
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
        self.executeCommand(command, false);
    };
}
