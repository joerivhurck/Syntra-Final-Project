<script setup lang="ts">
import AppPill from '@/components/app/pill/AppPill.vue'
import ContactChild from '@/components/contact/ContactChild.vue'
import ContactProf from '@/components/contact/ContactProf.vue';
//import { ref } from 'vue'
import type { Course } from '@/models/Course.type';

const props = defineProps<{
  course: Course
}>()


</script>

<template>
  <div class="flex w-full bg-red-500 py-14">
    <div class="container flex mx-auto w-[1000px] justify-between text-white gap-32">
      <div class="flex flex-col">
        <div class="my-4 text-2xl">HEB JE NOG EEN VRAAG?</div>
        <div class="my-4">
          Nog iets niet duidelijk? Stel je vraag dan hieronder aan onze medewerkers en we helpen je
          graag verder.
        </div>
        <ContactChild :title="'bericht'">
          <textarea
            class="py-2 px-4 hover:border-black border-[1px] w-full"
            placeholder="Vul Hier je vraag in"
          ></textarea>
        </ContactChild>
        <ContactChild :title="'Naam'"
          ><input type="text" class="w-full h-10 rounded"
        /></ContactChild>
        <ContactChild :title="'E-mail'"
          ><input type="text" class="w-full h-10 rounded"
        /></ContactChild>

        <AppPill
          class="bb hover:bg-white hover:text-black w-24 mt-10 h-10"
          :value="'Opslaan'"
          :color="'gray'"
        ></AppPill>
      </div>
         <ContactProf v-for="(prof, index) in props.course.people " :key="index" :img="prof.image" :name="prof.name"></ContactProf>
    </div>
  </div>
</template>

