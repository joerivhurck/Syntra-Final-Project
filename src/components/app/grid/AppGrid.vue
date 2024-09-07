<script setup lang="ts">
import { cn } from '@/utils/style.util'

const props = withDefaults(
  defineProps<{
    cols: '1' | '2' | '3' | '4'
    gap?: 'default' | 'lg' | 'none' | 'xl'
  }>(),
  {
    gap: 'default'
  }
)
</script>

<template>
  <div
    class="grid h-min gap-4"
    :class="
      cn({
        'grid-cols-1': props.cols === '1',
        'grid-cols-1 md:grid-cols-2': props.cols === '2',
        'grid-cols-1 md:grid-cols-3': props.cols === '3',
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-4': props.cols === '4',
        'gap-4': props.gap === 'default',
        'gap-8': props.gap === 'lg',
        'gap-12': props.gap === 'xl'
      })
    "
  >
    <slot />
  </div>
</template>
