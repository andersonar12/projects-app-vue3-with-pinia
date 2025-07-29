<template>
  <div class="flex items-center justify-between p-4 bg-base-200">
    <h2 class="text-3xl font-bold text-blue-600">
      <a @click="router.push('/projects')">Notion</a>
    </h2>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style>
a {
  cursor: pointer;
}
</style>
