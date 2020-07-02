import {trait} from '../functions';
import HasGridCells from '../Traits/HasGridCells';

/**
 * @param {number} rowNumber
 * @constructor
 */
export default function GridRow(rowNumber) {
    const self = this;
    trait(self, HasGridCells);

    /**
     * The 1-based row number in the grid
     * @type {number}
     */
    self.rowNumber = rowNumber;

    /**
     * Get the cell numbers that self row has
     * @return {Array}
     */
    self.getCellNumbers = () => {
        const numbers = [];

        for (let i = 1; i < 10; i++) {
            numbers.push(i + ((self.rowNumber - 1) * 9));
        }

        return numbers;
    };
}
