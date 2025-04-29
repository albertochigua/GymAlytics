import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Entrenamientos from "@/views/Entrenamientos.vue";
import Nutricion from "@/views/Nutricion.vue";
import Metas from "@/views/Metas.vue";

const routes = [
  { path: "/", component: Dashboard, name: "Dashboard" },
  {
    path: "/entrenamientos",
    component: Entrenamientos,
    name: "Entrenamientos",
  },
  { path: "/nutricion", component: Nutricion, name: "Nutricion" },
  { path: "/metas", component: Metas, name: "Metas" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
