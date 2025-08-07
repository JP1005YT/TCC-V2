import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Social from '@/views/Social.vue'
import Fitness from '@/views/Fitness.vue'
import Doencas from '@/views/Doencas.vue'
import Alimentos from '@/views/Alimentos.vue'
import Calculador from '@/views/Calculador.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title : 'FPH | Home'
    }
  },
  {
    path: '/social',
    name: 'Social',
    component: Social,
    meta: {
      title : 'FPH | Social'
    }
  },
  {
    path: '/fitness',
    name: 'Fitness',
    component: Fitness,
    meta: {
      title : 'FPH | Fitness'
    }
  },
  {
    path: '/doencas',
    name: 'Doencas',
    component: Doencas,
    meta: {
      title : 'FPH | Doencas'
    }
  },
  {
    path: '/alimentos',
    name: 'Alimentos',
    component: Alimentos,
    meta: {
      title : 'FPH | Alimentos'
    }
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: Calculador,
    meta: {
      title : 'FPH | Calculadora'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title : 'FPH | Login'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default App Title';
  next();
});

export default router
