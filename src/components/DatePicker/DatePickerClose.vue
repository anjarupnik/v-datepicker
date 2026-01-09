<script lang="ts">
import type { PopoverCloseProps } from "../Popover";
import { PopoverClose } from "../Popover";

export type DatePickerCloseProps = PopoverCloseProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerCloseProps>();
</script>

<template>
  <PopoverClose v-bind="props">
    <slot />
  </PopoverClose>
</template>
