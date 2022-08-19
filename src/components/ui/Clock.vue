<script setup>
import { ref } from "vue";
const time = ref("");
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  time.value = hh + ":" + mm + " " + session;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
</script>
<template>
  <div class="row">
    <div class="col-6">
      <span class="text-h5">{{ time }}</span>
    </div>
    <div class="col-6">
      <span class="text-h6">
        {{
          new Date().toLocaleDateString("id", {
            day: "numeric",
            weekday: "long",
            month: "long",
            year: "numeric",
          })
        }}
      </span>
    </div>
  </div>
</template>
