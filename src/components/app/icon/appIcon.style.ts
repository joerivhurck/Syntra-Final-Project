import { cva } from 'class-variance-authority'

export const iconVariants = cva('duration-300', {
  variants: {
    size: {
      default: 'h-5 w-5',
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
      logo: 'h-10 w-50'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})
export type IconSizeProp = NonNullable<Parameters<typeof iconVariants>[0]>['size']
