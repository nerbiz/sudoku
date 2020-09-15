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
     * The notes input field
     * @type {HTMLTextAreaElement}
     */
    const notesField = document.getElementById('puzzle-notes');

    /**
     * An optional title for the sudoku
     * @type {string|null}
     */
    let title = null;

    /**
     * An optional notes for the sudoku
     * @type {string|null}
     */
    let notes = null;

    /**
     * Initialize the object
     */
    self.init = () => {
        _enableTextFields();
    };

    /**
     * @return {void}
     * @private
     */
    const _enableTextFields = () => {
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

        const notesCallback = () => notes = notesField.value;

        notesField.addEventListener('change', notesCallback);
        notesField.addEventListener('keyup', notesCallback);
        notesField.addEventListener('paste', notesCallback);
    };
}
