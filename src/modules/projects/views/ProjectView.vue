<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'Proyecto sin nombre'" />
    </section>
    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in project?.tasks"
              :key="task.id"
              class="hover:bg-base-300"
            >
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="checkbox checkbox-primary"
                  @change="projectStore.toogleTask(project!.id, task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>
                {{ formatDate(task.completedAt) }}
              </td>
            </tr>
            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea"
                  v-model="newTask"
                  @keyup.enter="addTaskToProject"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from "@/modules/common/components/BreadCrumbs.vue";
import { useProjectsStore } from "../store/projects.store.ts";
import { ref, watch } from "vue";
import type { Project } from "../interfaces/project.interface.ts";
import { useRouter } from "vue-router";

interface Props {
  id: string;
}
const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | undefined>(undefined);
const newTask = ref("");

const addTaskToProject = () => {
  if (!project.value) return;

  projectStore.addTaskToProject(project.value.id, newTask.value);

  newTask.value = "";
};

const formatDate = (date: Date | undefined) =>
  !date ? "-" : date.toLocaleString();

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find(
      (project) => project.id === props.id,
    );

    if (!project.value) router.replace({ name: "projects" });
  },
  { immediate: true },
);
</script>
