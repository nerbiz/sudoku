import CloseAllModalsCommand from './Commands/Modal/CloseAllModalsCommand';
import OpenModalCommand from './Commands/Modal/OpenModalCommand';

/**
 * The ID of the modal dialog for pausing the game
 * @type {string}
 * @static
 */
Modal.PAUSE_MODAL_ID = 'pause-modal';

export default function Modal() {
    const self = this;

    /**
     * The modal dialog backdrop
     * @type {HTMLElement}
     * @private
     */
    const _backdropElement = document.getElementById('modal-backdrop');

    /**
     * Indicates whether a modal is currently open
     * @type {boolean}
     * @private
     */
    let _openState = false;

    /**
     * The ID of the currently opened modal
     * @type {string|null}
     * @private
     */
    let _currentModalId = null;

    /**
     * Reusable close command, for all modals
     * @type {CloseAllModalsCommand}
     * @private
     */
    const _closeCommand = new CloseAllModalsCommand();

    /**
     * Initialize the object
     */
    self.init = () => {
        _enableOpening();
        _enableClosing();
    };

    /**
     * Show or hide the modal backdrop
     * @param {boolean} show
     */
    self.showBackdrop = show => {
        const toggleMethod = show ? 'add' : 'remove';
        _backdropElement.classList[toggleMethod]('show');
    };

    /**
     * @param {boolean|null} state
     * @return {boolean}
     */
    self.openState = (state = null) => {
        if (state !== null) {
            _openState = state;
        }

        return _openState;
    };

    /**
     * @param {string|null} modalId
     * @return {string|null}
     */
    self.currentModalId = (modalId = null) => {
        if (modalId !== null) {
            _currentModalId = modalId;
        }

        return _currentModalId;
    };

    /**
     * Close an open modal dialog, if there is any
     * @return {void}
     */
    self.close = () => _closeCommand.execute();

    /**
     * Enable opening of modal dialogs
     * @return {void}
     * @private
     */
    const _enableOpening = () => {
        const openButtons = document.getElementsByClassName('open-modal');

        for (let i = 0; i < openButtons.length; i++) {
            openButtons[i].addEventListener('click', event => {
                // Open the modal dialog
                const modalId = event.target.dataset.modalId;
                const command = new OpenModalCommand(modalId);
                command.execute();
            });
        }
    };

    /**
     * Enable closing of modal dialogs
     * @return {void}
     * @private
     */
    const _enableClosing = () => {
        // Enable close buttons of the modal dialogs
        const closeButtons = document.getElementsByClassName('close-modal');
        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', self.close);
        }

        // Clicking the backdrop also closes modal dialogs
        _backdropElement.addEventListener('click', self.close);
    };
}
