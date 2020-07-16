import {extend} from '../functions';
import Command from './Command';

extend(CloseModalCommand, Command);

/**
 * @param modalId ID of the modal dialog to close
 * @constructor
 */
export default function CloseModalCommand(modalId) {
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
        Sudoku.clock.unpause();

        Sudoku.modal.showBackdrop(false);
        _modalElement.classList.remove('show');
        Sudoku.modal.setOpenState(false);
    };
}
