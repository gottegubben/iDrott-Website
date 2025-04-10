<template>
    <div class="page_container">
        <slot></slot>
    </div>
</template>

<style>
    :root {
        --page_container_max_width: 1920px;
        --page_container_min_width: 340px;
        --page_canvas_color: var(--secondary_color);
    }

    .page_container {
        /* The page container should not exceed the width limits. */
        max-width: var(--page_container_max_width);
        min-width: var(--page_container_min_width);

        /* But make sure the page container takes up as much space as it can! */
        width: 100%;

        /* Make sure the canvas stretches the whole page to begin with! */
        min-height: 100vh;

        /* Background of the canvas! */
        background-color: var(--page_canvas_color);
    }
</style>