<script setup>
  import {watchEffect, ref} from 'vue';
  import { useWeatherStore } from '@/stores/weather';
  import isDayTime from '@/config/isDay.config';
  import tConverter from '@khanisak/temperature-converter';

  const weatherStore = useWeatherStore();
  const forecast = ref(null);
  function farenheitToCelcius(temperature){
    return Math.floor(tConverter.convert(temperature, tConverter.unit.Fahrenheit,  tConverter.unit.Celcius))
  }
  watchEffect(() => {
    forecast.value = weatherStore.$state.dailyForecast;
  })
</script>
<template>
    <q-card :class="`my-card ${$q.screen.lt.sm ? 'q-mt-md' : ''} ${$q.dark.isActive ? 'card--dark' : ''}`" v-if="forecast != null">
      <q-card-section>
        <p class="text-h6 q-ma-none">Rincian</p>
      </q-card-section>
        <q-separator />
        <q-card-section> 
          <div class="row full-width justify-between">
            <div class="col-6">
              <span class="text-grey">Kemungkinan Hujan</span>
                <p class="q-ma-none" >{{isDayTime ? forecast.Day.RainProbability : forecast.Night.RainProbability}}% <q-icon v-if="$q.screen.gt.xs" name="sym_s_rainy" size="20px" class="float-right q-mr-lg" /></p>
            </div>
            <div class="col-6 ">
              <p class="q-ma-none text-grey">Temperature</p>
              <p class="inline" >Max: {{farenheitToCelcius(forecast.Temperature.Maximum.Value)}}&#176 C<span class="q-ml-sm">Min: {{farenheitToCelcius(forecast.Temperature.Minimum.Value)}}&#176 C</span><q-icon v-if="$q.screen.gt.xs" name="sym_s_thermometer" size="20px" class="float-right q-mr-lg" /></p>
            </div>
            <div class="col-6 ">
              <p class="q-ma-none text-grey">Indeks UV</p>
              <p class="inline">{{forecast.AirAndPollen[5].Value}} <span class="q-ml-md">{{forecast.AirAndPollen[5].Category}}</span><q-icon v-if="$q.screen.gt.xs" name="sunny" size="20px" class="float-right q-mr-lg" /></p>
            </div>
            <div class="col-6">
              <p class="q-ma-none text-grey">Suhu asli</p>
              <p class="inline">{{forecast.RealFeelTemperature.Maximum.Phrase}}<q-icon v-if="$q.screen.gt.xs" name="sym_s_mood" size="20px" class="float-right q-mr-lg" /></p>
            </div>
          </div>
        </q-card-section>
    </q-card>
</template>