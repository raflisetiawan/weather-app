<script setup>
import WeatherCardIcon from "@/components/ui/WeatherCardIcon.vue";
import {useWeatherStore} from "@/stores/weather";
import {watchEffect, ref} from "vue";
import tConverter from '@khanisak/temperature-converter';
import isDayTime from "@/config/isDay.config";

const temperature = ref(null);
const dailyForecast = ref(null);
const headline = ref({});
const weatherStore = useWeatherStore();
watchEffect(() => {
    dailyForecast.value = weatherStore.$state.dailyForecast;
    headline.value = weatherStore.$state.headline;
    if(dailyForecast.value != null){
        temperature.value = dailyForecast.value.Temperature;
        temperature.value = Math.floor(tConverter.convert(temperature.value.Maximum.Value, tConverter.unit.Fahrenheit,  tConverter.unit.Celcius));
    }
})

</script>
<template>
    <q-card :class="`my-card ${$q.dark.isActive ? 'bg-blue-10' : 'bg-light-blue-5'} q-pb-lg`" v-if="dailyForecast != null">
        <q-card-section class="q-mx-sm">
        <p class="text-h6 text-white">
            <q-icon name="location_on" size="2em" color="white" />{{weatherStore.$state.locationName}}
        </p>
        <div class="full-width text-white">
            <div class="text-center">
                <WeatherCardIcon :IconNumber="isDayTime ? dailyForecast.Day.Icon : dailyForecast.Night.Icon" />
                <span class="text-h5 block">{{isDayTime ? dailyForecast.Day.IconPhrase : dailyForecast.Night.IconPhrase}}</span>
                <span class="text-h2" >{{temperature}}&#176</span>
            </div>
            <div class="row">
                <div class="col-8">
                    <p class="text-h6"><q-icon name="air" size="2em" class="q-mr-md" />Angin :</p>
                </div>
                <div class="col-4">
                    <p class="text-h6">{{isDayTime ? dailyForecast.Day.Wind.Speed.Value : dailyForecast.Night.Wind.Speed.Value}} mi/h</p> 
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-sm-8 col-xs-10">
                    <p class="text-h6"><q-icon name="water_drop" size="2em" class="q-mr-md" />Kualitas Udara :</p>
                </div>
                <div class="col-md-4 col-sm-8 col-xs-2">
                    <p class="text-h6">{{dailyForecast.AirAndPollen[0].Category}}</p> 
                </div>
            </div>
        </div>
        </q-card-section>
    </q-card>
</template>
