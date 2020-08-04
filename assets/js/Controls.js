import Visitor from './Utilities/Visitor';

export default function Controls() {
    const self = this;

    /**
     * Indicates whether a mouse button is currently pressed
     * @type {boolean}
     * @private
     */
    let _mousePressed = false;

    /**
     * Indicates whether a ctrl button is currently pressed
     * @type {boolean}
     * @private
     */
    let _ctrlKeyPressed = false;

    /**
     * Indicates whether a shift button is currently pressed
     * @type {boolean}
     * @private
     */
    let _shiftKeyPressed = false;

    /**
     * Arrow key codes
     * @type {object}
     * @private
     */
    const _arrowKeys = {
        up: ['ArrowUp', 'KeyW'],
        down: ['ArrowDown', 'KeyS'],
        left: ['ArrowLeft', 'KeyA'],
        right: ['ArrowRight', 'KeyD'],
    };

    /**
     * Arrow key codes, as 1 array
     * @type {string[]}
     * @private
     */
    const _arrowKeysConcatenated = _arrowKeys.up
        .concat(_arrowKeys.down)
        .concat(_arrowKeys.left)
        .concat(_arrowKeys.right);

    /**
     * Number key codes
     * @type {string[]}
     * @private
     */
    const _numberKeys = [
        'Digit1', 'Numpad1', 'Digit2', 'Numpad2', 'Digit3', 'Numpad3',
        'Digit4', 'Numpad4', 'Digit5', 'Numpad5', 'Digit6', 'Numpad6',
        'Digit7', 'Numpad7', 'Digit8', 'Numpad8', 'Digit9', 'Numpad9',
    ];

    /**
     * Delete key codes
     * @type {string[]}
     * @private
     */
    const _deleteKeys = ['Delete', 'Backspace'];

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        document.addEventListener('mousedown', () => _mousePressed = true);
        document.addEventListener('mouseup', () => _mousePressed = false);
        document.addEventListener('keydown', keyPressCallback);
        registerClickDisabling();
    };

    /**
     * Disable click events for certain elements
     * @return {void}
     */
    const registerClickDisabling = () => {
        document.addEventListener('click', event => {
            if (event.target.closest('.click-prevent') !== null) {
                event.preventDefault();
            }
        });
    };

    /**
     * Decide whether to cancel a keyboard listener
     * @param {Event} event
     * @return {boolean}
     */
    self.cancelKeyboardEvent = event => {
        const nodeName = event.target.nodeName.toLowerCase();

        // Don't use custom listener on input elements
        return (['input', 'textarea'].indexOf(nodeName) > -1);
    };

    /**
     * Callback for keydown and keyup
     * @param {Event} event
     * @return {void}
     */
    const keyPressCallback = event => {
        _ctrlKeyPressed = Visitor.usesMacOs ? event.metaKey : event.ctrlKey;

        // Prevent browser keyboard actions
        if (! self.cancelKeyboardEvent(event)) {
            if (event.code === 'Space') {
                event.preventDefault();
            }

            if (_ctrlKeyPressed) {
                if ([
                    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                    'KeyY'
                ].indexOf(event.code) > -1) {
                    event.preventDefault();
                }
            }
        }

        _shiftKeyPressed = event.shiftKey;
    };

    /**
     * @return {boolean}
     */
    self.mouseIsPressed = () => _mousePressed;

    /**
     * @return {boolean}
     */
    self.ctrlKeyIsPressed = () => _ctrlKeyPressed;

    /**
     * @return {boolean}
     */
    self.shiftKeyIsPressed = () => _shiftKeyPressed;

    /**
     * Checks whether a keycode is a number key
     * @param {string} keyCode
     * @return {boolean}
     */
    self.isNumberKey = keyCode => (_numberKeys.indexOf(keyCode) > -1);

    /**
     * Checks whether a keycode is a delete key
     * @param {string} keyCode
     * @return {boolean}
     */
    self.isDeleteKey = keyCode => (_deleteKeys.indexOf(keyCode) > -1);

    /**
     * Checks whether a keycode is an arrow key
     * @param {string} keyCode
     * @param {string} direction (any or up/down/left/right)
     * @return {boolean}
     */
    self.isArrowKey = (keyCode, direction = 'any') => {
        // Check for any arrow key
        if (direction === 'any') {
            return (_arrowKeysConcatenated.indexOf(keyCode) > -1);
        }

        // Check for a specific arrow key
        return (
            _arrowKeys[direction]
            && _arrowKeys[direction].indexOf(keyCode) > -1
        );
    };
}
