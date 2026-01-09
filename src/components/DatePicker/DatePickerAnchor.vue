<script lang="ts">
import type { PopoverAnchorProps } from "../Popover";
import { PopoverAnchor } from "../Popover";

export type DatePickerAnchorProps = PopoverAnchorProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerAnchorProps>();
</script>

<template>
  <PopoverAnchor v-bind="props">
    <slot />
  </PopoverAnchor>
</template>
