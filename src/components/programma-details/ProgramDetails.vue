<script setup lang="ts">
import AppPill from '@/components/app/pill/AppPill.vue'
import AppIconPill from '@/components/app/pill/AppIconPill.vue'
import PropertiesList from '@/components/programma-details/PropertiesList.vue'
import type { Course } from '@/models/Course.type'
import { ref } from 'vue'

const props = defineProps<{
  course: Course
}>()

const properties = ref<string[]>(['Kmo-Portefeuille', 'opleidingscheques'])
</script>

<template>
  <div class="program-container bg-gray-200 w-full mt-8 pt-10 pb-8">
    <div class="container-details gap-32 flex  pr-4  h-full mx-auto w-[1000px]">
      <div class="program flex flex-col justify-start">
        <div class="p mt-5 mb-4 text-4xl font-bold font-serif">Programma</div>
        <p class="text-xl mb-4">Ontdek het volledige programma in detail</p>
        <div class="program-info justify-start w-full gap-1 h-5 flex items-center rounded">
          <PropertiesList :properties="properties"></PropertiesList>
        </div>
        <AppPill
          class="mt-10 py-3 px-4 h-10 text-sm"
          :value="'Deze opleiding op maat van je bedrijf?'"
          :color="'red'"
          textsize="text-lg"
        ></AppPill>
        <AppIconPill
          class="h-10 mt-4 px-4"
          :icon="'mail'"
          :value="'Vragen over deze Opleiding?'"
          textsize="text-lg"
          color="white"
        />
      </div>
      <div>
        <div class="flex flex-wrap pt-6">
         <div v-html="props.course.program_text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
