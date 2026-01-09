<script setup lang="ts">
import { computed } from "vue";
import { CalendarMonthYearOverlay } from "../Calendar";
import { injectDateFieldRootContext } from "../DateField/DateFieldRoot.vue";
import type { MonthNameDateValue } from "../Calendar/CalendarRoot.vue";

export interface DatePickerMonthOverlayProps {}

const props = defineProps<DatePickerMonthOverlayProps>();
</script>

<template>
  <CalendarMonthYearOverlay v-bind="props" type="month">
    <slot />
  </CalendarMonthYearOverlay>
</template>
