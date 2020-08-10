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
                    if (! Sudoku.settings.autoCandidateState()) {
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
        // Wrap around, when max number is reached
        if (mode > InputMode.MODE_CENTER) {
            mode = InputMode.MODE_VALUE;
        }

        if (Sudoku.settings.autoCandidateState() === true) {
            // Center-marks are disabled in auto-candidate mode
            if (mode > InputMode.MODE_CORNER) {
                mode = InputMode.MODE_VALUE;
            }
        }

        if ((typeof mode).toLowerCase() !== 'number') {
            throw new Error(`Expected a number, got ${typeof mode}`);
        }

        if (mode < InputMode.MODE_VALUE || mode > InputMode.MODE_CENTER) {
            throw new Error('Invalid input mode number given, please use InputMode constants');
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
    }

    /**
     * @return {number}
     */
    self.getMode = () => _mode;
}
