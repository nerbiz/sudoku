import AutoCandidateModeCommand from '../Commands/AutoCandidateModeCommand';
import PauseGameCommand from '../Commands/PauseGameCommand';

export default function ActionsEventHandler() {
    const self = this;

    /**
     * Initialize the object
     */
    self.init = () => {
        _registerPauseResumeEvent();
        _registerCheckErrorsEvent();
        _registerAutoCandidateModeEvent();
    };

    /**
     * @private
     */
    const _registerPauseResumeEvent = () => {
        document.getElementById('toggle-pause-button')
            .addEventListener('click', () => {
                (new PauseGameCommand()).toggle();
            });

        document.getElementById('game-resume-button')
            .addEventListener('click', () => {
                (new PauseGameCommand()).execute(false);
                Sudoku.modal.close();
            });
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
