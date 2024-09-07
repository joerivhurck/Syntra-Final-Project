<script setup lang="ts">
import { useFilterManger } from '@/services/filters-sideBar/filterManager.service'

const { filters, selectedFilters } = useFilterManger()
</script>

<template>
  <ul>
    <!--show titles of filters-->
    <div class="flex flex-col justify-start bg-white">
      <li class="side-bar ml-16 mt-12" v-for="(title, index) in filters" :key="index">
        <div class="font-bold p-1">{{ title.title }}</div>
        <ul>
          <!--show filters-->

          <li v-for="(filter, fIndex) in title.filters" :key="fIndex">
            <div class="flex items-center">
              <input
                class="mt-1 mr-2"
                type="checkbox"
                v-model="selectedFilters[title.title][filter]"
              />
              <div>{{ filter }}</div>
            </div>
          </li>
        </ul>
      </li>
    </div>
  </ul>
</template>
