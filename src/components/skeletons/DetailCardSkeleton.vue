<template>
  <q-card
    :class="`my-card ${$q.screen.lt.sm ? 'q-mt-md' : ''} ${
      $q.dark.isActive ? 'card--dark' : ''
    }`"
  >
    <q-card-section>
      <p class="text-h6 q-ma-none">Rincian</p>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="row full-width justify-between">
        <div class="col-6">
          <span class="text-grey">Kemungkinan Hujan</span>
          <p class="q-ma-none"><q-skeleton type="text" /></p>
        </div>
        <div class="col-6">
          <p class="q-ma-none text-grey">Temperature</p>
          <p class="inline q-ml-md"><q-skeleton type="text" /></p>
        </div>
        <div class="col-6">
          <p class="q-ma-none text-grey">Indeks UV</p>
          <p class="inline"><q-skeleton type="text" /></p>
        </div>
        <div class="col-6">
          <p class="q-ma-none text-grey">Suhu asli</p>
          <p class="inline q-ml-md"><q-skeleton type="text" /></p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
