<template>
    <div class="fixed_page_container">
        <slot></slot>
    </div>
</template>

<style>
    .fixed_page_container {
        /* The position of the page container should be fixed! */
        position: fixed;

        /* The page container should not exceed the width limits. */
        max-width: var(--page_container_max_width);
        min-width: var(--page_container_min_width);

        /* But make sure the page container takes up as much space as it can! */
        width: 100%;
    }
</style>