import {extend} from '../../functions';
import Command from '../Command';
import PauseGameCommand from '../Settings/PauseGameCommand';

extend(CloseAllModalsCommand, Command);

/**
 * @constructor
 */
export default function CloseAllModalsCommand() {
    const self = this;
    Command.call(self);

    /**
     * @type {PauseGameCommand}
     * @private
     */
    const _pauseGameCommand = new PauseGameCommand();

    /**
     * @inheritDoc
     */
    self.execute = () => {
        _pauseGameCommand.execute(false);

        Sudoku.modal.showBackdrop(false);

        // Close all the modals
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('show');
        }

        Sudoku.modal.setOpenState(false);
    };
}
