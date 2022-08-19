<script setup>
const forecasts = [1, 2, 3, 4, 5];
</script>

<template>
  <q-list
    :class="`q-pa-sm ${$q.screen.lt.sm ? 'q-mt-md' : ''} ${
      $q.dark.isActive ? 'shadow-forecast-list' : 'rounded-borders shadow-2'
    }`"
  >
    <template v-for="(forecast, index) in forecasts" :key="index">
      <q-item clickable v-ripple>
        <q-item-section no-wrap>
          <div>
            <span><q-skeleton animation="pulse-x" /></span>
          </div>
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>
