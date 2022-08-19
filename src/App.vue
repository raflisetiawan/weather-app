<script setup>
import Header from "@/components/layouts/Header.vue";
import Drawer from "@/components/layouts/Drawer.vue";
import ProgressLinear from "@/components/ui/ProgressLinear.vue";
import { useQuasar } from "quasar";
import { onMounted } from "vue";
const $q = useQuasar();

onMounted(() => {
  if (localStorage.getItem("darkMode") == "dark") {
    $q.dark.set(true);
  }
});
</script>

<template>
  <ProgressLinear />
  <q-layout
    view="hHh lpR fFf"
    :class="`${$q.dark.isActive ? 'body--dark' : 'body--light'}`"
  >
    <Header v-if="$" />
    <Drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
