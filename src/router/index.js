import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "@/pages/schedule.vue";
import Home from "@/pages/landing.vue";
import Dashboard from "@/pages/dashboard.vue";
import Page from "@/pages/page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Page,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        auth: true,
      },
      {
        path: "schedule",
        name: "Schedule",
        component: Schedule,
        auth: true,
      },
      {
        path: "classes",
        name: "Classes",
        component: Dashboard,
        auth: true,
      },
      {
        path: "user",
        name: "User",
        component: Dashboard,
        auth: true,
      },
    ],
  },
  {
    path: "/landing",
    name: "Landing",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
