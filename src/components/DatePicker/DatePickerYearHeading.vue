<script lang="ts">
import type { CalendarYearHeadingProps } from "../Calendar";
import { CalendarYearHeading } from "../Calendar";

export type DatePickerYearHeadingProps = CalendarYearHeadingProps;
</script>

<script setup lang="ts">
const props = defineProps<CalendarYearHeadingProps>();

// TODO
// defineSlots<CalendarNextSlot>();
</script>

<template>
  <CalendarYearHeading v-slot="slotProps" v-bind="props">
    <slot v-bind="slotProps" />
  </CalendarYearHeading>
</template>
