import ShowClockCommand from './Commands/Settings/ShowClockCommand';
import AutoErrorCheckingCommand from './Commands/Settings/AutoErrorCheckingCommand';
import HighlightRowCommand from './Commands/Settings/HighlightRowCommand';
import HighlightColumnCommand from './Commands/Settings/HighlightColumnCommand';
import HighlightBoxCommand from './Commands/Settings/HighlightBoxCommand';
import HighlightValueCommand from './Commands/Settings/HighlightValueCommand';
import HighlightPencilMarksCommand from './Commands/Settings/HighlightPencilMarksCommand';

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
     * Indicates whether highlighting rows is enabled
     * @type {boolean}
     * @private
     */
    let _highlightRowState;

    /**
     * Indicates whether highlighting columns is enabled
     * @type {boolean}
     * @private
     */
    let _highlightColumnState;

    /**
     * Indicates whether highlighting 3x3 boxes is enabled
     * @type {boolean}
     * @private
     */
    let _highlightBoxState;

    /**
     * Indicates whether highlighting cells with the same value is enabled
     * @type {boolean}
     * @private
     */
    let _highlightValueState;

    /**
     * Indicates whether highlighting cells with the same value (pencil marks) is enabled
     * @type {boolean}
     * @private
     */
    let _highlightPencilMarksState;

    /**
     * Indicates whether auto-candidate mode is on
     * @type {boolean}
     * @private
     */
    let _autoCandidateState = false;

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

        _highlightRowState = (settings.highlightRow !== undefined)
            ? settings.highlightRow
            : true;

        _highlightColumnState = (settings.highlightColumn !== undefined)
            ? settings.highlightColumn
            : true;

        _highlightBoxState = (settings.highlightBox !== undefined)
            ? settings.highlightBox
            : true;

        _highlightValueState = (settings.highlightValue !== undefined)
            ? settings.highlightValue
            : true;

        _highlightPencilMarksState = (settings.highlightPencilMarks !== undefined)
            ? settings.highlightPencilMarks
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
            highlightRow: self.highlightRowState(),
            highlightColumn: self.highlightColumnState(),
            highlightBox: self.highlightBoxState(),
            highlightValue: self.highlightValueState(),
            highlightPencilMarks: self.highlightPencilMarksState(),
        }));
    };

    /**
     * Apply the stored settings
     * @return {void}
     * @private
     */
    const _applySettings = () => {
        (new ShowClockCommand()).execute(self.clockState());
        (new AutoErrorCheckingCommand()).execute(self.autoErrorCheckingState());
        (new HighlightRowCommand()).execute(self.highlightRowState());
        (new HighlightColumnCommand()).execute(self.highlightColumnState());
        (new HighlightBoxCommand()).execute(self.highlightBoxState());
        (new HighlightValueCommand()).execute(self.highlightValueState());
        (new HighlightPencilMarksCommand()).execute(self.highlightPencilMarksState());
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
        }

        return _autoErrorCheckingState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.highlightRowState = (state = null) => {
        if (state !== null) {
            _highlightRowState = state;
            _toLocalStorage();
        }

        return _highlightRowState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.highlightColumnState = (state = null) => {
        if (state !== null) {
            _highlightColumnState = state;
            _toLocalStorage();
        }

        return _highlightColumnState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.highlightBoxState = (state = null) => {
        if (state !== null) {
            _highlightBoxState = state;
            _toLocalStorage();
        }

        return _highlightBoxState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.highlightValueState = (state = null) => {
        if (state !== null) {
            _highlightValueState = state;
            _toLocalStorage();
        }

        return _highlightValueState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.highlightPencilMarksState = (state = null) => {
        if (state !== null) {
            _highlightPencilMarksState = state;
            _toLocalStorage();
        }

        return _highlightPencilMarksState;
    };

    /**
     * @param {boolean|null} state Setter if given, getter otherwise
     * @return {boolean}
     */
    self.autoCandidateState = (state = null) => {
        if (state !== null) {
            _autoCandidateState = state;
        }

        return _autoCandidateState;
    }
}
