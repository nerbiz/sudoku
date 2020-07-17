import {extend} from '../../functions';
import Command from '../Command';

extend(CloseModalCommand, Command);

/**
 * @constructor
 */
export default function CloseModalCommand() {
    const self = this;
    Command.call(self);

    /**
     * @inheritDoc
     */
    self.execute = () => {
        Sudoku.clock.unpause();

        Sudoku.modal.showBackdrop(false);

        // Close all the modals
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('show');
        }

        Sudoku.modal.setOpenState(false);
    };
}
