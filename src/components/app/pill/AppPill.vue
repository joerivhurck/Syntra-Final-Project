<script lang="ts" setup>
import type { VariantProps } from 'class-variance-authority'

import AppIcon from '@/components/app/icon/AppIcon.vue'
import type { Icon } from '@/icons/icons.ts'
import { cva } from '@/libs/cva.libs'
import { cn } from '@/utils/style.util'

const props = defineProps<{
  value: string | null
  suffixIcon?: Icon
  color?: PillColorOptions
  textsize?: string
  size?: PillSizeOptions
}>()

const pill = cva({
  base: '',
  variants: {
    color: {
      default: 'text-primary border-primary bg-primary/5',
      red: 'bg-red-500 text-white :hover:bg-red-600 :hover:text-white',
      white: 'border-gray-800 text-gray-800 :hover:bg-gray-800 :hover:text-white',
      black: 'border-black text-white bg-black',
      gray: 'border-gray-800 bg-gray-800 text-white :hover:bg-white :hover:text-black'
    },
    size: {
      fit: 'w-fit h-fit'
    }
  },
  defaultVariants: {
    color: 'default'
  }
})

export type PillColorOptions = VariantProps<typeof pill>['color']
export type PillSizeOptions = VariantProps<typeof pill>['size']
</script>

<template>
  <div
    class="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid p-1 px-2"
    :class="cn(pill({ color: props.color, size: props.size }))"
  >
    <slot name="prefix" />
    <div :class="props.textsize" class="flex justify-center items-center">
      {{ props.value ?? '-' }}
    </div>
  </div>
</template>
