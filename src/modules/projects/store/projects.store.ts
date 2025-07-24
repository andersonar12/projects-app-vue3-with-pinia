import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
import type { Project } from "../interfaces/project.interface";
import { v4 as uuidv4 } from "uuid";
const initiaLoad: Project[] = [
  {
    id: uuidv4(),
    name: "Project 1",
    tasks: [],
  },
  {
    id: uuidv4(),
    name: "Project 2",
    tasks: [],
  },
];

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref<Project[]>(initiaLoad);

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

  return {
    //PROPERTIES
    // projects,
    //GETTERS
    projectList: computed(() => [...projects.value]),
    //ACTIONS
    addProject,
    removeProject,
  };
});
