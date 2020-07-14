export default function Meta() {
    const self = this;

    /**
     * The page title element
     * @type {HTMLTitleElement}
     */
    const titleElement = document.getElementsByTagName('title')[0];

    /**
     * The name of the application
     * @type {string}
     */
    const appName = titleElement.innerText;

    /**
     * The title input field
     * @type {HTMLInputElement}
     */
    const titleField = document.getElementsByName('puzzle_title')[0];

    /**
     * The description input field
     * @type {HTMLTextAreaElement}
     */
    const descriptionField = document.getElementsByName('puzzle_description')[0];

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
        const titleCallback = () => {
            title = titleField.value.trim();

            // Update the page title
            titleElement.innerText = (title !== '')
                ? `${title} - ${appName}`
                : appName;
        };

        titleField.addEventListener('change', titleCallback);
        titleField.addEventListener('keyup', titleCallback);
        titleField.addEventListener('paste', titleCallback);

        const descriptionCallback = () => description = descriptionField.value;

        descriptionField.addEventListener('change', descriptionCallback);
        descriptionField.addEventListener('keyup', descriptionCallback);
        descriptionField.addEventListener('paste', descriptionCallback);
    };
}
