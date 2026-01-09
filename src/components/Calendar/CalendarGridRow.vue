<script lang="ts">
import type { PrimitiveProps } from "../Primitive";

export type CalendarGridRowProps = PrimitiveProps;
</script>

<script setup lang="ts">
import { Primitive } from "../Primitive";

const props = withDefaults(defineProps<CalendarGridRowProps>(), { as: "tr" });
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
