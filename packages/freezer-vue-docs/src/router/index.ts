import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const Button = () =>
  import("@freezer-ui-web-vue/components/button/docs/index.md");

const componentsDocsRoutes = [
  {
    name: "button",
    component: Button,
  },
];

let routes: RouteRecordRaw[] = [];

componentsDocsRoutes.forEach((route) => {
  routes.push({
    path: `/vue-docs/${route.name}`,
    component: route.component,
  });
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // 滚动到顶部
  },
});

export default router;
