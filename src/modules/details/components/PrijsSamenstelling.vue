<script setup lang="ts">
import AppIcon from '@/components/app/icon/AppIcon.vue'
import TextBottomDivider from '@/modules/details/components/TextBottomDivider.vue'

/* aanpassen zodat je de juiste data binnenkrijgt! vergeet niet in je parent component de juiste data mee te geven dat is dus in de detailsview (joeri heeft al een deel gedaan je kan hem om hulp vragen) */
const props = defineProps<{
  course: course
}>()
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-white">
    <div class="max-w-[1080px] p-8 bg-white text-gray-900">
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h2 class="text-xl font-bold mb-4">SAMENSTELLING PRIJS</h2>
          <!-- juiste data inladen voor de prijzen, de titels mogen blijven staan. denk goed aan props.price_excl zodat je de date juist meegeeft. -->
          <TextBottomDivider title="INSCHRIJVINGSPRIJS" priceExclBtw="491.74" priceIncl="595" />
          <TextBottomDivider title="+ grondstoffen" priceExclBtw="491.74" priceIncl="595" />
          <TextBottomDivider
            title="TOTAALPRIJS INCL. KOSTEN"
            priceExclBtw="491.74"
            priceIncl="595"
          />

          <div class="flex justify-between text-red-600 font-bold">
            <span class="text-2xl">TOTAALPRIJS INCL. KOSTEN</span>
            <div class="flex justify-between">
              <div>
                <!-- juiste data inladen voor de prijzen, de titels mogen blijven staan. denk goed aan props.price_excl zodat je de date juist meegeeft. -->
                <span>€ 491.74</span>
                <span class="ml-2 text-gray-500">excl. btw</span>
              </div>
              <div>
                <span class="ml-4 text-red-600">€ 595</span>
                <span class="ml-2">incl.</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4">BESPARINGEN</h2>
          <!-- hier moet nog een v-if komen die de boolean waarde van opleidingscheques checkt -->
          <div class="flex gap-2">
            <AppIcon icon="checkmark" size="logo" class="mt-[-7px]" />
            <p class="mb-2">
              Bespaar dankzij <span class="font-bold">opleidingscheques</span> elk jaar vanaf
              september tot 250 euro (*) bij SyntraPXL. Meer informatie over opleidingscheques.
            </p>
          </div>
          <!-- hier moet nog een v-if komen die de boolean waarde van opleidingsverlof checkt -->
          <div class="flex gap-2">
            <AppIcon icon="checkmark" size="logo" class="mt-[-7px]" />
            <p class="mb-2">
              Deze opleiding komt in aanmerking voor
              <span class="font-bold">Vlaams opleidingsverlof.</span> Meer info & voorwaarden.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
