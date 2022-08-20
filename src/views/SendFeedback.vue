<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { collection, addDoc, getFirestore } from "firebase/firestore";

onMounted(() => (document.title = "Tentang"));

const $q = useQuasar();
const db = getFirestore();
const name = ref(null);
const message = ref(null);
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await addDoc(collection(db, "feedbacks"), {
      name: name.value,
      message: message.value,
    });
    setTimeout(() => {
      $q.notify({
        progress: true,
        message: "Berhasil, terkirim",
        icon: "done",
        color: "green",
        textColor: "white",
      });
    }, 2000);
    loading.value = false;
  } catch (error) {
    setTimeout(() => {
      $q.notify({
        progress: true,
        message: error.message,
        icon: "error",
        color: "red",
        textColor: "white",
      });
    }, 2000);
    loading.value = false;
  }
};
</script>
<template>
  <div class="q-px-xl q-pt-md">
    <div class="row">
      <div class="col-md-6 col-sm-10 col-xs-10">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            v-model="name"
            label="Masukkan nama"
            outlined
            :color="$q.dark.isActive ? 'light-blue-2' : 'blue'"
          />

          <q-input
            type="text"
            v-model="message"
            label="Kesan, Kritik, dan saran"
            outlined
            autogrow
            lazy-rules
            :color="$q.dark.isActive ? 'light-blue-2' : 'blue'"
            :rules="[(val) => (val !== null && val !== '') || 'Harus di isi']"
          />
          <q-btn
            label="Kirim"
            icon="send"
            type="submit"
            color="primary"
            :loading="loading"
          />
        </q-form>
      </div>
    </div>
  </div>
</template>
