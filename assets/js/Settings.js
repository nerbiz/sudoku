import ShowClockCommand from './Commands/Settings/ShowClockCommand';
import AutoErrorCheckingCommand from './Commands/Settings/AutoErrorCheckingCommand';

export default function Settings() {
    const self = this;

    /**
     * Indicates whether the clock is shown
     * @type {boolean}
     * @private
     */
    let _clockState;

    /**
     * Indicates whether automatic error checking is enabled
     * @type {boolean}
     * @private
     */
    let _autoErrorCheckingState;

    /**
     * Initialize the object
     */
    self.init = () => {
        // Initialize the settings in local storage if needed
        if (localStorage.getItem('settings') === null) {
            localStorage.setItem('settings', JSON.stringify({}));
        }

        _fromLocalStorage();
        _applySettings();
    };

    /**
     * Get settings stored in local storage
     * @return {void}
     * @private
     */
    const _fromLocalStorage = () => {
        const settings = JSON.parse(localStorage.getItem('settings'));

        _clockState = (settings.clock !== undefined)
            ? settings.clock
            : true;

        _autoErrorCheckingState = (settings.autoErrorChecking !== undefined)
            ? settings.autoErrorChecking
            : true;
    };

    /**
     * Export settings to local storage
     * @return {void}
     * @private
     */
    const _toLocalStorage = () => {
        localStorage.setItem('settings', JSON.stringify({
            clock: self.clockState(),
            autoErrorChecking: self.autoErrorCheckingState(),
        }));
    };

    /**
     * Apply the stored settings
     * @return {void}
     * @private
     */
    const _applySettings = () => {
        const showClockCommand = new ShowClockCommand();
        showClockCommand.execute(self.clockState());

        const autoErrorCheckingCommand = new AutoErrorCheckingCommand();
        autoErrorCheckingCommand.execute(self.autoErrorCheckingState());
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.clockState = (state = null) => {
        if (state !== null) {
            _clockState = state;
            _toLocalStorage();
        }

        return _clockState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.autoErrorCheckingState = (state = null) => {
        if (state !== null) {
            _autoErrorCheckingState = state;
            _toLocalStorage();

            // Check or remove errors
            (state === true)
                ? Sudoku.grid.checkForErrors()
                : Sudoku.grid.removeAllErrors();
        }

        return _autoErrorCheckingState;
    };
}
