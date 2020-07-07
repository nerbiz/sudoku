export default function Command() {
    const self = this;

    /**
     * Execute the command
     * @return {void}
     */
    self.execute = () => {
        throw new Error('execute() method is not implemented in the command');
    };

    /**
     * Undo the command
     * @return {void}
     */
    self.undo = () => {
        throw new Error('undo() method is not implemented in the command');
    };
}
