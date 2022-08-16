import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/user", //配置动态路由 /user/:id
    name: "User",
    component: () => import("@/views/UserView.vue"),
    children: [
      {
        // /user
        path: "",
        // 默认user显示 下面这个组件
        component: () => import("@/views/UserView/MyOrder.vue"),
      },
      {
        path: "order", // /user/order
        name: "MyOrder",
        component: () => import("@/views/UserView/MyOrder.vue"),
      },
      {
        path: "setting", // /user/setting
        name: "MySetting",
        component: () => import("@/views/UserView/MySetting.vue"),
      },
      // 配置动态路由
      {
        path: "page/:id", // /user/page/11
        name: "MyPage",
        component: () => import("@/views/UserView/MyPage.vue"),
      },
      {
        path: "article",
        name: "MyArticle",
        component: () => import("@/views/UserView/MyArticle.vue"),
      },
    ],
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
