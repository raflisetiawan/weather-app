<script setup>
import Rainy from "@/components/icons/Rainy.vue";
import Sunny from "@/components/icons/Sunny.vue";
import Storm from "@/components/icons/Storm.vue";
import Cloudy from "@/components/icons/Cloudy.vue";
import { useWeatherStore } from "@/stores/weather";
import { ref, watchEffect } from "vue";

const weatherStore = useWeatherStore();
const weather = ref("");
defineProps({
  IconNumber: Number,
});
watchEffect(() => {
  weather.value = weatherStore.$state.headline.Category;
});
</script>

<template>
  <Sunny
    v-if="
      IconNumber == 1 ||
      IconNumber == 2 ||
      IconNumber == 33 ||
      IconNumber == 34 ||
      IconNumber == 35
    "
    class="weather-icon-lg"
  />
  <Rainy
    v-if="
      IconNumber == 14 ||
      IconNumber == 12 ||
      IconNumber == 13 ||
      IconNumber == 18 ||
      IconNumber == 26 ||
      IconNumber == 39 ||
      IconNumber == 40
    "
    class="weather-icon-lg"
  />
  <Storm
    v-if="
      IconNumber == 15 ||
      IconNumber == 16 ||
      IconNumber == 17 ||
      IconNumber == 41 ||
      IconNumber == 42 ||
      IconNumber == 11
    "
    class="weather-icon-lg"
  />
  <Cloudy
    v-if="
      IconNumber == 3 ||
      IconNumber == 4 ||
      IconNumber == 5 ||
      IconNumber == 6 ||
      IconNumber == 7 ||
      IconNumber == 8 ||
      IconNumber == 11 ||
      IconNumber == 38 ||
      IconNumber == 33 ||
      IconNumber == 34 ||
      IconNumber == 35 ||
      IconNumber == 36 ||
      IconNumber == 37
    "
    class="weather-icon-lg"
  />
</template>
