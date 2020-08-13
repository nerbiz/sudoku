export default function CommandInterface() {
    const self = this;

    /**
     * Execute the command
     * @return {void}
     */
    self.execute = () => {
        throw new Error("'execute' method is not implemented in the command");
    };
}
