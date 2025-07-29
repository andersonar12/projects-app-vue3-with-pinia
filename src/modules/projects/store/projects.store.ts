import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
import type { Project } from "../interfaces/project.interface";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@vueuse/core";

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref(useLocalStorage<Project[]>("projects", []));

  const addProject = (projectName: string) => {
    projects.value.push({
      id: uuidv4(),
      name: projectName,
      tasks: [],
    });
  };

  const removeProject = (id: string) => {
    projects.value = projects.value.filter((project) => project.id !== id);
  };

  const addTaskToProject = (projectId: string, taskName: string) => {
    const project = projects.value.find((project) => project.id === projectId);
    if (project) {
      project.tasks.push({
        id: uuidv4(),
        name: taskName,
      });
    }
  };

  const toogleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((project) => project.id === projectId);
    if (project) {
      const task = project.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completedAt = task.completedAt ? undefined : new Date();
      }
    }
  };

  return {
    //PROPERTIES
    projects,
    //GETTERS
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;

        const completed = project.tasks.filter(
          (task) => task.completedAt,
        ).length;

        const completion = total === 0 ? 0 : (completed / total) * 100;
        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: Math.round(completion),
        };
      });
    }),
    //ACTIONS
    addProject,
    removeProject,
    addTaskToProject,
    toogleTask,
  };
});
