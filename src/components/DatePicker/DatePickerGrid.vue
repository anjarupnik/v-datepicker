<script lang="ts">
import type { CalendarGridProps } from "../Calendar";
import { CalendarGrid } from "../Calendar";

export type DatePickerGridProps = CalendarGridProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridProps>();
</script>

<template>
  <CalendarGrid v-bind="props">
    <slot />
  </CalendarGrid>
</template>
