<script lang="ts">
import type { PopoverArrowProps } from "../Popover";
import { PopoverArrow } from "../Popover";

export type DatePickerArrowProps = PopoverArrowProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerArrowProps>();
</script>

<template>
  <PopoverArrow v-bind="props">
    <slot />
  </PopoverArrow>
</template>
