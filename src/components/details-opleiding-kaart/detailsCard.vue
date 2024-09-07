<script setup lang="ts">

import DescriptionCourse from '@/components/details-opleiding-kaart/DescriptionCourse.vue'
import DescriptionPrice from '@/components/details-opleiding-kaart/DescriptionPrice.vue'
import AppPill from '@/components/app/pill/AppPill.vue'
import AppIconPill from '@/components/app/pill/AppIconPill.vue'
import type { Course } from '@/models/Course.type'

const props = defineProps<{
  course: Course
}>()


</script>

<template>
  <div class="flex relative justify-end">
    <div class="flex-grow w-2/4 pl-[14rem] pt-8 pb-[100px]">
      <div class="bg-stone-400 w-32 h-8 flex pt-1 pl-5 rounded mb-9 font-serif gap-1">
        <div>+</div>
        <div>favoriet</div>
      </div>
      <div class="textContainer flex flex-col gap-4">
        <DescriptionCourse
          class="text-xs text-stone-400 font-serif"
          :text="props.course.course_type.name"
        />
        <DescriptionCourse class="font-black text-4xl font-serif" :text="props.course.title" />
        <DescriptionCourse class="text-xl my-4" :text="props.course.teaser" />
      </div>
      <div class="mt-2">
        <DescriptionPrice
          class="text-red-600 text-3xl"
          :price="`€${props.course.price_incl} incl.`"
        />
        <DescriptionPrice class="" :price="`€${props.course.price_excl} excl. BTW`" />
      </div>
      <div class="flex gap-2">
        <AppPill class="w-32 h-10 mt-8" :value="'Inschrijven'" :color="'red'" textsize="text-lg" />
        <AppIconPill
          class="w-32 h-10 mt-8 px-5"
          :icon="'mail'"
          :value="'Ik heb een vraag'"
          textsize="text-lg"
          color="white"
        />
      </div>
    </div>
    <div class="details flex overflow-hidden w-2/4 relative z-0">
      <img
        class="img pl-20 object-cover object-center w-[1024px] h-[576]"
        :src="props.course.image"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
.details::after {
  background-image: url(https://laravel.bartduisters.com/images/syntra-rings.svg);
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  content: '';
  display: block;
  left: calc(var(--spacer-default) * -2);
  opacity: 1;
  pointer-events: none;
  position: absolute;
  top: -0.1rem;
  transition: opacity 0.5s ease;
  width: 100%;
  will-change: opacity;
}
</style>
