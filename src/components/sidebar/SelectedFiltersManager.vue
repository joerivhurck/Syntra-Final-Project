<script setup lang="ts">
import { useFilterManger } from '@/services/filters-sideBar/filterManager.service'
import AppIcon from '@/components/app/icon/AppIcon.vue'
const { selectedFilters, removeFilter } = useFilterManger()
</script>

<template>
  <div class="flex flex-row w-auto h-20">
    <div class="flex flex-row" v-for="(selected, title) in selectedFilters" :key="title">
      <div v-for="(isSelected, filter) in selected" :key="filter">
        <div
          class="mt-8 mx-1 p-2 bg-white border-2 border-grey-200 rounded-md h-8 flex justify-center items-center text-xs w-auto"
          v-if="isSelected"
        >
          <AppIcon
            icon="close"
            size="xs"
            class="m-1 cursor-pointer font-bold"
            @click="removeFilter(title as string, filter as string)"
          />

          {{ filter }}
        </div>
      </div>
    </div>
  </div>
</template>
