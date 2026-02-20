<script lang="ts">
import { createContext } from "../../shared";

export interface CalendarMonthYearOverlayProps extends PrimitiveProps {
  type: "month" | "year";
  itemsPerRow?: number;
}

type CalendarMonthYearOverlayContext = {
  itemsPerRow: ComputedRef<number>;
};

export const [
  injectCalendarMonthYearOverlayContext,
  provideCalendarMonthYearOverlayContext,
] = createContext<CalendarMonthYearOverlayContext>("CalendarMonthYearOverlay");
</script>

<script setup lang="ts">
import { computed, type ComputedRef } from "vue";
import { Primitive, type PrimitiveProps } from "../Primitive";
import { injectCalendarRootContext } from "./CalendarRoot.vue";
import DismissableLayer from "../DismissableLayer/DismissableLayer.vue";
import { chunk } from "../../shared";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<CalendarMonthYearOverlayProps>(), {
  itemsPerRow: 4,
});

const itemsPerRow = computed(() => props.itemsPerRow);
const rootContext = injectCalendarRootContext();

const months = computed(() =>
  chunk(rootContext.months.value, props.itemsPerRow),
);
const years = computed(() => chunk(rootContext.years.value, props.itemsPerRow));

const isOpen = computed(
  () => rootContext.monthYearOverlayState.value === props.type,
);

function onEscapeKeyDown() {
  rootContext.monthYearOverlayState.value = false;
}

provideCalendarMonthYearOverlayContext({
  itemsPerRow,
});
</script>

<template>
  <DismissableLayer v-if="isOpen" as-child @escape-key-down="onEscapeKeyDown">
    <Primitive
      v-bind="{ ...props, ...$attrs }"
      :style="{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
      }"
      role="dialog"
      tabindex="0"
    >
      <slot
        :months="months"
        :years="years"
        :state="rootContext.monthYearOverlayState"
      />
    </Primitive>
  </DismissableLayer>
</template>
