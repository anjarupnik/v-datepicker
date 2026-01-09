<script lang="ts">
import type { DateFieldInputProps } from "../DateField";
import { DateFieldInput } from "../DateField";

export type DatePickerInputProps = DateFieldInputProps;
</script>

<script setup lang="ts">
const props = defineProps<DatePickerInputProps>();
</script>

<template>
  <DateFieldInput v-bind="props">
    <slot />
  </DateFieldInput>
</template>
