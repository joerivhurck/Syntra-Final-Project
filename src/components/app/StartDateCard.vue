<script setup lang="ts">
import AppCard from '@/components/app/card/AppCard.vue'


const props = defineProps<{
  startDay: string
  startDate: string
  location: string
  availableSpots?: number | null
}>()
</script>

<template>
  <div class="flex gap-4">
    <AppCard
      v-if="props.startDate !== null"
      class="py-4 px-3 shadow-lg hover:border border-gray-700"
      size="startDate"
      background-color="white"
    >
      <div class="flex gap-2">
        <div class="text-sm">{{ props.startDay }}</div>
        <div class="text-sm">{{ props.location }}</div>
      </div>
      <div class="text-lg font-bold">{{ startDate }}</div>
      <div class="text-xs text-red-600" v-if="props.availableSpots !== null">
        {{ props.availableSpots + ' ' }} Plaatsen beschikbaar
      </div>
    </AppCard>
  </div>
</template>
