import ShowClockCommand from '../Commands/Settings/ShowClockCommand';
import AutoErrorCheckingCommand from '../Commands/Settings/AutoErrorCheckingCommand';

export default function SettingsEventHandler() {
    const self = this;

    /**
     * @type {ShowClockCommand}
     * @private
     */
    const _showClockCommand = new ShowClockCommand();

    /**
     * @type {AutoErrorCheckingCommand}
     * @private
     */
    const _autoErrorCheckingCommand = new AutoErrorCheckingCommand();

    /**
     * Initialize the object
     */
    self.init = () => {
        _enableClockToggling();
        _enableAutoErrorCheckingToggling();
        _enableHighlightingToggling();
    };

    /**
     * @return {void}
     * @private
     */
    const _enableClockToggling = () => {
        document.getElementById('setting-show-clock')
            .addEventListener('change', event => {
                _showClockCommand.execute(event.target.checked);
            });
    };

    /**
     * @return {void}
     * @private
     */
    const _enableAutoErrorCheckingToggling = () => {
        document.getElementById('setting-auto-error-checking')
            .addEventListener('change', event => {
                _autoErrorCheckingCommand.execute(event.target.checked);
            });
    };

    const _enableHighlightingToggling = () => {
        // Row, column and box, same digit (value and pencil mark)
    };
}
