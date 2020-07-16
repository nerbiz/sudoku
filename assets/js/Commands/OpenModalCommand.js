import {extend} from '../functions';
import Command from './Command';

extend(OpenModalCommand, Command);

/**
 * @param {string} modalId ID of the modal dialog to open
 * @constructor
 */
export default function OpenModalCommand(modalId) {
    const self = this;
    Command.call(self);

    /**
     * The modal dialog to show
     * @type {HTMLElement}
     * @private
     */
    const _modalElement = document.getElementById(modalId);

    /**
     * @inheritDoc
     */
    self.execute = () => {
        Sudoku.clock.pause();

        Sudoku.modal.setOpenState(true);
        Sudoku.modal.showBackdrop(true);
        _modalElement.classList.add('show');
    };
}