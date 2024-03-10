import { createRouter, createWebHistory } from 'vue-router';
import 'process/browser';
import Home from '@/views/Home.vue';
import { configure } from 'process/browser'; // Import from the browser version of process


if (typeof process === 'undefined') {
    globalThis.process = {
      env: {},
    };
  }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
