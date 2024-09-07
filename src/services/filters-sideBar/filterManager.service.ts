import type { TitleSidebarItem } from '@/components/models'
import { ref } from 'vue'

const filters = ref<TitleSidebarItem[]>([])
const selectedFilters = ref<{ [key: string]: { [key: string]: boolean } }>({})

const useFilterManger = () => {
  function initializeSelectedFilters(): void {
    for (let i = 0; i < filters.value.length; i++) {
      const title = filters.value[i]
      selectedFilters.value[title.title] = {}

      for (let j = 0; j < title.filters.length; j++) {
        const filter = title.filters[j]
        selectedFilters.value[title.title][filter] = false
      }
    }
  }

  const removeFilter = (title: string, filter: string) => {
    if (selectedFilters.value[title]) {
      delete selectedFilters.value[title][filter]
    }
  }
  return { initializeSelectedFilters, filters, selectedFilters, removeFilter }
}

export { useFilterManger }
