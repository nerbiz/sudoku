import {extend} from '../../functions';
import TogglableCommand from '../TogglableCommand';
import OpenModalCommand from '../Modal/OpenModalCommand';
import Modal from '../../Modal';

extend(PauseGameCommand, TogglableCommand);

export default function PauseGameCommand() {
    const self = this;
    TogglableCommand.call(self);

    /**
     * @inheritDoc
     */
    self.state = () => false;

    /**
     * @inheritDoc
     */
    self.execute = state => {
        if (state === true) {
            Sudoku.clock.pause();

            const openModalCommand = new OpenModalCommand(Modal.PAUSE_MODAL_ID);
            openModalCommand.execute();
        } else {
            // Prevent recursive calls
            if (Sudoku.modal.currentModalId() !== Modal.PAUSE_MODAL_ID) {
                Sudoku.modal.close();
            }

            Sudoku.clock.unpause();
        }

        self.state = state;
    };
}
