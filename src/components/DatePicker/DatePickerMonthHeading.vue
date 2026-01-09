<script lang="ts">
import type { CalendarMonthHeadingProps } from "../Calendar";
import { CalendarMonthHeading } from "../Calendar";

export type DatePickerMonthHeadingProps = CalendarMonthHeadingProps;
</script>

<script setup lang="ts">
const props = defineProps<CalendarMonthHeadingProps>();

// TODO
// defineSlots<CalendarNextSlot>();
</script>

<template>
  <CalendarMonthHeading v-slot="slotProps" v-bind="props">
    <slot v-bind="slotProps" />
  </CalendarMonthHeading>
</template>
