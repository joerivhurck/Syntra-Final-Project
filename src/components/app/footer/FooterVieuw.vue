<script setup lang="ts">
import SearchBar from "@/components/searchBar/SearchBar.vue"
</script>

<template>
 <div class="footer-wrapper  bottom-0 left-0 w-full bg-zinc-800 ">
    <div class="footer grid-cols-2 gap-2">
      <div class="filter flex justify-between mt-7">
        <div class="indexFilter text-white ml-32">
          <a href=""> Enlace </a>
        </div>
        <div class="filterKlaar flex mr-32">
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
    <div class="containerExtraInformatie flex justify-between">
      <div class="containerLogo">
        <div class="logo1"></div>
        <div class="logo2"></div>
      </div>
      <div class="containerOpleidingen text-white">
        <li>
          Opleiding
          <ul>
            Beroepsopleidingen
          </ul>
          <ul>
            Bijscholingen
          </ul>
          <ul>
            Voltijdse dagopleidingen
          </ul>
          <ul>
            Online Opleidingen
          </ul>
          <ul>
            Duaal Leren
          </ul>
          <ul>
            Alle opleidingen
          </ul>
        </li>
      </div>
      <div class="containerMeer text-white">
        <li>
          Meer?
          <ul>
            Klantencentrum
          </ul>
          <ul>
            Veelgestelde vragen
          </ul>
          <ul>
            Begeleiding
          </ul>
          <ul>
            Ik ben cursist/docent
          </ul>
          <ul>
            Succesverhalen
          </ul>
          <ul>
            Blog
          </ul>
          <ul>
            Vacatures
          </ul>
          <ul>
            Over SyntraPxl
          </ul>
          <ul>
            Projecten
          </ul>
        </li>
      </div>
      <div class="containerVraag text-white">
        <div>
          <p>Heb je een vraag?</p>
        </div>
        <div>tel: 011 30 32 00</div>
        <div>contacter</div>
        <div>klantencentrum@syntrapxl.be</div>
      </div>
    </div>
  </div>

  <div></div>
</template>

