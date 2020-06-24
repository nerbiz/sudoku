/**
 * Several entry mode types, to be used as constants
 * @type {string}
 */
EntryMode.MODE_VALUE = 'value';
EntryMode.MODE_CORNER = 'corner';
EntryMode.MODE_CENTER = 'center';

export default function EntryMode() {
    const self = this;

    /**
     * The current mode
     * @type {string}
     */
    self.mode = EntryMode.MODE_VALUE;

    /**
     * Change the mode
     * @param {string} mode
     * @return {string}
     */
    self.setMode = mode => self.mode = mode;
}
