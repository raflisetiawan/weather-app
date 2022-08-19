<script setup>
  import {useWeatherStore} from "@/stores/weather";
  import {ref, watchEffect, onMounted} from "vue";
  import isDayTime from "../../config/isDay.config";
  import getDayString from "../../config/getDay.config";
  import tConverter from '@khanisak/temperature-converter';
  import ForecastListIcon from '@/components/ui/ForecastListIcon.vue';

  const weatherStore = useWeatherStore();
  const d = new Date("2022-08-16T07:00:00+07:00");
  const forecasts = ref();
  watchEffect(() => {
    forecasts.value = weatherStore.$state.dailyForecasts;
  })
</script>
<template>
    <q-list :class="`q-pa-sm ${$q.screen.lt.sm ? 'q-mt-md' : ''} ${$q.dark.isActive ? 'shadow-forecast-list' : 'rounded-borders shadow-2'}`">
    <template v-for="forecast in forecasts" :key="forecast.EpochDate">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <ForecastListIcon :Category="forecast.Day.Icon" />
        </q-item-section>
        <q-item-section no-wrap>
          <div>
            <span>{{getDayString(new Date(forecast.Date).getDay())}} - {{isDayTime ? forecast.Day.IconPhrase : forecast.Night.IconPhrase}} </span>
            <span class="float-right">{{Math.floor(tConverter.convert(forecast.Temperature.Maximum.Value, tConverter.unit.Fahrenheit,  tConverter.unit.Celcius))}}&#176</span>
          </div>
        </q-item-section>
      </q-item>
      </template>
    </q-list>
</template>