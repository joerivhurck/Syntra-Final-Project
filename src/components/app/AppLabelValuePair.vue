<script setup lang="ts">
const props = defineProps<{
  label: string
  value?: string
}>()
</script>

<template>
  <div class="grid gap">
    <div v-if="props.label" id="title" class="font-bold text-lg">{{ props.label }}</div>
    <div class="text-sm">{{ props.value }}</div>
  </div>
</template>
