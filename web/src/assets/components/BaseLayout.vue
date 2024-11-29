<!--
    The base layout component will contain content
    that should have a uniformed margin applied to it.
-->

<template>
    <div class="base-layout">
        <slot></slot>
    </div>
</template>

<style>
    .base-layout {
        display: flex;
        flex-direction: column;
        
        box-sizing: border-box;

        width: calc(100% - 2 * var(--dynamic_margin));
        margin-left: var(--dynamic_margin);
        margin-right: var(--dynamic_margin);
        height: inherit;
    }
</style>

<script setup lang="ts">

</script>