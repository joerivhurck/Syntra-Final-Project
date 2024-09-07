import type { VariantProps } from 'class-variance-authority'

import { cva } from '@/libs/cva.libs'

export const cardWrapper = cva({
  base: '',
  variants: {
    size: {
      sm: 'w-64',
      startdate: 'w-[250px] h-[100px] ',
      overview: ' w-3/5 h-[300px]'
    },
    background: {
      white: 'bg-white',
      red: 'bg-red-500',
      gray: 'bg-gray-700'
    }
  }
})

export type CardWrapperProps = VariantProps<typeof cardWrapper>
