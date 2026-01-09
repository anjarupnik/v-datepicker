<script setup lang="ts">
import { computed } from "vue";
import { Primitive, type PrimitiveProps } from "../Primitive";
import CalendarOverlayItem from "./CalendarOverlayItem.vue";
import { injectCalendarRootContext } from "./CalendarRoot.vue";

export interface CalendarMonthYearOverlayProps extends PrimitiveProps {
  type: "month" | "year";
}

const props = defineProps<CalendarMonthYearOverlayProps>();

const rootContext = injectCalendarRootContext();

const items = computed(() => {
  if (props.type === "month") {
    return rootContext.months.value;
  }
  return rootContext.years.value;
});

// TODO: fix ts errors and add logic for years
</script>

<template>
  <Primitive
    v-bind="props"
    :style="{
      position: 'absolute',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '1000',
    }"
  >
    <slot>
      <CalendarOverlayItem
        v-for="item in items"
        :key="item.monthName"
        :date="item"
      >
        {{ item.monthName }}
      </CalendarOverlayItem>
    </slot>
  </Primitive>
</template>
