export default function Meta() {
    const self = this;

    /**
     * The name of the application
     * @type {string}
     */
    const appName = document.getElementById('meta-app-name').getAttribute('content');

    /**
     * The page title element
     * @type {HTMLCollectionOf<HTMLElement>}
     */
    const titleElements = document.getElementsByClassName('page-title');

    /**
     * The title input field
     * @type {HTMLInputElement}
     */
    const titleField = document.getElementById('puzzle-title');

    /**
     * The description input field
     * @type {HTMLTextAreaElement}
     */
    const descriptionField = document.getElementById('puzzle-description');

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
            const pageTitle = (title !== '')
                ? `${title} - ${appName}`
                : appName;

            for (let i = 0; i < titleElements.length; i++) {
                titleElements[i].innerText = pageTitle;
            }
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
