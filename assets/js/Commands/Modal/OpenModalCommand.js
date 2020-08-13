import {extend} from '../../functions';
import Command from '../Command';
import PauseGameCommand from '../PauseGameCommand';
import Modal from '../../Modal';

extend(OpenModalCommand, Command);

/**
 * @param {string} modalId ID of the modal dialog to open
 * @constructor
 */
export default function OpenModalCommand(modalId) {
    const self = this;
    Command.call(self);

    /**
     * @type {string}
     * @private
     */
    const _modalId = modalId;

    /**
     * The modal dialog to show
     * @type {HTMLElement}
     * @private
     */
    const _modalElement = document.getElementById(_modalId);

    /**
     * @inheritDoc
     */
    self.execute = () => {
        Sudoku.modal.setCurrentModalId(_modalId);
        _modalElement.classList.add('show');

        (new PauseGameCommand()).execute(true);
    };
}
