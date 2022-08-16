import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    // component: () => import("@/views/HomeView.vue"),
    components: {
      default: () => import("@/views/AboutView.vue"),
      Home: () => import("@/views/HomeView.vue"),
      User: () => import("@/views/UserView.vue"),
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/content",
    name: "Content",
    component: () => import("@/views/ContentView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
