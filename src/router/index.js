import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Card from "@/views/Card.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    props: true
  },
  {
    path: '/card',
    name: 'card',
    component: Card,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;