<script lang="ts">
import type { DateValue } from "@internationalized/date";
import type { PrimitiveProps } from "../Primitive";

export interface CalendarYearHeadingProps extends PrimitiveProps {}

export interface CalendarNextSlot {
  default?: (props: {
    /** Current disable state */
    disabled: boolean;
  }) => any;
}
</script>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { Primitive } from "../Primitive";
import { injectCalendarRootContext } from "./CalendarRoot.vue";

const props = withDefaults(defineProps<CalendarYearHeadingProps>(), {
  as: "button",
});
// defineSlots<CalendarNextSlot>();

const disabled = computed(() => {
  // TODO

  // rootContext.disabled.value ||
  // rootContext.isNextButtonDisabled(props.nextPage),
  return false;
});

const rootContext = injectCalendarRootContext();
const currentYear = computed(() => rootContext.currentYear?.value);
const attrs = useAttrs();
const ariaLabel = computed(
  () =>
    currentYear.value +
    " - " +
    (attrs["aria-label"] || "Open month selection overlay"),
);
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :aria-label="ariaLabel"
    :type="as === 'button' ? 'button' : undefined"
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled || undefined"
    :disabled="disabled"
    @click="() => console.log('clicked')"
  >
    <slot :disabled>
      {{ currentYear }}
    </slot>
  </Primitive>
</template>
