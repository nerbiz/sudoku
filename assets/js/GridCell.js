export default class {
    /**
     * @param cellId The ID of the HTML cell element
     */
    constructor(cellId) {
        // The HTML cell element
        this.element = document.getElementById(cellId);
        if (this.element === null) {
            throw new Error(`Cell element with ID '${cellId}' not found`);
        }

        // Whether the cell value is set at the start
        this.predetermined = false;

        // The value of the cell
        this.value = null;

        // The background color of the cell
        this.color = '#ffffff';

        // The pencil mark values
        this.cornerMarks = [];
        this.centerMarks = [];
    }
}
