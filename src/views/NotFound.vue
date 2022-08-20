<script setup>
import { onMounted } from "vue";

onMounted(() => (document.title = "Halaman tidak ditemukan"));
</script>
<template>
  <div class="q-pa-md fixed-center">
    <h3>404 Page Not Found</h3>
    <q-btn to="/" color="blue">Kembali</q-btn>
  </div>
</template>
