import AutoCandidateModeCommand from '../Commands/AutoCandidateModeCommand';

export default function ActionsEventHandler() {
    const self = this;

    /**
     * Initialize the object
     */
    self.init = () => {
        _registerCheckErrorsEvent();
        _registerAutoCandidateModeEvent();
    };

    /**
     * @private
     */
    const _registerCheckErrorsEvent = () => {
        document.getElementById('check-errors')
            .addEventListener('click', Sudoku.grid.checkForErrors);
    };

    /**
     * @private
     */
    const _registerAutoCandidateModeEvent = () => {
        document.getElementById('setting-auto-candidate')
            .addEventListener('change', event => {
                const command = new AutoCandidateModeCommand();
                command.execute(event.target.checked);
            });
    };
}
