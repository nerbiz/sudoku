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
     * The label containing the checkbox for the 'center marks' input mode
     * @type {HTMLElement}
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
        if ((typeof mode).toLowerCase() !== 'number') {
            throw new Error(`Expected a number, got ${typeof mode}`);
        }

        const maxModeNumber = (Sudoku.settings.autoCandidateState() === true)
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
     * Perform actions based on whether auto-candidate mode is on
     * @param {boolean} state
     * @return {void}
     */
    self.triggerAutoCandidateActions = state => {
        if (state === true) {
            // Disable the input mode checkbox
            _inputModeCenterLabel.classList.add('strike-through');
            _inputModeCenterLabel.getElementsByTagName('input')[0].disabled = true;

            // Trigger any restrictions on the current input mode
            self.setMode(self.getMode());
        } else {
            // Enable the input mode checkbox
            _inputModeCenterLabel.classList.remove('strike-through');
            _inputModeCenterLabel.getElementsByTagName('input')[0].disabled = false;
        }
    };
}
