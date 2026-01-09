<script lang="ts">
import type { PrimitiveProps } from "../Primitive";

export type CalendarHeaderProps = PrimitiveProps;
</script>

<script setup lang="ts">
import { Primitive } from "../Primitive";

const props = withDefaults(defineProps<CalendarHeaderProps>(), { as: "div" });
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
