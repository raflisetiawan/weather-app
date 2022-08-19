<script setup async>
import { defineAsyncComponent, onMounted, watchEffect } from "vue";
import { useWeatherStore } from "@/stores/weather";
import { useQuasar } from "quasar";

const WeatherCard = defineAsyncComponent(() =>
  import("@/components/ui/WeatherCard.vue")
);
const ForecastList = defineAsyncComponent(() =>
  import("@/components/ui/ForecastList.vue")
);
const DetailCard = defineAsyncComponent(() =>
  import("@/components/ui/DetailCard.vue")
);
import WeatherCardSkeleton from "@/components/skeletons/WeatherCardSkeleton.vue";
import ForecastListSkeleton from "@/components/skeletons/ForecastListSkeleton.vue";
import DetailCardSkeleton from "@/components/skeletons/DetailCardSkeleton.vue";
import Clock from "@/components/ui/Clock.vue";

const weatherStore = useWeatherStore();

onMounted(() => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    await weatherStore.getLocationKey(
      position.coords.latitude,
      position.coords.longitude
    );
    await weatherStore.getWeatherData(weatherStore.$state.locationKey);
    await weatherStore.getFiveDayWeather(weatherStore.$state.locationKey);
  });
});
</script>

<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-4 col-sm-10 col-xs-12 q-pa-md">
        <Suspense>
          <template #default>
            <WeatherCard />
          </template>
          <template #fallback>
            <WeatherCardSkeleton />
          </template>
        </Suspense>
      </div>
      <div class="col-md-8 q-pa-md col-sm-10 col-xs-12">
        <Clock />
        <Suspense>
          <template #default>
            <ForecastList :class="`${$q.screen.gt.sm ? 'q-mb-md' : ''}`" />
          </template>
          <template #fallback>
            <ForecastListSkeleton />
          </template>
        </Suspense>
        <Suspense>
          <template #default>
            <DetailCard />
          </template>
          <template #fallback><DetailCardSkeleton /></template>
        </Suspense>
      </div>
    </div>
  </div>
</template>
