<?php
if (! isset($modalId, $modalTitle, $modalContent)) {
    throw new Exception('Missing ID, title and/or content for the modal dialog');
}
?>

<section id="<?php echo $modalId; ?>" class="modal">
    <header class="modal-header">
        <h2 class="modal-title">
            <?php echo $modalTitle; ?>
        </h2>

        <a href="#"
           class="close-modal click-prevent"
           data-modal-id="<?php echo $modalId; ?>"
        >
            Close
        </a>
    </header>

    <article class="modal-content">
        <p>(The clock is paused)</p>

        <?php echo $modalContent; ?>
    </article>
</section>
