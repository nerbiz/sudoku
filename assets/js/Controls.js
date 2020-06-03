export default class {
    /**
     *
     * @type {boolean}
     */
    mouseDown = false;

    /**
     * Ctrl/Cmd key codes for Windows/Linux/macOS
     * @type {string[]}
     */
    ctrlKeys = ['Control', 'Meta'];

    /**
     * Shift key code
     * @type {string}
     */
    shiftKeys = 'Shift';

    /**
     * Arrow key codes
     * @type {Object}
     */
    arrowKeys = {
        up: 'ArrowUp',
        down: 'ArrowDown',
        left: 'ArrowLeft',
        right: 'ArrowRight',
    };

    /**
     * Initialize the object
     * @return {void}
     */
    init() {
        document.addEventListener('mousedown', () => {
            this.mouseDown = true;
        });

        document.addEventListener('mouseup', () => {
            this.mouseDown = false;
        });
    }
}
