import GridCell from '../GridCell';

/**
 * @param {GridCell} cell
 * @constructor
 */
export default function PencilMarksInterface(cell) {
    const self = this;

    /**
     * The cell to apply pencil marks to
     * @type {GridCell}
     */
    self.cell = cell;

    /**
     * The pencil mark digits
     * @type {number[]}
     */
    self.digits = [];

    /**
     * @return {number[]}
     */
    self.get = () => self.digits;

    /**
     * Add or remove one 1 digit
     * @param {number} digit
     * @return {void}
     */
    self.toggleDigit = digit => {
        throw new Error("'toggleDigit' method is not implemented in the pencil marks object");
    };

    /**
     * Replace all digits
     * @param {number[]} digits
     * @return {void}
     */
    self.setDigits = digits => {
        throw new Error("'setDigits' method is not implemented in the pencil marks object");
    };

    /**
     * See if a pencil mark exists
     * @param {number} digit
     * @return {boolean}
     */
    self.has = digit => (self.get().indexOf(digit) > -1);

    /**
     * See if any pencil marks exist
     * @return {boolean}
     */
    self.hasAny = () => (self.get().length > 0);

    /**
     * Show the pencil marks in the cell
     * @return {void}
     */
    self.show = () => {
        throw new Error("'show' method is not implemented in the pencil marks object");
    };
}
