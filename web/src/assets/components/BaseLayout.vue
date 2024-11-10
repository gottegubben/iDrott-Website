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
        width: calc(100% - 2 * clamp(10px, 5%, 100px));
        height: 200px;
        background-color: black;
        margin-left: clamp(10px, 5%, 100px);
        margin-right: clamp(10px, 5%, 100px);
    }
</style>