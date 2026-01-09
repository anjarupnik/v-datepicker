<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { DatePicker } from "v-datepicker";
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        v-datepicker playground
      </h1>

      <div class="space-y-4">
        <label class="block text-sm font-medium text-gray-700">
          Select a date
        </label>
        <div class="flex flex-col gap-2">
          <DatePicker.Root
            id="birthday"
            :is-date-unavailable="(date) => date.day === 19"
          >
            <DatePicker.Field
              v-slot="{ segments }"
              class="w-36 flex select-none bg-white items-center rounded-lg shadow-sm text-center justify-between text-green10 border p-1 data-[invalid]:border-red-500"
            >
              <div class="flex items-center">
                <template v-for="item in segments" :key="item.part">
                  <DatePicker.Input
                    v-if="item.part === 'literal'"
                    :part="item.part"
                  >
                    {{ item.value }}
                  </DatePicker.Input>
                  <DatePicker.Input
                    v-else
                    :part="item.part"
                    class="rounded p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9"
                  >
                    {{ item.value }}
                  </DatePicker.Input>
                </template>
              </div>

              <DatePicker.Trigger
                class="focus:shadow-[0_0_0_2px] rounded p-1 focus:shadow-black"
              >
                <Icon icon="radix-icons:calendar" class="text-base" />
              </DatePicker.Trigger>
            </DatePicker.Field>

            <DatePicker.Content
              :side-offset="4"
              class="rounded-xl bg-white border shadow-sm will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            >
              <DatePicker.Arrow class="fill-white stroke-gray-300" />
              <DatePicker.Calendar v-slot="{ weekDays, grid }" class="p-4">
                <DatePicker.Header class="flex items-center justify-between">
                  <DatePicker.Prev
                    class="inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
                  >
                    <Icon icon="radix-icons:chevron-left" class="w-4 h-4" />
                  </DatePicker.Prev>

                  <DatePicker.Heading class="text-black font-medium" />
                  <DatePicker.Next
                    class="inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"
                  >
                    <Icon icon="radix-icons:chevron-right" class="w-4 h-4" />
                  </DatePicker.Next>
                </DatePicker.Header>
                <div
                  class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <DatePicker.Grid
                    v-for="month in grid"
                    :key="month.value.toString()"
                    class="w-full border-collapse select-none space-y-1"
                  >
                    <DatePicker.GridHead>
                      <DatePicker.GridRow
                        class="mb-1 flex w-full justify-between"
                      >
                        <DatePicker.HeadCell
                          v-for="day in weekDays"
                          :key="day"
                          class="w-8 rounded-md text-xs text-green8"
                        >
                          {{ day }}
                        </DatePicker.HeadCell>
                      </DatePicker.GridRow>
                    </DatePicker.GridHead>
                    <DatePicker.GridBody>
                      <DatePicker.GridRow
                        v-for="(weekDates, index) in month.rows"
                        :key="`weekDate-${index}`"
                        class="flex w-full"
                      >
                        <DatePicker.Cell
                          v-for="weekDate in weekDates"
                          :key="weekDate.toString()"
                          :date="weekDate"
                        >
                          <DatePicker.CellTrigger
                            :day="weekDate"
                            :month="month.value"
                            class="relative flex items-center justify-center whitespace-nowrap rounded-[9px] border border-transparent bg-transparent text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black hover:border-black data-[selected]:bg-black data-[selected]:font-medium data-[outside-view]:text-black/30 data-[selected]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 data-[selected]:before:bg-white"
                          />
                        </DatePicker.Cell>
                      </DatePicker.GridRow>
                    </DatePicker.GridBody>
                  </DatePicker.Grid>
                </div>
              </DatePicker.Calendar>
            </DatePicker.Content>
          </DatePicker.Root>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
        Testing local package from workspace
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
