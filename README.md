# v-datepicker

A flexible and accessible Vue 3 datepicker component library.

## Description

`v-datepicker` is a highly customizable datepicker package built for the Vue 3 ecosystem. It is primarily based on the robust implementation of [reka-ui](https://github.com/reka-ui/reka-ui) (formerly radix-vue) to ensure top-tier accessibility and performance. 

This package is further enriched with advanced features like the **Month and Year Overlay**, inspired by the popular [vue-datepicker](https://github.com/Vuepic/vue-datepicker), providing a more intuitive navigation experience for users.

> **Note:** This is a **headless** library. No styling is included out of the box. You have full control over the look and feel, and are responsible for applying all styles (e.g., using Tailwind CSS).

## Features

- **Headless & Accessible**: Built on top of Reka UI's accessible primitives.
- **Customizable**: Full control over the rendering of every part of the datepicker.
- **Tree-shakable**: Built using modern ES modules.
- **Month & Year Overlays**: Quick navigation inspired by Vue Datepicker.
- **TypeScript Ready**: Full type support for a better developer experience.

## Installation

```bash
# pnpm
pnpm add @rupe/v-datepicker

# npm
npm install @rupe/v-datepicker

# yarn
yarn add @rupe/v-datepicker
```

## Basic Usage (Tailwind CSS)

Since the library is headless, you'll need to apply your own styles. Here's an example using Tailwind CSS:

```vue
<script setup lang="ts">
import { DatePicker } from '@rupe/v-datepicker'
</script>

<template>
  <DatePicker.Root class="relative">
    <DatePicker.Field v-slot="{ segments }" class="flex items-center gap-1 border border-gray-300 rounded px-3 py-2 bg-white focus-within:ring-2 focus:ring-blue-500">
      <div class="flex items-center">
        <template v-for="item in segments" :key="item.part">
          <DatePicker.Input
            :part="item.part"
            class="px-0.5 rounded focus:bg-blue-100 focus:outline-none data-[placeholder]:text-gray-400"
          >
            {{ item.value }}
          </DatePicker.Input>
        </template>
      </div>
      <DatePicker.Trigger class="ml-auto text-gray-500 hover:text-gray-700">
        📅
      </DatePicker.Trigger>
    </DatePicker.Field>

    <DatePicker.Content class="absolute z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
      <DatePicker.Calendar v-slot="{ weekDays, grid }">
        <DatePicker.Header class="flex items-center justify-between mb-4">
          <DatePicker.Prev class="p-1 hover:bg-gray-100 rounded">⬅️</DatePicker.Prev>
          <DatePicker.Heading class="font-bold flex gap-1">
             <DatePicker.MonthHeading />
             <DatePicker.YearHeading />
          </DatePicker.Heading>
          <DatePicker.Next class="p-1 hover:bg-gray-100 rounded">➡️</DatePicker.Next>
        </DatePicker.Header>
        
        <DatePicker.Grid v-for="month in grid" :key="month.value.toString()" class="w-full">
          <DatePicker.GridHead>
            <DatePicker.GridRow class="flex justify-between">
              <DatePicker.HeadCell v-for="day in weekDays" :key="day" class="w-8 text-center text-xs text-gray-500 font-medium">
                {{ day }}
              </DatePicker.HeadCell>
            </DatePicker.GridRow>
          </DatePicker.GridHead>
          <DatePicker.GridBody>
            <DatePicker.GridRow v-for="(weekDates, index) in month.rows" :key="index" class="flex justify-between mt-1">
              <DatePicker.Cell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
                <DatePicker.CellTrigger 
                  :day="weekDate" 
                  :month="month.value" 
                  class="w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-blue-50 data-[selected]:bg-blue-600 data-[selected]:text-white data-[outside-view]:text-gray-300"
                />
              </DatePicker.Cell>
            </DatePicker.GridRow>
          </DatePicker.GridBody>
        </DatePicker.Grid>
      </DatePicker.Calendar>
    </DatePicker.Content>
  </DatePicker.Root>
</template>
```

## Playground

The repository includes a playground project built with **Nuxt** and **Tailwind CSS** to test the library locally.

### Running the Playground

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```
3.  **Start the playground**:
    ```bash
    pnpm dev
    ```
    This will start the Nuxt dev server for the `playground` folder. Any changes made in the `src/` directory will be reflected instantly via HMR.

## Credits

Special thanks to the following projects that made this package possible:

- **[reka-ui](https://reka-ui.com/)**: For the incredible foundation of accessible headless components.
- **[vue-datepicker](https://vue3-datepicker.com/)**: For the inspiration behind the intuitive month and year overlay navigation.

## License

MIT
