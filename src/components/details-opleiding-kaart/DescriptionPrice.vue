<script setup lang="ts">
defineProps<{
  price: String
}>()
</script>

<template>
  <div>{{ price }}</div>
</template>
