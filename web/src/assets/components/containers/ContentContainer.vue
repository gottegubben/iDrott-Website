<template>
    <div class="content_container">
        <slot></slot>
    </div>
</template>

<style>
    :root {
        --content_container_margin: var(--dynamic_margin);
    }

    .content_container {
        /* Fill up as much space as possible, but don't forget the margin! */
        width: calc(100% - (2 * var(--content_container_margin)));
        margin: auto var(--content_container_margin);
    }
</style>