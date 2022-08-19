<script setup>
defineProps({
  Category: Number,
});
</script>
<template>
  <q-icon
    v-if="
      Category == 14 ||
      Category == 12 ||
      Category == 13 ||
      Category == 18 ||
      Category == 26
    "
    name="sym_s_rainy"
    size="30px"
    color="blue"
  />
  <q-icon
    v-if="Category == 1 || Category == 2"
    name="sunny"
    size="30px"
    color="yellow"
  />
  <q-icon
    v-if="Category == 3 || Category == 4 || Category == 5"
    name="sym_s_partly_cloudy_day"
    size="30px"
    color="blue"
  />
  <q-icon
    v-if="Category == 6 || Category == 7 || Category == 8 || Category == 11"
    name="o_cloud"
    size="30px"
    color="blue"
  />
  <q-icon
    v-if="Category == 15 || Category == 16 || Category == 17 || Category == 11"
    name="o_thunderstorm"
    size="30px"
    color="blue"
  />
</template>
