import {extend} from '../functions';
import TogglableCommand from './TogglableCommand';
import OpenModalCommand from './Modal/OpenModalCommand';
import Modal from '../Modal';

extend(PauseGameCommand, TogglableCommand);

export default function PauseGameCommand() {
    const self = this;
    TogglableCommand.call(self);

    /**
     * @inheritDoc
     */
    self.state = false;

    /**
     * @type {HTMLElement}
     * @private
     */
    const _bodyElement = document.getElementById('page-body');

    /**
     * @inheritDoc
     */
    self.execute = state => {
        if (state === true) {
            Sudoku.clock.pause();
            _bodyElement.classList.add('is-paused');

            // Only open the pause modal, if there is no modal open yet
            if (Sudoku.modal.openState() === false) {
                const openModalCommand = new OpenModalCommand('pause-modal');
                openModalCommand.execute();
            }
        } else {
            Sudoku.clock.unpause();
            _bodyElement.classList.remove('is-paused');
        }

        self.state = state;
    };
}
