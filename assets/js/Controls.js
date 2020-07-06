import Visitor from './Utilities/Visitor';

export default function Controls() {
    const self = this;

    /**
     * Indicates whether a mouse button is currently pressed
     * @type {boolean}
     */
    self.mousePressed = false;

    /**
     * Indicates whether a ctrl button is currently pressed
     * @type {boolean}
     */
    self.ctrlKeyPressed = false;

    /**
     * Arrow key codes
     * @type {Object}
     */
    self.arrowKeys = {
        up: ['ArrowUp', 'KeyW'],
        down: ['ArrowDown', 'KeyS'],
        left: ['ArrowLeft', 'KeyA'],
        right: ['ArrowRight', 'KeyD'],
    };

    /**
     * Arrow key codes, as 1 array
     * @type {string[]}
     */
    self.arrowKeysConcatenated = self.arrowKeys.up
        .concat(self.arrowKeys.down)
        .concat(self.arrowKeys.left)
        .concat(self.arrowKeys.right);

    /**
     * Number key codes
     * @type {string[]}
     */
    self.numberKeys = [
        'Digit1', 'Numpad1', 'Digit2', 'Numpad2', 'Digit3', 'Numpad3',
        'Digit4', 'Numpad4', 'Digit5', 'Numpad5', 'Digit6', 'Numpad6',
        'Digit7', 'Numpad7', 'Digit8', 'Numpad8', 'Digit9', 'Numpad9',
    ];

    /**
     * Delete key codes
     * @type {string[]}
     */
    self.deleteKeys = ['Delete', 'Backspace'];

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        document.addEventListener('mousedown', () => self.mousePressed = true);
        document.addEventListener('mouseup', () => self.mousePressed = false);

        const ctrlKeyCheck = event => {
            self.ctrlKeyPressed = Visitor.usesMacOs
                ? event.metaKey
                : event.ctrlKey;

            // Prevent browser navigation (key combination is used for selecting cells)
            if (self.ctrlKeyPressed && ['ArrowLeft', 'ArrowRight'].indexOf(event.code) > -1) {
                event.preventDefault();
            }
        };

        document.addEventListener('keydown', ctrlKeyCheck);
        document.addEventListener('keyup', ctrlKeyCheck);
    };

    /**
     * Checks whether a keycode is a number key
     * @param {string} keyCode
     * @return {boolean}
     */
    self.isNumberKey = keyCode => (self.numberKeys.indexOf(keyCode) > -1);

    /**
     * Checks whether a keycode is a delete key
     * @param {string} keyCode
     * @return {boolean}
     */
    self.isDeleteKey = keyCode => (self.deleteKeys.indexOf(keyCode) > -1);

    /**
     * Checks whether a keycode is an arrow key
     * @param {string} keyCode
     * @param {string} direction (any or up/down/left/right)
     * @return {boolean}
     */
    self.isArrowKey = (keyCode, direction = 'any') => {
        // Check for any arrow key
        if (direction === 'any') {
            return (self.arrowKeysConcatenated.indexOf(keyCode) > -1);
        }

        // Check for a specific arrow key
        return (
            self.arrowKeys[direction]
            && self.arrowKeys[direction].indexOf(keyCode) > -1
        );
    };
}
