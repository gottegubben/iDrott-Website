<template>
    <BasicContainer>
        <ContentContainer>
            <!-- For selecting a specific year. -->
            <div class="calendar_select_container">
                <div class="calendar_selector" @click="() => selectedYear -= 1"></div>
                <div class="calendar_selector_value"><h6 class="font_weight_medium">{{ selectedYear }}</h6></div>
                <div class="calendar_selector" @click="() => selectedYear += 1"></div>
            </div>

            <!-- For selecting a specific month of the year specified. -->
            <div class="calendar_select_container">
                <div class="calendar_selector" @click="() => selectedMonth = Math.max(0, (selectedMonth - 1))"></div>
                <div class="calendar_selector_value"><h6 class="font_weight_medium">{{ getMonthString }}</h6></div>
                <div class="calendar_selector" @click="() => selectedMonth = Math.min(11, (selectedMonth + 1))"></div>
            </div>

            <!-- Calendar. -->
            <div class="calendar_container">
                <div class="calendar_header">
                    <div><h6 class="font_weight_medium">W</h6></div>
                    
                    <div v-for="day in getWeekdayString"><h6>{{ day }}</h6></div>
                </div>
            </div>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import { computed, onMounted, onUnmounted, ref } from 'vue';
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';

    const weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const weekdaysCut: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months: string[]   = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const useWeekdaysCut = ref(false);
    const selectedYear = ref(new Date().getFullYear());
    const selectedMonth = ref(new Date().getMonth());

    const getMonthString = computed(() => {
        return months[selectedMonth.value];
    });

    const getWeekdayString = computed(() => {
        return useWeekdaysCut.value ? weekdaysCut : weekdays;
    });

    onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    });

    const handleResize = () => {
        useWeekdaysCut.value = window.innerWidth < 1000;
    };

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
    });
</script>

<style scoped>
    .calendar_select_container {
        width: 100%;
        background-color: var(--primary_color);

        display: grid;
        grid-template-columns: calc(var(--font_h6_size_clamped) * 2.5) 1fr calc(var(--font_h6_size_clamped) * 2.5);
    }

    .calendar_selector {
        background-color: var(--primary_color_1);
        aspect-ratio: 1 / 1;
    }

    .calendar_selector:hover {
        background-color: var(--primary_color_2);
    }

    .calendar_selector_value {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .calendar_select_container > h6 {
        text-align: center;
    }

    .calendar_header {
        width: 100%;
        height: calc(var(--font_h6_size_clamped) * 2.5);
        background-color: var(--primary_color);
        display: grid;
        grid-template-columns: 2em repeat(7, 1fr);
    }

    .calendar_header > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>