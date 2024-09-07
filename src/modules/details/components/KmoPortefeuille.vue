<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-green-700 text-white">
    <div class="max-w-2xl p-8 bg-green-700">
      <h1 class="text-4xl font-bold mb-4">KMO-PORTEFEUILLE</h1>
      <!-- aanpassen aub zodat het juiste thema getoond wordt-->
      <h2 class="text-xl mb-8">THEMA: Digitalisering - Software</h2>
      <p class="mb-4">
        De kmo-portefeuille is een subsidie van de Vlaamse Overheid waardoor je tot 30% van je
        inschrijvingsgeld kan recupereren. Lees hier hoe de KMO-portefeuille in zijn werk gaat.
      </p>
      <div class="flex justify-between mb-4">
        <div>
          <p class="text-lg">MO*</p>
          <!-- aanpassen aub zodat het juiste bedrag getoond wordt-->
          <p class="text-2xl font-bold">€ 1479.06</p>
        </div>
        <div>
          <p class="text-lg">KO**</p>
          <!-- aanpassen aub zodat het juiste bedrag getoond wordt-->
          <p class="text-2xl font-bold">€ 1294.17</p>
        </div>
      </div>
      <p class="mb-2">Netto verschuldigd bedrag voor:</p>
      <ul>
        <li>* middelgrote ondernemingen</li>
        <li>** kleine ondernemingen</li>
      </ul>
      <div class="mt-8 flex justify-between">
        <p>AGENTSCHAP INNOVEREN & ONDERNEMEN</p>
        <p>Vlaanderen is ondernemen</p>
      </div>
    </div>
  </div>
</template>
