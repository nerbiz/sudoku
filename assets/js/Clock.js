export default function Clock() {
    const self = this;

    /**
     * The initial amount of elapsed milliseconds
     * Useful to keep track of previously elapsed time, when unpausing
     * @type {number}
     * @private
     */
    let _initialMs = 0;

    /**
     * The start moment of the timer
     * @type {Date|null}
     * @private
     */
    let _startMoment = null;

    /**
     * The element that shows the elapsed time
     * @type {HTMLElement}
     * @private
     */
    const _timeElement = document.getElementById('elapsed-time');

    /**
     * The interval for showing the time on screen
     * @type {number|null}
     * @private
     */
    let _timeInterval = null;

    /**
     * Indicates whether the clock is paused
     * @type {boolean}
     * @private
     */
    let _paused = false;

    /**
     * Initialize the object
     * @return {void}
     */
    self.init = () => {
        self.start();
        self.showTime();
    };

    /**
     * Set the start/unpause moment for calculating elapsed time
     * @return {void}
     */
    self.start = self.unpause = () => {
        _startMoment = new Date();
        _paused = false;
    };

    /**
     * Pause the timer
     * @return {void}
     */
    self.pause = () => {
        // Keep the elapsed milliseconds, for use with unpausing
        _initialMs += self.getElapsedMsSinceStart();
        _startMoment = null;
        _paused = true;
    };

    /**
     * @return {boolean}
     */
    self.isPaused = () => _paused;

    /**
     * Get the elapsed milliseconds, since the start moment
     * @return {number}
     */
    self.getElapsedMsSinceStart = () => {
        return (_startMoment !== null)
            ? (new Date()).getTime() - _startMoment.getTime()
            : 0;
    };

    /**
     * Get the amount of elapsed milliseconds, since the timer started
     * @return {number}
     */
    self.getTotalElapsedMs = () => _initialMs + self.getElapsedMsSinceStart();

    /**
     * Get a string representation ('0:00') of elapsed time
     * Uses '0:00:00' format if there is at least 1 hour
     * @return {string}
     */
    self.getElapsedTimeString = () => {
        const totalSeconds = Math.floor(self.getTotalElapsedMs() / 1000);

        // Calculate hours, minutes and seconds
        const hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        // Seconds need a leading zero
        const seconds = (totalSeconds % 60).toString(10).padStart(2, '0');

        // Minutes only need a leading zero if there is at least 1 hour
        if (hours > 0) {
            minutes = minutes.toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        return `${minutes}:${seconds}`;
    };

    /**
     * Decide whether to show the elapsed time on screen
     * @param {boolean} show
     * @return {void}
     */
    self.showTime = (show = true) => {
        if (show) {
            _timeInterval = setInterval(() => {
                _timeElement.innerText = self.getElapsedTimeString();
            }, 1000);
        } else {
            clearInterval(_timeInterval);
        }
    };
}
