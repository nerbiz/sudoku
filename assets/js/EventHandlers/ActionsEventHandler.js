export default function ActionsEventHandler() {
    const self = this;

    /**
     * Initialize the object
     */
    self.init = () => {
        _registerCheckErrorsEvent();
    };

    /**
     * @private
     */
    const _registerCheckErrorsEvent = () => {
        document.getElementById('check-errors')
            .addEventListener('click', Sudoku.grid.checkForErrors);
    };
}
