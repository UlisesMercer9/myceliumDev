import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Works from '../views/Works.vue'
import Blogs from '../views/Blogs.vue'
import Contact from '../views/Contact.vue'
import Thanks from '../views/Thanks.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/works', name: 'Works', component: Works },
  { path: '/blogs', name: 'Blogs', component: Blogs },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/thanks', name: 'Thanks', component: Thanks }
]

const router = createRouter({
  history: createWebHistory(), // Usa el modo history
    routes
})

export default router
