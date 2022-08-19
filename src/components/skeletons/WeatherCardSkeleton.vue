<template>
  <q-card
    :class="`my-card ${
      $q.dark.isActive ? 'bg-blue-10' : 'bg-light-blue-5'
    } q-pb-lg`"
  >
    <q-card-section class="q-mx-sm">
      <p class="text-h6 text-white">
        <q-icon name="location_on" size="2em" color="white" />
      </p>
      <div class="full-width text-white">
        <div class="text-center justify-center">
          <q-skeleton type="circle" class="text-center" />
          <span class="text-h5 block"><q-skeleton type="text" /></span>
          <span class="text-h2"><q-skeleton type="text" class="inline" /></span>
        </div>
        <div class="row">
          <div class="col-8">
            <p class="text-h6">
              <q-icon name="air" size="2em" class="q-mr-md" />Angin :
            </p>
          </div>
          <div class="col-4">
            <p class="text-h6"><q-skeleton type="text" class="inline" /></p>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <p class="text-h6">
              <q-icon name="water_drop" size="2em" class="q-mr-md" />Kualitas
              Udara :
            </p>
          </div>
          <div class="col-4">
            <p class="text-h6"><q-skeleton type="text" /></p>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
