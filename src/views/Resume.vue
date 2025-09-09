<!-- src/views/Resume.vue -->
<template>
  <section class="bg-black text-white py-16 px-6  justify-center">
    <div class="max-w-6xl w-full rounded-t-2xl shadow-lg p-10 " style="background-color: #101010;">

      <!-- Título -->
      <h2 class="text-3xl font-bold inline-block pb-1 mb-10 
          border-b-4 border-transparent 
          bg-gradient-to-r from-teal-500 to-green-700 bg-[length:100%_4px] bg-no-repeat bg-bottom">
        Resumen
      </h2>

      <!-- Educación, Experiencia, Awards -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
    
        <!-- Experience -->
        <div>
          <h3 class="flex items-center text-xl font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 17v-2h6v2h5V7H4v10h5zm2-8h2v2h-2V9z" />
            </svg>
            Experiencia
          </h3>
          <div class="space-y-8">
            <div class="p-4 rounded-xl border text-zinc-600">
              <p class="text-gray-400 text-sm">2021 - Presente</p>
              <h4 class="font-bold text-white">Desarrollador Full-Stack</h4>
              <p class="text-gray-400 text-sm">Binnacle App.</p>
            </div>
            <div class="p-4 rounded-xl border text-zinc-600">
              <p class="text-gray-400 text-sm">2020 - 2021</p>
              <h4 class="font-bold text-white">Desarrollador Full-Stack</h4>
              <p class="text-gray-400 text-sm">Bolsa Rosa.</p>
            </div>
            <div class="p-4 rounded-xl border text-zinc-600">
              <p class="text-gray-400 text-sm">2019 - 2020</p>
              <h4 class="font-bold text-white">Desarrolador Front-End</h4>
              <p class="text-gray-400 text-sm">Minds Innovation.</p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h3 class="flex items-center text-xl font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
            </svg>
            Educación
          </h3>
          <div class="space-y-4">
            <div class="p-4 rounded-xl border text-zinc-600">
              <p class="text-gray-400 text-sm">2017-2019</p>
              <h4 class="font-bold text-white">Maestro en Sistemas Computacionales</h4>
              <p class="text-gray-400 text-sm">Instituto Tecnólogico Superior de Misantla, Misantla, Ver</p>
            </div>
            <div class="p-4 rounded-xl border text-zinc-600">
              <p class="text-gray-400 text-sm">2012 - 2017</p>
              <h4 class="font-bold text-white">Ing. en Tecnologías de la Información y Comunicación</h4>
              <p class="text-gray-400 text-sm">Instituto Tecnólogico Superior de Misantla, Misantla, Ver</p>
            </div>
          </div>
        </div>

        <!-- Awards -->
        <div>
          <h3 class="flex items-center text-xl font-semibold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4M7.5 21h9l-4.5-9L7.5 21zM12 3v6m0 0L9 6m3 3l3-3" />
            </svg>
            Logros
          </h3>
          <div class="space-y-4">
            <div class="p-4 rounded-xl border text-zinc-600">
              <p class="text-gray-400 text-sm">12 Abril 2021</p>
              <h4 class="font-bold text-white">
                <a href="https://www.mdpi.com/2071-1050/13/8/4285" target="_blank">
                  Bayesian Approach to Analyze Reading Comprehension
                </a>
              </h4>
              <p class="text-gray-400 text-sm">Multidisciplinary Digital Publishing Institute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl w-full rounded-b-2xl shadow-lg p-10" style="background-color: #0d0d0d;">
      <!-- Skills y Knowledge -->
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Working Skills -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Habilidades Laborasles</h3>
          <div class="space-y-4">
            <div>
              <p class="flex justify-between text-sm mb-1">Diseño Web <span>80%</span></p>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div>
              <p class="flex justify-between text-sm mb-1">Front-End <span>90%</span></p>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div>
              <p class="flex justify-between text-sm mb-1">Back-End <span>90%</span></p>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-blue-500 to-sky-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div>
              <p class="flex justify-between text-sm mb-1">Base de Datos <span>75%</span></p>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-gray-400 to-gray-200 h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Knowledge -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Conocimientos</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="(item, index) in skills"
              :key="index"
              class="px-4 py-2 rounded-lg bg-zinc-900"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  "JavaScript",
  "VueJs",
  "Quasar Framework",
  "PHP",
  "Laravel",
  "MySql",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Bootstrap",
  "Git/Github",
  "Principios SOLID",
  "TypeScript"
]);
</script>

