<script setup lang="ts">
defineProps<{
  text: string
  isActive: boolean
}>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

const onclick = () => {
  emit('click')
}
</script>

<template>
  <div
    class="flex justify-center items-start text-2xl w-1/2 h-10 border-b-4 cursor-pointer"
    :class="{ red: isActive, gray: !isActive }"
    @click="onclick"
  >
    {{ text }}
  </div>
</template>

<style scoped>
.red {
  border-color: red;
}

.gray {
  border-color: gray;
}
</style>
