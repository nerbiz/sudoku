import {trait} from '../functions';
import HasGridCells from '../Traits/HasGridCells';

/**
 * @param {number} boxNumber
 * @constructor
 */
export default function GridBox(boxNumber) {
    const self = this;
    trait(self, HasGridCells);

    /**
     * The 1-based box number in the grid
     * @type {number}
     * @private
     */
    let _boxNumber = boxNumber;

    /**
     * Get the cell numbers that self box has
     * @return {Array}
     */
    self.getCellNumbers = () => {
        const boxIndex = _boxNumber - 1;
        // The row index of the box (0, 1 or 2)
        const boxRowIndex = Math.floor(boxIndex / 3);

        // Determine the top-left number of the 3x3 box
        let topLeftNumber = boxIndex * 3;
        topLeftNumber += boxRowIndex * 18;
        // Make the number 1-based
        topLeftNumber++;

        // Get cell numbers,
        // based on the top-left number in the box
        const numbers = [];
        for (let i = 0; i < 3; i++) {
            numbers.push(topLeftNumber);
            numbers.push(++topLeftNumber);
            numbers.push(++topLeftNumber);
            topLeftNumber += 7;
        }

        return numbers;
    };
}
