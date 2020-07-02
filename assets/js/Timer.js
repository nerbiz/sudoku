export default function Timer() {
    const self = this;

    /**
     * The initial amount of elapsed milliseconds
     * Useful to keep track of previously elapsed time, when unpausing
     * @type {number}
     */
    self.initialMs = 0;

    /**
     * The start moment of the timer
     * @type {Date|null}
     */
    self.startMoment = null;

    /**
     * Set the start/unpause moment for calculating elapsed time
     * @return {Date}
     */
    self.start = self.unpause = () => self.startMoment = new Date();

    /**
     * Pause the timer
     * @return {void}
     */
    self.pause = () => {
        // Keep the elapsed milliseconds, for use with unpausing
        self.initialMs += self.getElapsedMsSinceStart();
        self.startMoment = null;
    };

    /**
     * Get the elapsed milliseconds, since the start moment
     * @return {number}
     */
    self.getElapsedMsSinceStart = () => {
        return (self.startMoment !== null)
            ? (new Date()).getTime() - self.startMoment.getTime()
            : 0;
    };

    /**
     * Get the amount of elapsed milliseconds, since the timer started
     * @return {number}
     */
    self.getTotalElapsedMs = () => self.initialMs + self.getElapsedMsSinceStart();

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
}
