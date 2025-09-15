<!-- src/views/Works.vue -->
<template>
  <section class="bg-black text-white py-16 px-6 flex justify-center">
    <div class="max-w-6xl w-full rounded-2xl shadow-lg p-10 bg-[#101010]">

      <!-- Título -->
      <h2
        class="text-3xl font-bold inline-block pb-1 mb-10 
          border-b-4 border-transparent 
          bg-gradient-to-r from-teal-500 to-green-700 bg-[length:100%_4px] bg-no-repeat bg-bottom"
      >
        Portafolio
      </h2>

      <!-- Grid de proyectos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(proyect, index) in portfolio"
          :key="index"
          class="group bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Imagen -->
          <a :href="proyect.link" target="_blank">
            <img
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              :src="proyect.image"
              :alt="proyect.title"
            />
          </a>

          <!-- Contenido -->
          <div class="p-5 flex flex-col justify-between h-44">
            <h5 class="mb-3 text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">
              {{ proyect.title }}
            </h5>
            <a
              :href="proyect.link"
              target="_blank"
              class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-teal-500 to-green-700 text-white rounded-lg shadow hover:from-teal-600 hover:to-green-800 transition-colors duration-300"
            >
              Ver proyecto
              <svg
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const portfolio = ref([
  {
    title: 'Life Beyond Work',
    image: '/beyond.png',
    link: 'https://my.lifebeyondwork.com/'
  },
  {
    title: 'ITICS',
    image: '/ITICS.png',
    link: 'https://ingentecnologias.com/'
  },
  {
    title: 'Landing Bolsa de Trabajo',
    image: '/trabajobr.png',
    link: 'https://landingbolsatrabajobr.netlify.app/'
  },
  {
    title: 'Landing Head Hunter',
    image: '/hunter.png',
    link: 'https://headhunterbr.netlify.app/'
  },
  {
    title: 'Landing Tea + Tea',
    image: '/tea.png',
    link: 'https://teaplustea.netlify.app/'
  }
]);
</script>

