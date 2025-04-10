<template>
    <label class="hamburger_menu" @click.stop>
        <input type="checkbox" @click.stop>
    </label>
</template>

<style>
    :root {
        --hamburger_menu_bar_width: 2rem;
        --hamburger_menu_bar_height: 5px;
        --hamburger_menu_gap: 6px;
        --hamburger_menu_color: white;

        --hamburger_menu_height: calc(var(--hamburger_menu_bar_height) * 3 + var(--hamburger_menu_gap) * 2);
    }

    .hamburger_menu {
        margin-left: auto;

        --x_width: calc(var(--hamburger_menu_height) * 1.41421356237);

        display: flex;
        flex-direction: column;
        gap: var(--hamburger_menu_gap);

        width: max-content;
    }

    .hamburger_menu::before,
    .hamburger_menu::after,
    .hamburger_menu input {
        content: "";
        width: var(--hamburger_menu_bar_width);
        height: var(--hamburger_menu_bar_height);
        background-color: var(--hamburger_menu_color);

        transform-origin: right center;

        border-radius: 99999px;

        transition: opacity var(--animation_fast), width var(--animation_fast), rotate var(--animation_fast), translate var(--animation_fast);
    }

    .hamburger_menu input {
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger_menu input:checked {
        opacity: 0;
        width: 0;
    }

    .hamburger_menu:has(input:checked)::before {
        rotate: -45deg;
        width: var(--x_width);
        translate: 0 calc(var(--hamburger_menu_bar_height) / -2);
    }

    .hamburger_menu:has(input:checked)::after {
        rotate: 45deg;
        width: var(--x_width);
        translate: 0 calc(var(--hamburger_menu_bar_height) / 2);
    }
</style>