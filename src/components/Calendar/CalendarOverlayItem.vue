<script setup lang="ts">
import { computed } from "vue";
import type { DateValue } from "@internationalized/date";
import { Primitive } from "../Primitive";
import type { PrimitiveProps } from "../Primitive";
import { injectCalendarRootContext } from "./CalendarRoot.vue";
import { useKbd } from "../../shared";
import { injectCalendarMonthYearOverlayContext } from "./CalendarMonthYearOverlay.vue";

export interface CalendarOverlayItemProps extends PrimitiveProps {
  // TODO: extract DateValue & { monthName: string }
  date: DateValue & { monthName: string };
  disabled?: boolean;
  type: "month" | "year";
}

const props = withDefaults(defineProps<CalendarOverlayItemProps>(), {
  as: "div",
});

const rootContext = injectCalendarRootContext();
const years = computed(() => rootContext.years.value);
const maxValue = computed(() =>
  props.type === "month" ? 12 : years.value.length,
);
const overlayContext = injectCalendarMonthYearOverlayContext();
const dataValue = computed(() => `${props.type}-${props.date[props.type]}`);

const isFocusedDate = computed(() => {
  if (props.type === "month")
    return rootContext.currentMonth.value === props.date.monthName;
  return rootContext.currentYear.value === props.date.year.toString();
});

function closeOverlay() {
  rootContext.monthYearOverlayState.value = false;
}

function handleClick() {
  // TODO: double check if disabled and unavailable works properly for a month
  if (
    rootContext.isDateDisabled(props.date) ||
    rootContext.isDateUnavailable?.(props.date)
  )
    return;

  rootContext.onDateChange(props.date);
  closeOverlay();
}

const kbd = useKbd();

function handleArrowKey(e: KeyboardEvent) {
  if (props.disabled) return;
  e.preventDefault();
  e.stopPropagation();
  const parentElement = rootContext.parentElement.value!;

  const indexIncrementation = overlayContext.itemsPerRow.value;
  const sign = rootContext.dir.value === "rtl" ? -1 : 1;

  // TODO: check how we can reuse code with CalendarCellTrigger
  switch (e.code) {
    case kbd.ARROW_RIGHT:
      shiftFocus(props.date, sign);
      break;
    case kbd.ARROW_LEFT:
      shiftFocus(props.date, -sign);
      break;
    case kbd.ARROW_UP:
      shiftFocus(props.date, -indexIncrementation);
      break;
    case kbd.ARROW_DOWN:
      shiftFocus(props.date, indexIncrementation);
      break;
    case kbd.ENTER:
    case kbd.SPACE_CODE:
      rootContext.onDateChange(props.date);
      closeOverlay();
  }

  function shiftFocus(date: DateValue, add: number) {
    let nextDate = date[props.type] + add;

    // TODO: fix for years
    if (nextDate <= 0) {
      nextDate = maxValue.value + nextDate;
    }

    if (nextDate > years.value[maxValue.value - 1].year) {
      nextDate = nextDate - maxValue.value;
    }

    const candidateDay = parentElement.querySelector<HTMLElement>(
      `[data-value='${props.type}-${nextDate}']`,
    );

    candidateDay?.focus();
  }
}
</script>

<template>
  <Primitive
    v-bind="props"
    @click="handleClick"
    ref="primitiveElement"
    role="button"
    :aria-disabled="disabled"
    :data-value="dataValue"
    @keydown.up.down.left.right.space.enter="handleArrowKey"
    @keydown.enter.prevent
    :tabindex="isFocusedDate ? 0 : -1"
  >
    <slot />
  </Primitive>
</template>
