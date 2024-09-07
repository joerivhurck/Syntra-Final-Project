<script setup lang="ts">
import StartDateCard from '@/components/app/StartDateCard.vue'
import detailsInfoCard from '@/components/detailsInfoCard/detailsInfoCard.vue'
import DetailsInfoCardLabels from '@/components/detailsInfoCard/DetailsInfoCardLabels.vue'
import type { Course } from '@/models/Course.type'
import { computed } from 'vue'
import AppCard from '@/components/app/card/AppCard.vue'
import AppIcon from '@/components/app/icon/AppIcon.vue'
import { ref, type Ref } from 'vue'

const props = defineProps<{
  course?: Course | null
}>()

const infoItems = computed(() => {
  const items = []

  if (props.course && props.course.sector && props.course.sector.name) {
    items.push({ label: 'Sector', filter: props.course.sector.name })
  }

  if (props.course && props.course.duration && props.course.duration.name) {
    items.push({ label: 'Tijdsduur', filter: props.course.duration.name })
  }

  if (props.course && props.course.study_type && props.course.study_type.name) {
    items.push({ label: 'Leervorm', filter: props.course.study_type.name })
  }

  return items
})
const dates: Ref<string[]> = ref([])

if (props.course?.start_dates) {
  // Map over the start_dates array to extract only the date part of the date property
  dates.value = props.course.start_dates.map((item) => {
    // Extract date part (year-month-day) from the date string
    const datePart = item.date.split(' ')[0]
    return datePart
  })
}

function getDayOfWeek(year: number, month: number, day: number) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date(year, month - 1, day)
  return days[date.getDay()]
}

const getDayOfWeekFromString = (dateString: string) => {
  if (!dateString) return ''
  const [year, month, day] = dateString.split('-').map(Number)
  return getDayOfWeek(year, month, day)
}

const day = getDayOfWeekFromString(dates.value[0])

console.log(day)
</script>

<template>
  <div class="intro relative pt-20 bg-gray-200 pb-20">
    <div class="container mx-auto w-[1000px] pr-4">
      <div class="intro-start mt-8">
        <detailsInfoCard class="z-10">
          <template v-for="(item, index) in infoItems" :key="index">
            <DetailsInfoCardLabels
              v-if="item.filter !== null"
              :label="item.label"
              :filter="item.filter"
            />
          </template>
        </detailsInfoCard>
        <div class="text-2xl text-transform: uppercase mb-4">Startdatum(s)</div>
        <div class="startCardsContainer flex gap-2 pb-16">
          <StartDateCard
            v-for="startDay in props.course?.start_dates"
            :key="startDay.id"
            :startDay="day"
            :startDate="startDay.date"
            :location="startDay.location.name"
            :availableSpots="startDay.available_spaces"
          ></StartDateCard>
          <AppCard class="py-4 px-3 flex justify-between items-center" size="startDate" color="red">
            <div class="text-white text-sm">Hou me op de hoogte van nieuwe startdata</div>
            <AppIcon icon="arrowRight" color="white" />
          </AppCard>
        </div>
      </div>
    </div>
  </div>
</template>
