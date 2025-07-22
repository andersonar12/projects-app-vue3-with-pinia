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
    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="onNewValue($event)"
      title="'Añadir Proyecto'"
      subtitle="'Ingrese los datos para añadir nuevo proyecto'"
    />

    <CustomModal :open="customModalOpen" @close="customModalOpen = false">
      <template #header>
        <h1 class="text-2xl">Titulo del modal</h1>
      </template>

      <template #body>
        <p>Contenido del modal</p>
      </template>

      <template #actions>
        <div class="flex justify-end mt-2">
          <button class="btn mr-4" @click="customModalOpen = false">
            Cerrar
          </button>
          <button class="btn btn-primary" @click="customModalOpen = false">
            Acpetar
          </button>
        </div>
      </template>
    </CustomModal>

    <FabButton @click="modalOpen = true">
      <AddCircle />
    </FabButton>
    <FabButton @click="customModalOpen = true" class="bottom-left">
      <ModalIcon />
    </FabButton>
  </div>
</template>
<script setup lang="ts">
import AddCircle from "@/modules/common/icons/AddCircle.vue";
import FabButton from "../../common/components/FabButton.vue";
import InputModal from "@/modules/common/components/InputModal.vue";
import { ref } from "vue";
import CustomModal from "@/modules/common/components/CustomModal.vue";
import ModalIcon from "@/modules/common/icons/ModalIcon.vue";

const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
<style lang=""></style>
