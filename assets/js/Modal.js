import CloseModalCommand from './Commands/CloseModalCommand';
import OpenModalCommand from './Commands/OpenModalCommand';

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
        const closeButtons = document.getElementsByClassName('close-modal');

        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', event => {
                // Close the modal dialog
                const modalId = event.target.dataset.modalId;
                const command = new CloseModalCommand(modalId);
                command.execute();
            });
        }
    };
}
