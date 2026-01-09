<script lang="ts">
import type { CalendarNextProps } from "../Calendar";
import type { CalendarNextSlot } from "../Calendar/CalendarNext.vue";
import { CalendarNext } from "../Calendar";

export type DatePickerNextProps = CalendarNextProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerNextProps>();

defineSlots<CalendarNextSlot>();
</script>

<template>
  <CalendarNext v-slot="slotProps" v-bind="props">
    <slot v-bind="slotProps" />
  </CalendarNext>
</template>
