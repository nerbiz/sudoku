export default function Meta() {
    const self = this;

    /**
     * The title input field
     * @type {HTMLElement}
     */
    const titleField = document.getElementsByName('title')[0];

    /**
     * The description input field
     * @type {HTMLElement}
     */
    const descriptionField = document.getElementsByName('description')[0];

    /**
     * An optional title for the sudoku
     * @type {string|null}
     */
    let title = null;

    /**
     * An optional description for the sudoku
     * @type {string|null}
     */
    let description = null;

    /**
     * Initialize the object
     */
    self.init = () => {
        enableTextFields();
    };

    /**
     * @return {void}
     */
    const enableTextFields = () => {
        const titleCallback = () => title = titleField.value;
        titleField.addEventListener('change', titleCallback);
        titleField.addEventListener('keyup', titleCallback);
        titleField.addEventListener('paste', titleCallback);

        const descriptionCallback = () => description = descriptionField.value;
        descriptionField.addEventListener('change', descriptionCallback);
        descriptionField.addEventListener('keyup', descriptionCallback);
        descriptionField.addEventListener('paste', descriptionCallback);
    };

    self.debug = () => {
        console.log(title, description);
    }
}
