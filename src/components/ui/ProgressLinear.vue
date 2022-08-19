<script setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "vue-demi";
import { useProgressStore } from "@/stores/progress";

const progressStore = useProgressStore();
const bar = ref(null);
watchEffect(() => {
  progressStore.$state.progress = bar.value;
});
</script>

<template>
  <q-ajax-bar ref="bar" color="primary" size="5px" skip-hijack />
</template>
