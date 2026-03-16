<script setup lang="ts">
import { computed, onMounted, nextTick } from "vue";
import type { DateValue } from "@internationalized/date";
import { Primitive, usePrimitiveElement } from "../Primitive";
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
const overlayContext = injectCalendarMonthYearOverlayContext();
const dataValue = computed(() => `${props.type}-${props.date[props.type]}`);

const { primitiveElement, currentElement } = usePrimitiveElement();

const isFocusedDate = computed(() => {
  if (props.type === "month")
    return rootContext.currentMonth.value === props.date.monthName;
  return rootContext.currentYear.value === props.date.year.toString();
});

const ariaLabel = computed(() => {
  if (props.type === "month") return props.date.monthName;
  return props.date.year.toString();
});

onMounted(() => {
  if (isFocusedDate.value) {
    nextTick(() => {
      currentElement.value?.focus();
      currentElement.value?.scrollIntoView({ block: "nearest" });
      console.log(document.activeElement);
    });
  }
});

function isDateSelectable(date: DateValue) {
  return (
    !rootContext.isDateDisabled(date) && !rootContext.isDateUnavailable?.(date)
  );
}

function closeOverlay() {
  rootContext.monthYearOverlayState.value = false;
}

function handleClick() {
  if (!isDateSelectable(props.date)) return;

  rootContext.onDateChange(props.date);
  closeOverlay();
}

const kbd = useKbd();

function handleKeydown(e: KeyboardEvent) {
  if (props.disabled) return;
  e.preventDefault();
  e.stopPropagation();
  const parentElement = rootContext.parentElement.value!;

  const itemsPerRow = overlayContext.itemsPerRow.value;
  const sign = rootContext.dir.value === "rtl" ? -1 : 1;
  const currentValue = props.date[props.type];

  switch (e.code) {
    case kbd.ARROW_RIGHT:
      shiftFocus(sign);
      break;
    case kbd.ARROW_LEFT:
      shiftFocus(-sign);
      break;
    case kbd.ARROW_UP:
      shiftFocus(-itemsPerRow);
      break;
    case kbd.ARROW_DOWN:
      shiftFocus(itemsPerRow);
      break;
    case kbd.HOME: {
      const indexInGrid =
        props.type === "month"
          ? currentValue - 1
          : currentValue - years.value[0]!.year;
      shiftFocus(-(indexInGrid % itemsPerRow));
      break;
    }
    case kbd.END: {
      const indexInGrid =
        props.type === "month"
          ? currentValue - 1
          : currentValue - years.value[0]!.year;
      shiftFocus(itemsPerRow - 1 - (indexInGrid % itemsPerRow));
      break;
    }
    case kbd.ENTER:
    case kbd.SPACE_CODE:
      if (isDateSelectable(props.date)) {
        rootContext.onDateChange(props.date);
        closeOverlay();
      }
  }

  function shiftFocus(add: number) {
    let nextValue = currentValue + add;

    if (props.type === "month") {
      nextValue = ((nextValue - 1 + 12) % 12) + 1;
    } else {
      const minYear = years.value[0]!.year;
      const maxYear = years.value[years.value.length - 1]!.year;
      nextValue = Math.max(minYear, Math.min(nextValue, maxYear));
    }

    const candidate = parentElement.querySelector<HTMLElement>(
      `[data-value='${props.type}-${nextValue}']`,
    );
    candidate?.focus();
    candidate?.scrollIntoView({ block: "nearest" });
  }
}
</script>

<template>
  <Primitive
    v-bind="props"
    @click="handleClick"
    ref="primitiveElement"
    role="button"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
    :data-value="dataValue"
    @keydown.up.down.left.right.space.enter.home.end="handleKeydown"
    @keydown.enter.prevent
    :tabindex="isFocusedDate ? 0 : -1"
  >
    <slot />
  </Primitive>
</template>
