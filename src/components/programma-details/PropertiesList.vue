<script setup lang="ts">
defineProps<{
  properties : string[]
}>()

</script>



<template>

 <div class=" bg-teal-500 text-sm text-white px-1 flex justify-center rounded-md" v-for="(props,index) in properties" :key="index">{{ props }}</div>

</template>