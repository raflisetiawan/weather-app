<script setup>
import { useDrawerStore } from "@/stores/drawer";
const drawerStore = useDrawerStore();

import { useQuasar } from "quasar";
const quasar = useQuasar();
</script>

<template>
  <q-drawer
    overlay
    v-model="drawerStore.$state.drawerOpen"
    side="left"
    bordered
    :class="`${$q.dark.isActive ? 'body--dark' : 'body--light'}`"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template
          v-for="(menuItem, index) in drawerStore.$state.menu"
          :key="index"
        >
          <q-item
            clickable
            @click="drawerStore.changeMode(index)"
            :active="menuItem.label === 'Outbox'"
            v-ripple
            :to="menuItem.link"
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
