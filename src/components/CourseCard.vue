<script setup lang="ts">
import type { Course } from '@/models/Course.type'
import AppCard from '@/components/app/card/AppCard.vue'

import AppLabelValuePair from '@/components/app/AppLabelValuePair.vue'
import TextIcon from '@/components/app/TextIcon.vue'
import PricePair from '@/components/app/PricePair.vue'
import AppIcon from '@/components/app/icon/AppIcon.vue'

const props = defineProps<{
  course: Course
}>()

function isKmo() {
  if (props.course.savings?.find((saving) => saving.name === 'kmo')) {
    return 'checkmark'
  } else {
    return 'close'
  }
}

function isOpleidingscheques() {
  if (props.course.savings?.find((saving) => saving.name === 'opleidingscheques')) {
    return 'checkmark'
  } else {
    return 'close'
  }
}
</script>

<template>
  <div class="flex w-[900px] mt-3 cursor-pointer">
    <AppCard
      class="flex gap-5 w-full h-[350px] py-12 pr-5 px-3"
      size="courseCard"
      backgroundColor="white"
    >
      <div class="bg-red-600 p-3 ml-[-12px] h-10 mt-[7px]">
        <AppIcon icon="arrowRight" size="sm" color="white" />
      </div>
      <div class="flex justify-between w-full">
        <AppLabelValuePair
          :label="props.course.title ?? '-'"
          :value="props.course.teaser ?? '-'"
          class="pr-10"
        />
        <div class="flex flex-col gap-2 mt-1">
          <PricePair :price="props.course.price_incl" :priceExclBtw="props.course.price_excl" />
          <TextIcon :icon="isKmo()" label="KMO-portefeuille" class="mt-3" />
          <TextIcon :icon="isOpleidingscheques()" label="Opleidingscheques" />
          <TextIcon icon="location" label="hasselt" class="mt-3" />
        </div>
      </div>
    </AppCard>
  </div>
</template>
