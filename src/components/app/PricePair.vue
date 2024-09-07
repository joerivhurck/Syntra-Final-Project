<script setup lang="ts">
import AppIcon from './icon/AppIcon.vue'

const props = defineProps<{
  price: number
  priceExclBtw: number
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="bg-blue-900 p-1 rounded-full">
      <AppIcon icon="checkmark" size="xs" color="white" class="items-center" />
    </div>
    <div>
      <div class="flex items-center">
        <AppIcon icon="euro" size="sm" color="red" />
        <div v-if="props.price" id="title" class="font-bold text-lg text-red-600">
          {{ props.price }}
        </div>
      </div>

      <div class="flex items-center">
        <AppIcon icon="euro" size="xs" />
        <div v-if="props.priceExclBtw" id="title" class="text-sm text-gray-400">
          {{ props.priceExclBtw }}
        </div>
      </div>
    </div>
  </div>
</template>
