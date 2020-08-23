<header id="top-bar">
    <div id="clock-wrapper">
        <a href="#" id="toggle-pause-button" class="link-icon click-prevent">
            <i id="game-pause-icon" class="fas fa-pause-circle"></i>
            <i id="game-resume-icon" class="hide fas fa-play-circle"></i>
        </a><span id="elapsed-time">0:00</span>
    </div>

    <h1 class="page-title" id="top-bar-title">
        <?php echo getenv('APP_NAME'); ?>
    </h1>

    <nav id="top-bar-menu">
        <ul>
            <li>
                <a href="#"
                   id="check-errors"
                   class="click-prevent"
                ><i class="link-icon fas fa-check"></i>Check for errors</a>
            </li>

            <li>
                <a href="#"
                   class="click-prevent open-modal"
                   data-modal-id="settings-modal"
                ><i class="link-icon fas fa-cog"></i>Settings</a>
            </li>

            <li>
                <a href="#"
                   class="click-prevent open-modal"
                   data-modal-id="controls-modal"
                ><i class="link-icon fas fa-info-circle"></i>Controls</a>
            </li>
        </ul>
    </nav>
</header>
