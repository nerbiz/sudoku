<header id="top-bar">
    <div id="clock-wrapper">
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
