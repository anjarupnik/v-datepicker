<script setup lang="ts">
import { computed } from "vue";
import { Primitive, type PrimitiveProps } from "../Primitive";
import { injectCalendarRootContext } from "./CalendarRoot.vue";import DismissableLayer from "../DismissableLayer/DismissableLayer.vue";

export interface CalendarMonthYearOverlayProps extends PrimitiveProps {
  type: "month" | "year";
}

const props = defineProps<CalendarMonthYearOverlayProps>();

defineOptions({
  inheritAttrs: false,
})

const rootContext = injectCalendarRootContext();

const months = computed(() => rootContext.months.value);
const years = computed(() => rootContext.years.value);

const isOpen = computed(() => rootContext.monthYearOverlayState.value === props.type);

function onEscapeKeyDown() {
  rootContext.monthYearOverlayState.value = false;
}

</script>

<template>
  <DismissableLayer as-child @escape-key-down="onEscapeKeyDown">
    <Primitive
      v-if="isOpen"
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
      <slot :months="months" :years="years" :state="rootContext.monthYearOverlayState" />
    </Primitive>
  </DismissableLayer>
</template>
