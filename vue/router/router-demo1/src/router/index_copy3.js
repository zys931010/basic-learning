import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeRoot",
    // redirect: "/about",
    // redirect: { name: "About" },
    // alias: "/home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/home",
    name: "Home",
    // redirect: "/",
    redirect: { name: "HomeRoot" },
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "About",
    // alias: "/a",  // 一个别名
    alias: ["/a", "/b", "/c"], // 多个别名
    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "关于我的",
    },
  },
  {
    path: "/user", //配置动态路由 /user/:id
    name: "User",
    component: () => import("@/views/UserView.vue"),
    meta: {
      title: "个人中心",
    },
    children: [
      {
        // /user
        path: "",
        // 默认user显示 下面这个组件
        component: () => import("@/views/UserView/MyOrder.vue"),
        meta: {
          title: "个人中心",
        },
      },
      {
        path: "order", // /user/order
        name: "MyOrder",
        component: () => import("@/views/UserView/MyOrder.vue"),
        meta: {
          title: "个人订单",
        },
      },
      {
        path: "setting", // /user/setting
        name: "MySetting",
        component: () => import("@/views/UserView/MySetting.vue"),
        meta: {
          title: "个人设置",
        },
      },
      // 配置动态路由
      {
        path: "page/:id", // /user/page/11
        name: "MyPage",
        // to = $route
        // redirect: (to) => ({
        //   path: "article",
        //   query: { name: "张三", age: to.params.id },
        // }),
        alias: ["p/:id", "t/:id"], //带参数的多个别名
        component: () => import("@/views/UserView/MyPage.vue"),
        meta: {
          title: "个人页面",
        },
      },
      {
        path: "article",
        name: "MyArticle",
        component: () => import("@/views/UserView/MyArticle.vue"),
        meta: {
          title: "个人文章",
        },
      },
    ],
  },
  {
    path: "/content",
    name: "Content",
    component: () => import("@/views/ContentView.vue"),
    meta: {
      title: "主要内容",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

router.afterEach((to, from, failure) => {
  console.log("to......." + to.fullPath);
  console.log("from......." + from.fullPath);
  console.log("failure......." + failure);
});

export default router;
