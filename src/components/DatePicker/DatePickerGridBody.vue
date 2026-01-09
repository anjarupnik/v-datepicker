<script lang="ts">
import type { CalendarGridBodyProps } from "../Calendar";
import { CalendarGridBody } from "../Calendar";

export type DatePickerGridBodyProps = CalendarGridBodyProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridBodyProps>();
</script>

<template>
  <CalendarGridBody v-bind="props">
    <slot />
  </CalendarGridBody>
</template>
