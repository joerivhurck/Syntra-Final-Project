<script setup lang="ts">
import {ref} from "vue"
defineProps<{
  img: string
  name : string
}>()


</script>

<template>
    <div class="flex justify-center items-center">
        <div class="flex flex-col items-center">
          <img
            class="rounded-full"
            :src="img"
            width="140px"
            height="140px"
            alt="Loaded Image"
          />
          <div class="teaser-content mt-4 flex"> <!-- Added margin-top to create space between image and text -->
            <div class="text-2xl ml-14 mt-2 text-transform: uppercase;">Deze opleiding werd zorgvuldig samengesteld door: {{name}}</div>
          </div>
        </div>
      </div>
</template>