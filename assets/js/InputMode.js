/**
 * Several input modes, to be used as constants
 * @type {number}
 * @static
 */
InputMode.MODE_VALUE = 1;
InputMode.MODE_CORNER = 2;
InputMode.MODE_CENTER = 3;

export default function InputMode() {
    const self = this;

    /**
     * The current mode
     * @type {number}
     * @private
     */
    let _mode = InputMode.MODE_VALUE;

    /**
     * The radio buttons that can change the mode
     * @type {NodeListOf<HTMLElement>}
     * @private
     */
    const _radioButtons = document.getElementsByName('input_mode');

    /**
     * The label containing the checkbox for the 'value' input mode
     * @type {HTMLLabelElement}
     * @private
     */
    const _inputModeValueLabel = document.getElementById('input-mode-value-label');

    /**
     * The label containing the checkbox for the 'corner marks' input mode
     * @type {HTMLLabelElement}
     * @private
     */
    const _inputModeCornerLabel = document.getElementById('input-mode-corner-label');

    /**
     * The label containing the checkbox for the 'center marks' input mode
     * @type {HTMLLabelElement}
     * @private
     */
    const _inputModeCenterLabel = document.getElementById('input-mode-center-label');

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        _selectCurrentRadioButton();
        _registerEventListeners();
    };

    /**
     * Make the radio button of the current input mode checked
     * @return {void}
     * @private
     */
    const _selectCurrentRadioButton = () => {
        _radioButtons.forEach(radioButton => {
            if (parseInt(radioButton.value, 10) === self.getMode()) {
                radioButton.checked = true;
            }
        });
    };

    /**
     * Enable toggling the mode with radio buttons
     * @return {void}
     * @private
     */
    const _registerEventListeners = () => {
        _radioButtons.forEach(radioButton => {
            radioButton.addEventListener('change', () => {
                self.setMode(parseInt(radioButton.value, 10));
            });
        });

        document.addEventListener('keydown', event => {
            switch (event.code) {
                case 'Space':
                    self.changeMode();
                    break;
                case 'KeyI':
                    self.setMode(InputMode.MODE_VALUE);
                    break;
                case 'KeyO':
                    self.setMode(InputMode.MODE_CORNER);
                    break;
                case 'KeyP':
                    if (! Sudoku.settings.autoCandidateModeState()) {
                        self.setMode(InputMode.MODE_CENTER);
                    }
                    break;
            }
        });
    };

    /**
     * @param {number} mode
     * @return {void}
     */
    self.setMode = mode => {
        // Restrict to value mode, when design mode is on
        if (Sudoku.settings.designModeState() === true) {
            _mode = InputMode.MODE_VALUE;
            _selectCurrentRadioButton();
            return;
        }

        if ((typeof mode).toLowerCase() !== 'number') {
            throw new Error(`Expected a number, got ${typeof mode}`);
        }

        const maxModeNumber = (Sudoku.settings.autoCandidateModeState() === true)
            // Center-marks are disabled in auto-candidate mode
            ? InputMode.MODE_CORNER
            : InputMode.MODE_CENTER;

        // Wrap around, when max number is reached
        if (mode > maxModeNumber) {
            mode = InputMode.MODE_VALUE;
        }

        _mode = mode;
        _selectCurrentRadioButton();
    };

    /**
     * Change the mode number incrementally
     * @return {void}
     */
    self.changeMode = () => {
        // Increase the mode number
        self.setMode(_mode + 1);
    };

    /**
     * @return {number}
     */
    self.getMode = () => _mode;

    /**
     *
     * @param {HTMLLabelElement} label
     * @param {boolean} disable
     * @private
     */
    const _disableInput = (label, disable = true) => {
        // Disable / enable the input mode checkbox
        (disable === true)
            ? label.classList.add('strike-through')
            : label.classList.remove('strike-through');

        label.getElementsByTagName('input')[0].disabled = disable;
    };

    /**
     * Perform actions based on whether auto-candidate mode is on
     * @param {boolean} state
     * @return {void}
     */
    self.triggerAutoCandidateModeActions = state => {
        if (state === true) {
            _disableInput(_inputModeCenterLabel, true);

            // Trigger any restrictions on the current input mode
            self.setMode(self.getMode());
        } else {
            _disableInput(_inputModeCenterLabel, false);
        }
    };

    /**
     * Perform actions based on whether design mode is on
     * @param {boolean} state
     * @return {void}
     */
    self.triggerDesignModeActions = state => {
        if (state === true) {
            _disableInput(_inputModeValueLabel, true);
            _disableInput(_inputModeCornerLabel, true);
            _disableInput(_inputModeCenterLabel, true);

            // Trigger any actions based on the current input mode
            self.setMode(self.getMode());
        } else {
            _disableInput(_inputModeValueLabel, false);
            _disableInput(_inputModeCornerLabel, false);
            _disableInput(_inputModeCenterLabel, false);
        }
    };
}
