import {trait} from '../functions';
import HasGridCells from '../Traits/HasGridCells';

/**
 * @param {number} columnNumber
 * @constructor
 */
export default function(columnNumber) {
    const self = this;
    trait(self, HasGridCells);

    /**
     * The 1-based row number in the grid
     * @type {number}
     */
    self.columnNumber = columnNumber;

    /**
     * Get the cell numbers that self column has
     * @return {Array}
     */
    self.getCellNumbers = () => {
        const numbers = [];
        let number = self.columnNumber;

        // Add the first cell number
        numbers.push(number);

        // Add 9 to the number 8 times
        for (let j = 0; j < 8; j++) {
            number += 9;
            numbers.push(number);
        }

        return numbers;
    };
}
