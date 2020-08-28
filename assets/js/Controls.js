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
        document.addEventListener('keyup', _keyUpDownCallback);
        document.addEventListener('keydown', _keyUpDownCallback);
        document.addEventListener('keydown', _keyDownCallback);
        _registerClickDisabling();
    };

    /**
     * Disable click events for certain elements
     * @return {void}
     * @private
     */
    const _registerClickDisabling = () => {
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
     * @private
     */
    const _keyUpDownCallback = event => {
        _ctrlKeyPressed = Visitor.usesMacOs ? event.metaKey : event.ctrlKey;
        _shiftKeyPressed = event.shiftKey;
    };

    /**
     * @param {Event} event
     * @return {void}
     * @private
     */
    const _keyDownCallback = event => {
        // Prevent browser keyboard actions
        if (! self.cancelKeyboardEvent(event)) {
            if ([
                'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                'Space'
            ].indexOf(event.code) > -1) {
                event.preventDefault();
            }

            if (_ctrlKeyPressed) {
                if (event.code === 'KeyY') {
                    event.preventDefault();
                }
            }
        }
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
     * Checks whether an event is a number key
     * @param {Event} event
     * @return {boolean}
     */
    self.isNumberKey = event => (! isNaN(parseInt(event.key, 10)));

    /**
     * Checks whether an event is a delete key
     * @param {Event} event
     * @return {boolean}
     */
    self.isDeleteKey = event => (_deleteKeys.indexOf(event.code) > -1);

    /**
     * Checks whether an event is an arrow key
     * @param {Event} event
     * @param {string} direction (any or up/down/left/right)
     * @return {boolean}
     */
    self.isArrowKey = (event, direction = 'any') => {
        // Check for any arrow key
        if (direction === 'any') {
            return (_arrowKeysConcatenated.indexOf(event.code) > -1);
        }

        // Check for a specific arrow key
        return (
            _arrowKeys[direction]
            && _arrowKeys[direction].indexOf(event.code) > -1
        );
    };
}
