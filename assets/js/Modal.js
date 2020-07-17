import CloseModalCommand from './Commands/Modal/CloseModalCommand';
import OpenModalCommand from './Commands/Modal/OpenModalCommand';

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
    let _isOpen = false;

    /**
     * Reusable close command, for all modals
     * @type {CloseModalCommand}
     * @private
     */
    const _closeCommand = new CloseModalCommand();

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
     * @return {boolean}
     */
    self.isOpen = () => _isOpen;

    /**
     * @param {boolean} open
     * @return {boolean}
     */
    self.setOpenState = open => _isOpen = open;

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
