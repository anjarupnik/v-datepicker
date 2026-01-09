<script lang="ts">
import type { CalendarHeadCellProps } from "../Calendar";
import { CalendarHeadCell } from "../Calendar";

export type DatePickerHeadCellProps = CalendarHeadCellProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeadCellProps>();
</script>

<template>
  <CalendarHeadCell v-bind="props">
    <slot />
  </CalendarHeadCell>
</template>
