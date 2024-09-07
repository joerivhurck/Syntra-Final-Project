<script setup lang="ts">
import NavBar from '@/components/navbar/NavBar.vue'
import FooterVieuw from '@/components/app/footer/FooterVieuw.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterVieuw/>
</template>
