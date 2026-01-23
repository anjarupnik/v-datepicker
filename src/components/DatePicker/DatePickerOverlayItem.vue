<script setup lang="ts">
  import { useAttrs } from 'vue';
import CalendarOverlayItem, {
  type CalendarOverlayItemProps,
} from "../Calendar/CalendarOverlayItem.vue";

export type DatePickerOverlayItemProps = CalendarOverlayItemProps

const props = defineProps<DatePickerOverlayItemProps>();
</script>

<template>
  <CalendarOverlayItem v-bind="props">
    <slot />
  </CalendarOverlayItem>
</template>
