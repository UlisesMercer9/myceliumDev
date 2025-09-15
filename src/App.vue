<template>
  <div class="bg-black text-white min-h-screen md:flex md:flex-col items-center justify-center relative overflow-hidden">

    <!-- Fondo decorativo -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-70 pointer-events-none">
    </div>

    <!-- Navbar móvil (hamburguesa) -->
    <div class="md:hidden flex justify-end items-center p-4 relative">
      <button @click="toggleMenu" class="focus:outline-none">
        <!-- Icono hamburguesa -->
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <!-- Icono cerrar -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>


    <!-- Menú lateral móvil -->
    <transition name="slide">
      <aside v-if="menuOpen" class="fixed top-0 left-0 w-64 h-full bg-zinc-900 z-30 shadow-lg p-6">
        <ul class="flex flex-col gap-4">
          <li v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-700 transition-colors duration-300"
              @click="toggleMenu"
            >
              <span v-html="link.icon" class="w-4 h-4"></span>
              <span>{{ link.label }}</span>
            </router-link>
          </li>
        </ul>
      </aside>
    </transition>

    <!-- Navbar -->
    <nav class="hidden md:flex w-full justify-center mt-12 z-10" >
      <ul class="flex flex-wrap gap-3">
        <!-- Home -->
        <li>
          <router-link
            to="/"
            class="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-green-700 text-white font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h6m8-11v11a1 1 0 01-1 1h-6"/>
            </svg>
            <span>Home</span>
          </router-link>
        </li>

        <!-- About -->
        <li>
          <router-link
            to="/about"
            class="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-700 
                  flex items-center gap-2 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0"/>
            </svg>
            <span>Acerca de mí</span>
          </router-link>
        </li>

        <!-- Resume -->
        <li>
          <router-link
            to="/resume"
            class="px-4 py-2 rounded-lg bg-zinc-900 
                  hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-700 
                  flex items-center gap-2 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 3h6l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6"/>
            </svg>
            <span>Carrera</span>
          </router-link>

        </li>

        <!-- Works -->
        <li>
          <router-link
            to="/works"
            class="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-700 
                  flex items-center gap-2 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 7l-8-4-8 4 8 4 8-4zm0 0v10l-8 4-8-4V7"/>
            </svg>
            <span>Portafolio</span>
          </router-link>
        </li>

        <!-- Contact -->
        <li>
          <router-link
            to="/contact"
            class="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-700 
                  flex items-center gap-2 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Contacto</span>
          </router-link>
        </li>

        <!-- Toggle tema -->
        <!-- <li>
          <button class="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-7.657l1.414 1.414M4.929 19.071l1.414-1.414m12.728 0l-1.414-1.414M6.343 4.343L4.929 5.757M12 8a4 4 0 100 8 4 4 0 000-8z"/>
            </svg>
          </button>
        </li> -->
      </ul>
    </nav>

    <!-- Aquí se renderizan las vistas -->
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const links = [
  {
    to: "/",
    label: "Home",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h6m8-11v11a1 1 0 01-1 1h-6"/></svg>`
  },
  {
    to: "/about",
    label: "Acerca de mí",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0"/></svg>`
  },
  {
    to: "/resume",
    label: "Carrera",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h6l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6"/></svg>`
  },
  {
    to: "/works",
    label: "Portafolio",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4 8 4 8-4zm0 0v10l-8 4-8-4V7"/></svg>`
  },
  {
    to: "/contact",
    label: "Contacto",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
  }
];
</script>

<style>
/* Animación del menú lateral */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
