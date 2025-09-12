<!-- src/views/Works.vue -->
<template>
  <section class="bg-black text-white py-16 px-6 justify-center">
    <div class="max-w-6xl w-full rounded-2xl shadow-lg p-10 bg-[#101010]">

      <!-- Título -->
      <h2 class="text-3xl font-bold inline-block pb-1 mb-10 
          border-b-4 border-transparent 
          bg-gradient-to-r from-teal-500 to-green-700 bg-[length:100%_4px] bg-no-repeat bg-bottom">
        Portafolio
      </h2>

      <!-- Sección What I do -->
      <div class="">
        <!-- Grid de servicios -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
            <div class="max-w-sm border rounded-lg shadow-sm bg-zinc-900-800 border-gray-700" v-for="(proyect, index) in portfolio" :key="index">
              <a>
                  <img class="rounded-t-lg" :src="proyect.image" alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ proyect.title }}</h5>
                  </a>
                  <a :href="proyect.link" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gradient-to-r from-teal-500 to-green-700 text-white rounded-lg hover:from-teal-600 hover:to-green-800">
                      Ver proyecto
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
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
