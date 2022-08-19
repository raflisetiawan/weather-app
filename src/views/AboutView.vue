<script setup>
const contents = [
  {
    title: "Frontend Framework: ",
    name: "Vue.js",
    link: "https://vuejs.org",
  },
  {
    title: "UI/UX Framework: ",
    name: "Quasar",
    link: "https://quasar.dev",
  },
  {
    title: "Backend: ",
    name: "Firebase",
    link: "https://firebase.google.com",
  },
  {
    title: "Penyedia data API: ",
    name: "AccuWeather API's",
    link: "https://developer.accuweather.com/",
  },
];
</script>
<template>
  <p class="text-h6 text-center">
    Aplikasi Web ramalan cuaca di daerah anda dengan rincian dan ramalan 5 hari
    kedepan
  </p>
  <div class="container q-ma-auto q-pa-md">
    <template v-for="(content, index) in contents" :key="index">
      <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-6">
          <span class="text-h6">{{ content.title }}</span>
        </div>
        <div class="col-md-9 col-sm-8 col-xs-6">
          <span class="text-h6" v-if="content.link === null">{{
            content.name
          }}</span>
          <a
            v-else
            target="_blank"
            :href="content.link"
            :class="`${$q.dark.isActive ? 'text-white' : 'text-black'} text-h6`"
            >{{ content.name }}</a
          >
        </div>
      </div>
    </template>
  </div>
</template>
