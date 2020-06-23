export default function EntryMode() {
    const self = this;

    /**
     * Normal value entry
     * @type {string}
     */
    self.MODE_VALUE = 'value';

    /**
     * Corner pencil mark entry
     * @type {string}
     */
    self.MODE_CORNER = 'corner';

    /**
     * Center pencil mark entry
     * @type {string}
     */
    self.MODE_CENTER = 'center';

    /**
     * The current mode
     * @type {string}
     */
    self.mode = self.MODE_VALUE;

    /**
     * Change the mode
     * @param {string} mode
     * @return {string}
     */
    self.setMode = mode => self.mode = mode;
}
