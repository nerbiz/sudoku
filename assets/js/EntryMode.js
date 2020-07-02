/**
 * Several entry mode types, to be used as constants
 * @type {number}
 */
EntryMode.MODE_VALUE = 1;
EntryMode.MODE_CORNER = 2;
EntryMode.MODE_CENTER = 3;

export default function EntryMode() {
    const self = this;

    /**
     * The current mode
     * @type {number}
     * @private
     */
    let _mode = self.MODE_VALUE;

    /**
     * @param {number} mode
     * @return {void}
     */
    self.setMode = mode => {
        if ((typeof mode).toLowerCase() !== 'number') {
            throw new Error(`Expected a number, got ${typeof mode}`);
        }

        if (mode < self.MODE_VALUE || mode > self.MODE_CENTER) {
            throw new Error('Invalid entry mode number given, please use EntryMode constants');
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
        if (_mode > self.MODE_CENTER) {
            _mode = self.MODE_VALUE;
        }
    }

    /**
     * @return {number}
     */
    self.getMode = () => _mode;
}
