<script lang="ts">
import type { CalendarCellProps } from "../Calendar";
import { CalendarCell } from "../Calendar";

export type DatePickerCellProps = CalendarCellProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerCellProps>();
</script>

<template>
  <CalendarCell v-bind="props">
    <slot />
  </CalendarCell>
</template>
