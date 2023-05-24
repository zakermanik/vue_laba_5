import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Pizzas from '@/pages/Pizzas'
import Contacts from '@/pages/Contacts'
import currentPizza from '@/pages/currentPizza'
import Animal from '@/components/Animal.vue';
import diffAnimal from '@/components/diffAnimal.vue';
import Animals from '@/components/Animals.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: Pizzas
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/pizzas/:id',
    name: 'pizza',
    component: currentPizza
  },
  {
    path: '/animals',
    name: 'animals',
    component: Animals
  },
  {
    path: '/animals/:id',
    name: 'animal',
    component: Animal,
    props: true
  },
  {
    path: '/animals/kind/:id',
    name: 'diffAnimal',
    component: diffAnimal,
    props: true
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;
