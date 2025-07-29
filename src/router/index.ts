import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/projects",
      component: () => import("../modules/projects/layouts/ProjectsLayout.vue"),
      children: [
        {
          path: "projects",
          name: "projects",
          component: () => import("../modules/projects/views/ProjectsView.vue"),
        },
        {
          path: "project/:id",
          props: true,
          name: "project",
          component: () => import("../modules/projects/views/ProjectView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/projects",
    },
  ],
});

export default router;
