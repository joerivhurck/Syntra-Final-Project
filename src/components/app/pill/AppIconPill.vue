<script lang="ts" setup>
import AppIcon from '@/components/app/icon/AppIcon.vue'
import type { Icon } from '@/icons/icons.ts'
import { cva } from '@/libs/cva.libs'
import { cn } from '@/utils/style.util'
import type { PillColorOptions } from './AppPill.vue'

const props = defineProps<{
  value: string
  icon?: Icon
  color?: PillColorOptions
  textsize?: string
}>()

const pillColors = cva({
  base: '',
  variants: {
    color: {
      default: 'text-primary border-primary bg-primary/5',
      red: 'bg-red-500 text-white :hover:bg-red-600 :hover:text-white',
      white: 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
      black: 'border-black text-white bg-black',
      gray: 'border-gray-800 bg-gray-800 text-white :hover:bg-white :hover:text-black'
    }
  },
  defaultVariants: {
    color: 'default'
  }
})
</script>

<template>
  <div
    class="flex h-fit w-fit items-center gap-2 whitespace-nowrap rounded-full border border-solid border-muted-foreground/15 bg-muted-background p-1 px-2 text-xs text-black"
    :class="cn(pillColors({ color: props.color }))"
  >
    <AppIcon v-if="props.icon" :icon="props.icon" size="sm" />

    <div :class="props.textsize">{{ props.value ?? '-' }}</div>
  </div>
</template>
