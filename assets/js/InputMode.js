/**
 * Several input modes, to be used as constants
 * @type {number}
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
     */
    self.radioButtons = document.getElementsByName('input_mode');

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        selectCurrentRadioButton();
        registerEventListeners();
    };

    /**
     * Make the radio button of the current input mode checked
     * @return {void}
     */
    const selectCurrentRadioButton = () => {
        self.radioButtons.forEach(radioButton => {
            if (parseInt(radioButton.value, 10) === self.getMode()) {
                radioButton.checked = true;
            }
        });
    };

    /**
     * Enable toggling the mode with radio buttons
     * @return {void}
     */
    const registerEventListeners = () => {
        self.radioButtons.forEach(radioButton => {
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
                    self.setMode(InputMode.MODE_CENTER);
                    break;
            }

            selectCurrentRadioButton();
        });
    };

    /**
     * @param {number} mode
     * @return {void}
     */
    self.setMode = mode => {
        if ((typeof mode).toLowerCase() !== 'number') {
            throw new Error(`Expected a number, got ${typeof mode}`);
        }

        if (mode < InputMode.MODE_VALUE || mode > InputMode.MODE_CENTER) {
            throw new Error('Invalid input mode number given, please use InputMode constants');
        }

        _mode = mode;
    };

    /**
     * Change the mode number incrementally
     * @return {void}
     */
    self.changeMode = () => {
        // Increase the mode number
        _mode++;

        // Wrap around, when max number is reached
        if (_mode > InputMode.MODE_CENTER) {
            _mode = InputMode.MODE_VALUE;
        }
    }

    /**
     * @return {number}
     */
    self.getMode = () => _mode;
}
