export default class {
    /**
     * The cell number in the grid (1 through 81)
     * @type {Number}
     */
    cellNumber = null;

    /**
     * The HTML element that is the cell
     * @type {HTMLElement}
     */
    element = null;

    /**
     * Whether the cell value is set at the start
     * @type {Boolean}
     */
    predetermined = false;

    /**
     * The value of the cell
     * @type {Number}
     */
    value = null;

    /**
     * The background color of the cell
     * @type {String}
     */
    color = '#ffffff';

    /**
     * The pencil mark values (corner mode)
     * @type {Array}
     */
    cornerMarks = [];

    /**
     * The pencil mark values (center mode)
     * @type {Array}
     */
    centerMarks = [];

    /**
     * @param cellNumber
     */
    constructor(cellNumber) {
        this.cellNumber = cellNumber;

        // The HTML cell element
        this.element = document.getElementById(`grid-cell-${cellNumber}`);
        if (this.element === null) {
            throw new Error(`Cell element with ID '${cellId}' not found`);
        }
    }

    /**
     * Give the cell an active state
     * @return {void}
     */
    makeActive() {
        this.element.classList.add('active');
    }

    /**
     * Remove the active state from the cell
     * @return {void}
     */
    makeInactive() {
        this.element.classList.remove('active');
    }

    /**
     * Handle events that happen on/for the cell
     * @return {void}
     */
    registerEventHandlers() {
        this.element.addEventListener('click', () => {
            Sudoku.grid.changeActiveCell(this);
        });
    }
}
