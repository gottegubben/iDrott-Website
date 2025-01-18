<template>
    <div class="calendar">
        <CalendarIcon class="calendar_icon"></CalendarIcon>
        <h3 class="font_color_primary font_weight_bold">Calendar</h3>
    </div>

    <div class="calendar_container">
        <div class="calendar_info">
            <h4 class="font_weight_bold font_color_tertiary">Jan</h4>
            <h6 class="font_color_primary">2024</h6>
            <select name="" id="">
                <option value="month">Month</option>
                <option value="3_days">3 Days</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CalendarIcon from '../../icons/CalendarIcon.vue';
</script>

<style>
    .calendar {
        display: flex;
        margin-top: var(--space_xxl_clamped);
        align-items: center;
        gap: var(--space_md_clamped);
    }

    .calendar_icon {
        fill: var(--primary_color);
        stroke: var(--primary_color);
        height: var(--font_h4_size_clamped);
        width: var(--font_h4_size_clamped);
    }

    .calendar_container {
        margin-top: var(--space_md_clamped);
    }

    .calendar_info {
        display: flex;
        align-items: baseline;
    }
</style>