<script setup lang="ts">
import { ref } from "vue";

const date = ref(new Date());
</script>

<template>
  <div class="v-datepicker">
    <input
      type="date"
      :value="date.toISOString().split('T')[0]"
      @input="(e) => (date = new Date((e.target as HTMLInputElement).value))"
    />
  </div>
</template>

<style scoped>
.v-datepicker {
  display: inline-block;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
