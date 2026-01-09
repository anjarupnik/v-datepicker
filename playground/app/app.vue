<script setup lang="ts">
import { VDatePicker } from "v-datepicker";
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        v-datepicker Playground
      </h1>

      <div class="space-y-4">
        <label class="block text-sm font-medium text-gray-700">
          Select a date
        </label>
        <VDatePicker class="w-full" />
      </div>

      <div class="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
        Testing local package from workspace
      </div>
    </div>
  </div>
</template>
