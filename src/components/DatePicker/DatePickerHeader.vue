<script lang="ts">
import type { CalendarHeaderProps } from "../Calendar";
import { CalendarHeader } from "../Calendar";

export type DatePickerHeaderProps = CalendarHeaderProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeaderProps>();
</script>

<template>
  <CalendarHeader v-bind="props">
    <slot />
  </CalendarHeader>
</template>
