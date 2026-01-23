<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import { Primitive } from "../Primitive";
import type { PrimitiveProps } from "../Primitive";
import { injectCalendarRootContext } from "./CalendarRoot.vue";

export interface CalendarOverlayItemProps extends PrimitiveProps {
  date: DateValue;
}

const props = withDefaults(defineProps<CalendarOverlayItemProps>(), {
  as: "button",
});

const rootContext = injectCalendarRootContext();

function handleClick() {
  if (rootContext.isDateDisabled(props.date) || rootContext.isDateUnavailable?.(props.date))
    return;

  rootContext.onDateChange(props.date);
  rootContext.monthYearOverlayState.value = false;
}
</script>

<template>
  <Primitive v-bind="props" @click="handleClick">
    <slot />
  </Primitive>
</template>
