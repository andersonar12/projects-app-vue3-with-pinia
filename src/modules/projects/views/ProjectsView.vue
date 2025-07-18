<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr class="hover:bg-base-300">
          <th>1</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <FabButton @click="console.log('click')">
      <AddCircle />
    </FabButton>
  </div>
</template>
<script setup lang="ts">
import AddCircle from "@/modules/common/icons/AddCircle.vue";
import FabButton from "../components/FabButton.vue";
</script>
<style lang=""></style>
