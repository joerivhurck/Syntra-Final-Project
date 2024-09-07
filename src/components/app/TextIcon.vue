<script setup lang="ts">
import type { Icon } from '@/icons/icons'
import AppIcon from './icon/AppIcon.vue'

const props = defineProps<{
  icon: Icon
  label: string
  textSize?: string
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <AppIcon :icon="props.icon" />
    <div class="text-sm">
      <p :class="props.textSize">{{ props.label }}</p>
    </div>
  </div>
</template>
