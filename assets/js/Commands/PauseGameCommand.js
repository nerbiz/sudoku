import {extend} from '../functions';
import TogglableCommandInterface from './TogglableCommandInterface';
import OpenModalCommand from './Modal/OpenModalCommand';
import Modal from '../Modal';

extend(PauseGameCommand, TogglableCommandInterface);

export default function PauseGameCommand() {
    const self = this;
    TogglableCommandInterface.call(self);

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
        const pauseIcon = document.getElementById('game-pause-icon');
        const resumeIcon = document.getElementById('game-resume-icon');

        if (state === true) {
            Sudoku.clock.pause();
            _bodyElement.classList.add('is-paused');

            // Toggle the pause/resume icons
            pauseIcon.classList.add('hide');
            resumeIcon.classList.remove('hide');

            // Only open the pause modal, if there is no modal open yet
            if (Sudoku.modal.openState() === false) {
                const openModalCommand = new OpenModalCommand('pause-modal');
                openModalCommand.execute();
            }
        } else {
            Sudoku.clock.unpause();
            _bodyElement.classList.remove('is-paused');

            // Toggle the pause/resume icons
            pauseIcon.classList.remove('hide');
            resumeIcon.classList.add('hide');
        }

        self.state = state;
    };
}
