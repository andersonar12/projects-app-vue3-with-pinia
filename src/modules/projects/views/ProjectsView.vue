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
        <tr
          v-for="(project, index) in projectsStore.projectsWithCompletion"
          class="hover:bg-base-300"
          :key="project.id"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress
              class="progress progress-primary w-56 mr-3"
              :value="project.completion"
              max="100"
            ></progress>
            {{ project.completion }}%
            <button
              class="btn btn-circle btn-error p-1"
              @click="projectsStore.removeProject(project.id)"
            >
              <TrashIcon />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="projectsStore.addProject($event)"
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
import { useProjectsStore } from "../store/projects.store.ts";
import TrashIcon from "@/modules/common/icons/TrashIcon.vue";

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
<style lang=""></style>
