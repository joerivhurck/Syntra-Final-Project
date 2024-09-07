<script setup lang="ts">
import DetailsCard from '@/components/details-opleiding-kaart/detailsCard.vue'
import SideNavCard from '@/components/SideNavCard.vue'

import ExtraDetail from '@/components/extra-detail/ExtraDetail.vue'

import ProgramDetails from '@/components/programma-details/ProgramDetails.vue'
import ContactComp from '@/components/contact/ContactComp.vue'
import introComp from '@/components/intro/introComp.vue'
import KmoPortefeuille from '@/modules/details/components/KmoPortefeuille.vue'
import PrijsSamenstelling from '@/modules/details/components/PrijsSamenstelling.vue'

import { onMounted, ref } from 'vue'
import { getCourses } from '@/services/Course/Course.service'
import type { Course } from '@/models/Course.type'
import { useRoute } from 'vue-router'
const { fetchCourseDetails } = getCourses()

const route = useRoute()
const course = ref<Course | null>(null)

onMounted(async () => {
  // Get the course id from the route parameters
  const courseId = Number(route.params.id)

  try {
    // Fetch course details using the courseId
    const fetchedCourse = await fetchCourseDetails(courseId)

    // If the course details are successfully fetched, assign them to the course ref
    if (fetchedCourse) {
      course.value = fetchedCourse
      console.log('Fetched course details:', course.value)
    } else {
      console.error('Failed to fetch course details')
    }
  } catch (error) {
    console.error('Error fetching course details:', error)
  }
})
</script>

<template>
  <template v-if="course">
    <DetailsCard :course="course" />
    <introComp :course="course" />
    <ExtraDetail :course="course" />
    <ProgramDetails :course="course" />
    <ContactComp :course="course" />
    <PrijsSamenstelling :course="course" />
    <KmoPortefeuille :course="course" />
  </template>

  <SideNavCard class="sticky left-16 top-44 border border-black" />
</template>
