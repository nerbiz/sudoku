export default function Game() {
    const self = this;

    /**
     * Indicates whether the game is paused
     * @type {boolean}
     * @private
     */
    let _isPaused = false;

    /**
     * @return {boolean}
     */
    self.isPaused = () => _isPaused;

    /**
     * @param {boolean} state
     * @return {boolean}
     */
    self.setPausedState = state => _isPaused = state;
}
