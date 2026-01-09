<script lang="ts">
import type { TeleportProps } from "../Teleport";

export type PopoverPortalProps = TeleportProps;
</script>

<script setup lang="ts">
import { TeleportPrimitive } from "../Teleport";

const props = defineProps<PopoverPortalProps>();
</script>

<template>
  <TeleportPrimitive v-bind="props">
    <slot />
  </TeleportPrimitive>
</template>
