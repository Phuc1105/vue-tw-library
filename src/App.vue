<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watch } from "vue";
import router from "./router";

watch(
  () => router.currentRoute.value.path,
  () => {
    window.scrollTo(0, 0);
  }
);
</script>

<template>
  <RouterView />
</template>