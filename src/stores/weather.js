import { defineStore } from "pinia";
import {
  makeLocationUrl,
  makeForecastUrl,
  makeForecastsUrl,
} from "../config/key.config";
import axios from "axios";

export const useWeatherStore = defineStore({
  id: "weather",
  state: () => ({
    locationKey: null,
    locationName: "",
    errorMessage: "",
    headline: null,
    headlineForecasts: null,
    dailyForecasts: null,
    dailyForecast: null,
  }),
  actions: {
    async getLocationKey(latitude, longitude) {
      try {
        const response = await axios.get(makeLocationUrl(latitude, longitude));
        this.locationKey = response.data.Key;
        this.locationName = response.data.LocalizedName;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    async getWeatherData(locationKey) {
      try {
        const response = await axios.get(makeForecastUrl(locationKey));
        this.headline = response.data.Headline;
        this.dailyForecast = response.data.DailyForecasts[0];
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    async getFiveDayWeather(locationKey) {
      try {
        const response = await axios.get(makeForecastsUrl(locationKey));
        this.headlineForecasts = response.data.Headline;
        this.dailyForecasts = response.data.DailyForecasts;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
});
