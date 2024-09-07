<script setup lang="ts">
const props = defineProps<{
  title: string
  priceExclBtw: string
  priceIncl: string
}>()
</script>

<template>
  <div class="flex justify-between mb-2">
    <span class="uppercase w-10">{{ props.title }}</span>
    <div>
      <span>€ {{ props.priceExclBtw }}</span>
      <span class="ml-2 text-gray-500">excl. btw</span>
      <span class="ml-4 font-bold">€ {{ props.priceIncl }}</span>
      <span class="ml-2">incl.</span>
    </div>
  </div>
  <div class="border-t border-gray-300 my-4"></div>
</template>
