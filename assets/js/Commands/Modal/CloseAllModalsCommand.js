import {extend} from '../../functions';
import CommandInterface from '../CommandInterface';
import PauseGameCommand from '../PauseGameCommand';

extend(CloseAllModalsCommand, CommandInterface);

/**
 * @constructor
 */
export default function CloseAllModalsCommand() {
    const self = this;
    CommandInterface.call(self);

    /**
     * @type {PauseGameCommand}
     * @private
     */
    const _pauseGameCommand = new PauseGameCommand();

    /**
     * @inheritDoc
     */
    self.execute = () => {
        // Close all the modals
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            modals[i].classList.remove('show');
        }

        _pauseGameCommand.execute(false);
        Sudoku.modal.setCurrentModalId(null);
    };
}
