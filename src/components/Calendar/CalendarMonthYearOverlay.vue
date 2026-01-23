<script setup lang="ts">
import { computed } from "vue";
import { Primitive, type PrimitiveProps } from "../Primitive";
import { injectCalendarRootContext } from "./CalendarRoot.vue";

export interface CalendarMonthYearOverlayProps extends PrimitiveProps {
  type: "month" | "year";
}

const props = defineProps<CalendarMonthYearOverlayProps>();

const rootContext = injectCalendarRootContext();

const months = computed(() => rootContext.months.value);
const years = computed(() => rootContext.years.value);

const isOpen = computed(() => rootContext.monthYearOverlayState.value === props.type);

// TODO: fix ts errors and add logic for years
</script>

<template>
  <Primitive
    v-if="isOpen"
    v-bind="props"
    :style="{
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
      zIndex: '1000',
    }"
  >
    <slot :months="months" :years="years" :state="rootContext.monthYearOverlayState" />
  </Primitive>
</template>
