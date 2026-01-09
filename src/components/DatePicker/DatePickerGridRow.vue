<script lang="ts">
import type { CalendarGridRowProps } from "../Calendar";
import { CalendarGridRow } from "../Calendar";

export type DatePickerGridRowProps = CalendarGridRowProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridRowProps>();
</script>

<template>
  <CalendarGridRow v-bind="props">
    <slot />
  </CalendarGridRow>
</template>
