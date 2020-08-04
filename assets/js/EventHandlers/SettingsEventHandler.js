import ShowClockCommand from '../Commands/Settings/ShowClockCommand';
import AutoErrorCheckingCommand from '../Commands/Settings/AutoErrorCheckingCommand';
import HighlightRowCommand from '../Commands/Settings/HighlightRowCommand';
import HighlightColumnCommand from '../Commands/Settings/HighlightColumnCommand';
import HighlightBoxCommand from '../Commands/Settings/HighlightBoxCommand';

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
        const highlightColumnCommand = new HighlightColumnCommand();
        const highlightBoxCommand = new HighlightBoxCommand();

        // Row highlighting
        document.getElementById('setting-highlight-row')
            .addEventListener('change', event => {
                highlightRowCommand.execute(event.target.checked);
            });

        // Column highlighting
        document.getElementById('setting-highlight-column')
            .addEventListener('change', event => {
                highlightColumnCommand.execute(event.target.checked);
            });

        // 3x3 box highlighting
        document.getElementById('setting-highlight-box')
            .addEventListener('change', event => {
                highlightBoxCommand.execute(event.target.checked);
            });
    };
}
