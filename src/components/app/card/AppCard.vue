<script setup lang="ts">
import { cva } from '@/libs/cva.libs'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/style.util'

const props = defineProps<{
  color?: CardColorOptions
  size?: CardSizeOptions
}>()

const card = cva({
  base: '',
  variants: {
    color: {
      white: 'bg-white',
      red: 'bg-red-500',
      black: 'bg-black',
      gray: 'bg-gray-800'
    },
    size: {
      courseCard: 'w-auto px-3 h-auto min-w-[300px]',
      sideNavCard: 'w-[230px] h-[350px]',
      startDate: 'w-[250px] h-[100px]'
    }
  },
  defaultVariants: {
    color: 'white'
  }
})

export type CardColorOptions = VariantProps<typeof card>['color']
export type CardSizeOptions = VariantProps<typeof card>['size']
</script>

<template>
  <div :class="cn(card({ color: props.color, size: props.size }))">
    <slot />
  </div>
</template>
