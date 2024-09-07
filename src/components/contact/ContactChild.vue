<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mb-4">
    <div class="mb-2">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
