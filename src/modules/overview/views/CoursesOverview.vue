<script setup lang="ts">
import type { Course } from '@/models/Course.type'
import SideBar from '@/components/sidebar/SideBar.vue'
import SelectedFiltersManager from '@/components/sidebar/SelectedFiltersManager.vue'
import { onMounted, ref } from 'vue'
import { useFilters } from '@/services/filters-sideBar/filters.service'
import { useFilterManger } from '@/services/filters-sideBar/filterManager.service'
import CourseCard from '@/components/CourseCard.vue'
import { getCourses } from '@/services/Course/Course.service'
import AppGrid from '@/components/app/grid/AppGrid.vue'
import { useDeviceBreakpoints } from '@/utils/breakpoints.util'
import { useRouter } from 'vue-router'

const { initializeSelectedFilters, filters } = useFilterManger()

const router = useRouter()
const { getFilters } = useFilters()
const { isTablet } = useDeviceBreakpoints()
const { fetchCourses } = getCourses()

const courses = ref<Course[]>([])

onMounted(async () => {
  try {
    courses.value = await fetchCourses()
  } catch (error) {
    console.error('Error fetching courses:', error)
  }
})

onMounted(async () => {
  try {
    const fetchedFilters = await getFilters()
    filters.value = fetchedFilters
    initializeSelectedFilters()
  } catch (error) {
    console.error('Error fetching filters:', error)
  }
})

function handleCourseRouter(course: Course): void {
  console.log('course', course, course.id)
  router.push({
    name: 'course-details',
    params: { id: course.id }
  })
}
</script>

<template>
  <AppGrid cols="1">
    <div class="flex bg-gray-200 h-full">
      <div class="flex flex-row gap-14">
        <SideBar v-if="isTablet" />
      </div>
      <AppGrid cols="1">
        <SelectedFiltersManager class="ml-5" />
        <div v-for="course in courses" :key="course.id">
          <CourseCard class="mt-6 ml-6" @click="handleCourseRouter(course)" :course="course" />
        </div>
      </AppGrid>
    </div>
    {{}}
  </AppGrid>
</template>
