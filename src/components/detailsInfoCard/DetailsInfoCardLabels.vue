<script setup lang="ts">
defineProps<{
  label: String
  filter: string
}>()
</script>

<template>
  <div class="info-card justify-center px-8 py-6  ml-10">
    <div class="tx text-xs font-bold font-serif">{{ label }}</div>
    <div class="tx text-xl text-red-600 font-bold font-mono">{{ filter }}</div>
  </div>
</template>
