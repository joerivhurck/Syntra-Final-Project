<script setup lang="ts">


import { ref } from 'vue'



const query = ref('')

const handleInput = () => {
  // Realizar acciones cuando el usuario escribe en el input, si es necesario
}

const search = () => {
  // Realizar la búsqueda utilizando query.value
  console.log('Búsqueda realizada:', query.value)
}
</script>




<template>
  <div class="flex items-center">
    <input
      type="text"
      v-model="query"
      @input="handleInput"
      placeholder="Zoek binnen artikels en berichten"
      class="border bg-black rounded-lg px-4 py-2 rounded-l-md border-solid mt-4"
    />
</div>




</template>


<style scoped>
/* Estilos de Tailwind aquí */
</style>
