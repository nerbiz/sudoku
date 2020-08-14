<header id="top-bar">
    <div id="clock-wrapper">
        <a href="#" id="toggle-pause-button" class="click-prevent">
            <i id="game-pause-icon" class="fas fa-pause-circle"></i>
            <i id="game-resume-icon" class="hide fas fa-play-circle"></i>
        </a>
        <span id="elapsed-time">0:00</span>
    </div>

    <h1 class="page-title" id="top-bar-title">
        <?php echo getenv('APP_NAME'); ?>
    </h1>

    <nav id="top-bar-menu">
        <ul>
            <li>
                <a href="#" id="check-errors" class="click-prevent">Check for errors</a>
            </li>

            <li>
                <a href="#"
                   class="click-prevent open-modal"
                   data-modal-id="settings-modal"
                >Settings</a>
            </li>

            <li>
                <a href="#"
                   class="click-prevent open-modal"
                   data-modal-id="controls-modal"
                >Controls</a>
            </li>
        </ul>
    </nav>
</header>
