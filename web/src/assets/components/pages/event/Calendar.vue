<template>
    <div class="calendar">
        <CalendarIcon class="calendar_icon"></CalendarIcon>
        <h3 class="font_color_primary font_weight_bold">Calendar</h3>
    </div>

    <div class="calendar_container">
        <div class="calendar_settings">
            <h5>{{ getMonthPicked }}</h5>
            <h6>{{ getYearPicked }}</h6>
            <select name="" id="" v-model="calendarModePicked">
                <option :value="CalendarMode.Month">Month</option>
                <option :value="CalendarMode.Week">Week</option>
                <option :value="CalendarMode.ThreeDay">3 Days</option>
            </select>
            <input type="date" @input="updateDatePicked($event)">
        </div>
        
        <div class="calendar_header" :style="calendarGridLayout">
            <div v-for="i in columns">
                <p>{{ getHeaderTitle(i) }}</p>
            </div>
        </div>

        <div class="calendar_display" :style="calendarGridLayout">
            <div v-for="i in getHowManyEmptyDays"></div> <!-- Empty dates! -->
            <CalendarDay :date="day" v-for="day in days"></CalendarDay>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';
    import CalendarIcon from '../../icons/CalendarIcon.vue';
    import CalendarDay from './CalendarDay.vue';

    enum CalendarMode {
        Month = 3,
        Week = 2,
        ThreeDay = 1
    };

    const screenWidth = ref(window.innerWidth);

    const onScreenResize = () => {
        screenWidth.value = window.innerWidth;

        if (screenWidth.value <= 840) {
            if (calendarMode.value > 1) calendarMode.value = CalendarMode.ThreeDay;
        }
        else if (screenWidth.value <= 1280) {
            if (calendarMode.value > 2) calendarMode.value = CalendarMode.Week;
        }
    };

    onScreenResize(); // Call once!

    window.addEventListener('resize', onScreenResize);

    const calendarMode = ref(CalendarMode.Month);

    const calendarModePicked = ref<CalendarMode>();

    const columns = ref(0);

    const getAllDaysInMonth = (year: number, month: number): Date[] => {
        const daysTemp: Date[] = [];
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the month

        for (let day = 1; day <= daysInMonth; day++) {
            daysTemp.push(new Date(year, month, day));
        }

        return daysTemp;
    }

    const datePicked = ref(new Date());

    const days = ref<Date[]>(getAllDaysInMonth(datePicked.value.getFullYear(), datePicked.value.getMonth()));

    const updateDatePicked = (event: Event) => {
        const target = event.target as HTMLInputElement;
        datePicked.value = new Date(target.value);
        days.value = getAllDaysInMonth(datePicked.value.getFullYear(), datePicked.value.getMonth());
    };

    const getMonthPicked = computed(() => {
        return months[datePicked.value.getMonth()];
    });

    const getYearPicked = computed(() => {
        return datePicked.value.getFullYear();
    });

    const getHowManyEmptyDays = computed(() => {
        return new Date(datePicked.value.getFullYear(), datePicked.value.getMonth(), 1).getDay();
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const getHeaderTitle = (order: number) => {
        if (calendarMode.value == CalendarMode.Month || calendarMode.value == CalendarMode.Week) {
            return weekdays[order - 1];
        }
        else if (calendarMode.value == CalendarMode.ThreeDay) {
            return "";
        }
        return "ERROR";
    };

    const calendarGridLayout = computed(() => {
        if (calendarMode.value == CalendarMode.Month || calendarMode.value == CalendarMode.Week) columns.value = 7;
        else if (calendarMode.value == CalendarMode.ThreeDay) columns.value = 3;
        else columns.value = 1;

        return {
            'grid-template-columns': `repeat(${columns.value}, 1fr)`
        };
    });

    const events: IEventViewModel[] = [
        {
            title: "Volleyball",
            description: "Join us for a great night with volleyball and fun activities.",
            startDate: new Date("2025-01-19T15:00"),
            endDate: new Date("2025-01-19T20:00"),
            imgUrl: "https://picsum.photos/450/300"
        },
        {
            title: "Dodgeball",
            description: "Never tried dodgeball before? Well give it a go!",
            startDate: new Date("2025-01-23T20:15"),
            endDate: new Date("2025-01-23T22:00"),
            imgUrl: "https://picsum.photos/450/300"
        },
        {
            title: "Pub quiz",
            description: "Come with us to the Data pub and participate in an exciting sports quiz.",
            startDate: new Date("2025-01-29T21:00"),
            endDate: new Date("2025-01-29T23:00"),
            imgUrl: "https://picsum.photos/450/300"
        }
    ];
</script>

<style>
    :root {
        --calendar_header_height: 50px;
        --calendar_header_color: var(--primary_color);
        --calendar_day_gap: var(--space_xs_clamped);
    }

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
    
    .calendar_settings {
        display: flex;
    }

    .calendar_settings > h6, .calendar_settings > h5 {
        color: red;
    }

    .calendar_display {
        display: grid;
        gap: var(--calendar_day_gap);
    }

    .calendar_header {
        display: grid;
    }

    .calendar_header > div {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--calendar_header_color);

        padding: var(--space_xs_clamped);
        margin-bottom: var(--calendar_day_gap);
    }
</style>