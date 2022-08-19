<script setup>
import { useDrawerStore } from "@/stores/drawer";
import { useQuasar } from "quasar";
const $q = useQuasar();
const drawerStore = useDrawerStore();
</script>

<template>
  <q-header
    reveal
    :class="`${
      !drawerStore.$state.drawerOpen ? 'transparent' : 'transparent shadow-2'
    } text-blue`"
  >
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="drawerStore.openingDrawer" />
    </q-toolbar>
  </q-header>
</template>
