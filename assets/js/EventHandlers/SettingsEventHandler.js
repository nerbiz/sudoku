import ShowClockCommand from '../Commands/Settings/ShowClockCommand';
import AutoErrorCheckingCommand from '../Commands/Settings/AutoErrorCheckingCommand';
import AutoRemovePencilMarksCommand from '../Commands/Settings/AutoRemovePencilMarksCommand';
import HighlightRowCommand from '../Commands/Settings/HighlightRowCommand';
import HighlightColumnCommand from '../Commands/Settings/HighlightColumnCommand';
import HighlightBoxCommand from '../Commands/Settings/HighlightBoxCommand';
import HighlightValueCommand from '../Commands/Settings/HighlightValueCommand';
import HighlightPencilMarksCommand from '../Commands/Settings/HighlightPencilMarksCommand';

export default function SettingsEventHandler() {
    const self = this;

    /**
     * Initialize the object
     */
    self.init = () => {
        _enableClockToggling();
        _enableAutoErrorCheckingToggling();
        _enableAutoRemovePencilMarksToggling();
        _enableHighlightingToggling();
    };

    /**
     * @return {void}
     * @private
     */
    const _enableClockToggling = () => {
        document.getElementById('setting-show-clock')
            .addEventListener('change', event => {
                (new ShowClockCommand()).execute(event.target.checked);
            });
    };

    /**
     * @return {void}
     * @private
     */
    const _enableAutoErrorCheckingToggling = () => {
        document.getElementById('setting-auto-error-checking')
            .addEventListener('change', event => {
                (new AutoErrorCheckingCommand()).execute(event.target.checked);
            });
    };

    /**
     * @return {void}
     * @private
     */
    const _enableAutoRemovePencilMarksToggling = () => {
        document.getElementById('setting-auto-remove-pencil-marks')
            .addEventListener('change', event => {
                (new AutoRemovePencilMarksCommand()).execute(event.target.checked);
            });
    };

    /**
     * @return {void}
     * @private
     */
    const _enableHighlightingToggling = () => {
        // Row highlighting
        document.getElementById('setting-highlight-row')
            .addEventListener('change', event => {
                (new HighlightRowCommand()).execute(event.target.checked);
            });

        // Column highlighting
        document.getElementById('setting-highlight-column')
            .addEventListener('change', event => {
                (new HighlightColumnCommand()).execute(event.target.checked);
            });

        // 3x3 box highlighting
        document.getElementById('setting-highlight-box')
            .addEventListener('change', event => {
                (new HighlightBoxCommand()).execute(event.target.checked);
            });

        // Same value highlighting
        document.getElementById('setting-highlight-value')
            .addEventListener('change', event => {
                (new HighlightValueCommand()).execute(event.target.checked);
            });

        // Same value highlighting
        document.getElementById('setting-highlight-pencil-marks')
            .addEventListener('change', event => {
                (new HighlightPencilMarksCommand()).execute(event.target.checked);
            });
    };
}
