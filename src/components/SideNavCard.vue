<script setup lang="ts">
import AppCard from '@/components/app/card/AppCard.vue'
import TextIcon from '@/components/app/TextIcon.vue'
import AppPill from './app/pill/AppPill.vue'

const props = defineProps<{
  hasEigenschap?: boolean
  eigenschap?: string | null
}>()
</script>

<template>
  <AppCard size="sideNavCard">
    <div class="p-3">
      <div class="text-sm hover:text-red-600 hover:underline">Startdatum(s)</div>
      <div class="text-sm hover:text-red-600 hover:underline">In detail</div>
      <div class="text-sm hover:text-red-600 hover:underline">Programma</div>
      <div class="text-sm hover:text-red-600 hover:underline">Andere toppers</div>
      <div class="text-sm hover:text-red-600 hover:underline">Contact</div>
      <div v-if="props.hasEigenschap">
        <div class="text-sm mt-2 font-bold">Eigenschappen</div>
        <AppPill :value="props.eigenschap ?? null" color="red" class="mt-2" />
      </div>
      <div class="text-sm mt-3 font-bold">Onze klanten geven ons</div>
      <div>5 vette sterren hier</div>

      <TextIcon
        icon="calendar"
        label="Hou me op de hoogte"
        class="mt-5 hover:text-red-600 hover:underline"
        text-size="text-xs"
      />

      <TextIcon
        icon="calendar"
        label="Na deze opleiding ontvang je een diploma, getuigschrift of certificaat"
        class="mt-3 hover:text-red-600 hover:underline"
        text-size="text-xs"
      />
    </div>
  </AppCard>
</template>
