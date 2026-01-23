<script setup lang="ts">
import { CalendarMonthYearOverlay, type CalendarMonthYearOverlayProps } from "../Calendar";

export type DatePickerMonthYearOverlayProps = CalendarMonthYearOverlayProps 

const props = defineProps<DatePickerMonthYearOverlayProps>();
</script> 

<template>
  <CalendarMonthYearOverlay v-bind="props" v-slot="{ months, years }">
    <slot :months="months" :years="years" />
  </CalendarMonthYearOverlay>
</template>
