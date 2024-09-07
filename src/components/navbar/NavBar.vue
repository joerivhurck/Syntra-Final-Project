<script setup lang="ts"></script>

<template>
  <div>
    <nav class="bg-white border-b-2">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-start h-16">
          <div class="flex-shrink-0">
            <a href="#" class="text-black font-bold">
              <img
                src="https://storage.googleapis.com/ftidag_prod/activities/syntra-limburg/SyntraPXL-Logo-Digitaal-RGB-1.jpg"
                alt="Home"
                width="90px"
                height="90px"
                class="logo"
            /></a>
          </div>
          <div class="hidden md:block">
            <div class="flex ml-10 space-x-4">
              <a
                href="#"
                class="text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
                ><form action="/zoeken" method="GET">
                  <input type="text" name="q" placeholder="zoeken" />
                </form>
              </a>
              <a
                href="#"
                class="text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
                >Opleiding</a
              >
              <a
                href="#"
                class="text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
                >Kies een sector</a
              >
              <a
                href="#"
                class="text-black hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
                >Meer Info</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
