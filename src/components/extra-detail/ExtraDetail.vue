<script setup lang="ts">
import ExtraDetailComp from '@/components/extra-detail/ExtraDetailComp.vue'
import type { Course } from '@/models/Course.type'

const props = defineProps<{
  course: Course
}>()

import { ref } from 'vue'

const activeTab = ref('Extra Info')
const toggleText = ref('')
const toggleTab = (tab: string) => {
  activeTab.value = tab

  const textExtraInfo = ref(props.course.details_extra_info)
  const textVoorWie = ref(props.course.details_for_text)

  if (activeTab.value === 'Extra Info') {
    toggleText.value = textExtraInfo.value
  } else if (activeTab.value === 'Voor Wie') {
    toggleText.value = textVoorWie.value
  } else {
    toggleText.value = ''
  }
}
</script>

<template>
  <div>
    <div class="container mx-auto w-[1000px] pr-4 py-8">
      <div class="flex justify-start text-3xl mb-8">IN DETAIL</div>
      <div class="flex justify-start my-4 text-xl">
        <div v-html="props.course.details_text"></div>
      </div>
    </div>
  </div>
  <div class="flex justify-evenly gap-2 mx-auto w-[1000px]">
    <ExtraDetailComp
      :text="'Extra Info'"
      :isActive="activeTab === 'Extra Info'"
      @click="toggleTab('Extra Info')"
    />
    <ExtraDetailComp
      :text="'Voor Wie'"
      :isActive="activeTab === 'Voor Wie'"
      @click="toggleTab('Voor Wie')"
    />
  </div>
  <div class="flex flex-wrap pt-8 pb-4 pl-[28rem] pr-[28rem]" v-if="toggleText">
    <div v-html="toggleText"></div>
  </div>
</template>
