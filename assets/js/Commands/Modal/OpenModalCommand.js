import {extend} from '../../functions';
import CommandInterface from '../CommandInterface';
import PauseGameCommand from '../PauseGameCommand';

extend(OpenModalCommand, CommandInterface);

/**
 * @param {string} modalId ID of the modal dialog to open
 * @constructor
 */
export default function OpenModalCommand(modalId) {
    const self = this;
    CommandInterface.call(self);

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
