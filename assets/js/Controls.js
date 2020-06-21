import GridCell from './GridCell';

export default class {
    /**
     * The collection of grid cells
     * @type {GridCell[]}
     */
    gridCells = [];

    /**
     * Indicates whether a mouse button is currently held down
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
    shiftKey = 'Shift';

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

    /**
     * Add a grid cell to the collection
     * @param {GridCell} cell
     * @return {void}
     */
    registerCell(cell) {
        this.gridCells.push(cell);
    }
}
