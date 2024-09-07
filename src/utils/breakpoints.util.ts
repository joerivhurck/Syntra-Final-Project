import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

export function useDeviceBreakpoints() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isTablet = computed<boolean>(() => breakpoints.greater('lg').value)

  return {
    isTablet
  }
}
