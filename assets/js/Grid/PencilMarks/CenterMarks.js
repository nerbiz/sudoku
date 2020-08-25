import {extend} from '../../functions';
import PencilMarksInterface from './PencilMarksInterface';
import GridCell from '../GridCell';

extend(CenterMarks, PencilMarksInterface);

/**
 * @inheritDoc
 */
export default function CenterMarks(cell) {
    const self = this;
    PencilMarksInterface.call(self, cell);

    /**
     * Automatically filled in candidates
     * @type {number[]}
     * @private
     */
    let _autoCandidates = [];

    /**
     * @return {number[]}
     */
    self.getAutoCandidates = () => _autoCandidates;

    /**
     * @inheritDoc
     */
    self.toggleDigit = digit => {
        // Setting center marks is disabled when the cell is prefilled,
        // or when auto-candidate mode is on
        if (
            self.cell.isPrefilled() === true
            || Sudoku.settings.autoCandidateModeState() === true
        ) {
            return;
        }

        // Don't set a center mark, if a value is filled in
        if (self.cell.getValue() !== null) {
            return;
        }

        // Remove if the digit exists, otherwise add it
        const centerMarks = self.get();
        const existingIndex = centerMarks.indexOf(digit);
        if (existingIndex > -1) {
            centerMarks.splice(existingIndex, 1);
        } else {
            // Don't add if the maximum amount is reached
            if (digit !== null && centerMarks.length < GridCell.MAX_CENTER_MARKS) {
                centerMarks.push(digit);
            }
        }

        self.setDigits(centerMarks);
    };

    /**
     * @inheritDoc
     * @param {boolean} useAutoCandidates Whether to use auto-candidates, or normal center marks
     */
    self.setDigits = (digits, useAutoCandidates = false) => {
        // Empty the candidates, if there are too many
        if (useAutoCandidates === true && digits.length > GridCell.MAX_CENTER_MARKS) {
            digits = [];
        }

        // Don't set pencil marks, if there are too many
        if (digits.length > GridCell.MAX_CENTER_MARKS) {
            return;
        }

        (useAutoCandidates === true)
            ? _autoCandidates = digits
            : self.digits = digits;

        self.show(useAutoCandidates);
    };

    /**
     * @inheritDoc
     */
    self.has = digit => {
        const centerMarks = (Sudoku.settings.autoCandidateModeState() === true)
            ? self.getAutoCandidates()
            : self.get();

        return (centerMarks.indexOf(digit) > -1);
    };

    /**
     * @inheritDoc
     * @param {boolean} useAutoCandidates Whether to use auto-candidates, or normal center marks
     */
    self.show = (useAutoCandidates = false) => {
        let centerMarks = (useAutoCandidates === true)
            ? self.getAutoCandidates()
            : self.get();

        centerMarks = centerMarks
            // Sort ascending
            .sort((a, b) => a - b)
            // Concatenate the numbers
            .join('');

        // Show the pencil marks
        self.cell.getElement()
            .getElementsByClassName('center-marks')[0]
            .innerText = centerMarks;
    };
}
