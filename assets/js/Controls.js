import GridCell from './Grid/GridCell';
import Visitor from './Utilities/Visitor';

export default function() {
    const self = this;

    /**
     * The collection of grid cells
     * @type {GridCell[]}
     */
    self.gridCells = [];

    /**
     * Indicates whether a mouse button is currently held down
     * @type {boolean}
     */
    self.mouseDown = false;

    /**
     * Ctrl/Cmd key codes for Windows/Linux/macOS
     * @type {string[]}
     */
    if (Visitor.usesMacOs()) {
        self.ctrlKeys = ['MetaLeft', 'MetaRight'];
    } else {
        self.ctrlKeys = ['ControlLeft', 'ControlRight'];
    }

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
     * Number key codes
     * @type {string[]}
     */
    self.numberKeys = [
        'Digit1', 'Numpad1', 'Digit2', 'Numpad2', 'Digit3', 'Numpad3',
        'Digit4', 'Numpad4', 'Digit5', 'Numpad5', 'Digit6', 'Numpad6',
        'Digit7', 'Numpad7', 'Digit8', 'Numpad8', 'Digit9', 'Numpad9',
    ];

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        document.addEventListener('mousedown', () => {
            self.mouseDown = true;
        });

        document.addEventListener('mouseup', () => {
            self.mouseDown = false;
        });
    };

    /**
     * Add a grid cell to the collection
     * @param {GridCell} cell
     * @return {number}
     */
    self.registerCell = cell => self.gridCells.push(cell);
}
