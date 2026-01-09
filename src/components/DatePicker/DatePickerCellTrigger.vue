<script lang="ts">
import type { CalendarCellTriggerProps } from "../Calendar";
import type { CalendarCellTriggerSlot } from "../Calendar/CalendarCellTrigger.vue";
import { CalendarCellTrigger } from "../Calendar";

export type DatePickerCellTriggerProps = CalendarCellTriggerProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerCellTriggerProps>();
defineSlots<CalendarCellTriggerSlot>();
</script>

<template>
  <CalendarCellTrigger v-slot="slotProps" v-bind="props">
    <slot v-bind="slotProps" />
  </CalendarCellTrigger>
</template>
