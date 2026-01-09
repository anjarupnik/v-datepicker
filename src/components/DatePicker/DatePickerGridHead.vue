<script lang="ts">
import type { CalendarGridHeadProps } from "../Calendar";
import { CalendarGridHead } from "../Calendar";

export type DatePickerGridHeadProps = CalendarGridHeadProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerGridHeadProps>();
</script>

<template>
  <CalendarGridHead v-bind="props">
    <slot />
  </CalendarGridHead>
</template>
