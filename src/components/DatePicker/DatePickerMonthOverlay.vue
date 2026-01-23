<script setup lang="ts">
import { CalendarMonthYearOverlay } from "../Calendar";
import type { PrimitiveProps } from "../Primitive";

export type DatePickerMonthOverlayProps = PrimitiveProps 

const props = defineProps<DatePickerMonthOverlayProps>();
</script> 

<template>
  <CalendarMonthYearOverlay v-bind="props" type="month" v-slot="{ months }">
    <slot :months="months" />
  </CalendarMonthYearOverlay>
</template>
