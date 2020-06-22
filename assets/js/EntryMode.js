export default class {
    /**
     * Normal value entry
     * @type {string}
     */
    MODE_VALUE = 'value';

    /**
     * Corner pencil mark entry
     * @type {string}
     */
    MODE_CORNER = 'corner';

    /**
     * Center pencil mark entry
     * @type {string}
     */
    MODE_CENTER = 'center';

    /**
     * The current mode
     * @type {string}
     */
    mode = this.MODE_VALUE;

    /**
     * Change the mode
     * @param {string} mode
     * @return {void}
     */
    setMode(mode) {
        this.mode = mode;
    }
}
