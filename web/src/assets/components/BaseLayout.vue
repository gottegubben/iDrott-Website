<template>
    <div class="base-layout">
        <slot></slot>
    </div>
</template>

<style>
    .base-layout {
        display: flex;
        
        align-items: center;
        box-sizing: border-box;

        width: calc(100% - 2 * var(--dynamic_margin));
        margin-left: var(--dynamic_margin);
        margin-right: var(--dynamic_margin);
    }
</style>

<script setup lang="ts">

</script>