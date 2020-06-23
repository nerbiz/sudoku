import GridCell from './Grid/GridCell';

export default function Controls() {
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
    self.ctrlKeys = ['ControlLeft', 'ControlRight', 'MetaLeft', 'MetaRight'];

    /**
     * Shift key code
     * @type {string[]}
     */
    self.shiftKeys = ['ShiftLeft', 'ShiftRight'];

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
