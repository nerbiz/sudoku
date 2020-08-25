import {extend} from '../../functions';
import PencilMarksInterface from './PencilMarksInterface';
import GridCell from '../GridCell';

extend(CornerMarks, PencilMarksInterface);

/**
 * @inheritDoc
 */
export default function CornerMarks(cell) {
    const self = this;
    PencilMarksInterface.call(self, cell);

    /**
     * @inheritDoc
     */
    self.toggleDigit = digit => {
        // Setting corner marks is disabled when the cell is prefilled
        if (self.cell.isPrefilled() === true) {
            return;
        }

        // Don't set a corner mark, if a value is filled in
        if (self.cell.getValue() !== null) {
            return;
        }

        // Remove if the digit exists, otherwise add it
        const cornerMarks = self.get();
        const existingIndex = cornerMarks.indexOf(digit);
        if (existingIndex > -1) {
            cornerMarks.splice(existingIndex, 1);
        } else {
            // Don't add if the maximum amount is reached
            if (digit !== null && cornerMarks.length < GridCell.MAX_CORNER_MARKS) {
                cornerMarks.push(digit);
            }
        }

        self.setDigits(cornerMarks);
    };

    /**
     * @inheritDoc
     */
    self.setDigits = digits => {
        // Don't set corner marks, if there are too many
        if (digits.length > GridCell.MAX_CORNER_MARKS) {
            return;
        }

        self.digits = digits;
        self.show();
    };

    /**
     * @inheritDoc
     */
    self.show = () => {
        // Clear all corner marks first
        const allElements = self.cell.getElement().getElementsByClassName('corner-mark');
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].innerText = null;
        }

        // Show the corner marks
        self.get()
            // Sort ascending
            .sort((a, b) => a - b)
            .forEach((item, index) => {
                document.getElementById(`corner-mark-${self.cell.getCellNumber()}-${index + 1}`)
                    .innerText = item.toString(10);
            });
    };
}
