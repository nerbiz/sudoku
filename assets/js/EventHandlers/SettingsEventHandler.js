import ShowClockCommand from '../Commands/Settings/ShowClockCommand';
import AutoErrorCheckingCommand from '../Commands/Settings/AutoErrorCheckingCommand';
import HighlightRowCommand from '../Commands/Settings/HighlightRowCommand';

export default function SettingsEventHandler() {
    const self = this;

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
        const showClockCommand = new ShowClockCommand();

        document.getElementById('setting-show-clock')
            .addEventListener('change', event => {
                showClockCommand.execute(event.target.checked);
            });
    };

    /**
     * @return {void}
     * @private
     */
    const _enableAutoErrorCheckingToggling = () => {
        const autoErrorCheckingCommand = new AutoErrorCheckingCommand();

        document.getElementById('setting-auto-error-checking')
            .addEventListener('change', event => {
                autoErrorCheckingCommand.execute(event.target.checked);
            });
    };

    /**
     * @return {void}
     * @private
     */
    const _enableHighlightingToggling = () => {
        const highlightRowCommand = new HighlightRowCommand();

        // Row, column and box, same digit (value and pencil mark)
        document.getElementById('setting-highlight-row')
            .addEventListener('change', event => {
                highlightRowCommand.execute(event.target.checked);
            });
    };
}
