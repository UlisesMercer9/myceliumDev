<!-- src/views/Resume.vue -->
<template>
  <section class="bg-black text-white py-16 px-6 flex justify-center">
    <div class="max-w-6xl w-full rounded-2xl shadow-lg overflow-hidden">

      <!-- Contenedor principal -->
      <div class="p-10 bg-[#101010]">
        <!-- Título -->
        <h2
          class="text-3xl font-bold inline-block pb-1 mb-10 
          border-b-4 border-transparent 
          bg-gradient-to-r from-teal-500 to-green-700 bg-[length:100%_4px] bg-no-repeat bg-bottom"
        >
          Resumen
        </h2>

        <!-- Grid: Experiencia - Educación - Logros -->
        <div class="grid md:grid-cols-3 gap-10 mb-2">

          <!-- Experiencia -->
          <div>
            <h3 class="flex items-center text-xl font-semibold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 17v-2h6v2h5V7H4v10h5zm2-8h2v2h-2V9z" />
              </svg>
              Experiencia
            </h3>
            <div class="relative border-l border-gray-700 ml-3">
              <div
                v-for="(job, index) in experience"
                :key="index"
                class="mb-8 ml-6"
              >
                <span
                  class="absolute -left-[9px] flex items-center justify-center w-5 h-5 bg-teal-500 rounded-full ring-4 ring-[#101010]"
                ></span>
                <p class="text-gray-400 text-sm">{{ job.period }}</p>
                <h4 class="font-bold text-white">{{ job.role }}</h4>
                <p class="text-gray-400 text-sm">{{ job.company }}</p>
              </div>
            </div>
          </div>

          <!-- Educación -->
          <div>
            <h3 class="flex items-center text-xl font-semibold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
              </svg>
              Educación
            </h3>
            <div class="relative border-l border-gray-700 ml-3">
              <div
                v-for="(edu, index) in education"
                :key="index"
                class="mb-8 ml-6"
              >
                <span
                  class="absolute -left-[9px] flex items-center justify-center w-5 h-5 bg-teal-500 rounded-full ring-4 ring-[#101010]"
                ></span>
                <p class="text-gray-400 text-sm">{{ edu.period }}</p>
                <h4 class="font-bold text-white">{{ edu.degree }}</h4>
                <p class="text-gray-400 text-sm">{{ edu.institution }}</p>
              </div>
            </div>
          </div>

          <!-- Logros -->
          <div>
            <h3 class="flex items-center text-xl font-semibold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.5 21h9l-4.5-9L7.5 21zM12 3v6m0 0L9 6m3 3l3-3" />
              </svg>
              Logros
            </h3>
            <div
              v-for="(award, index) in awards"
              :key="index"
              class="p-4 mb-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-colors duration-300"
            >
              <p class="text-gray-400 text-sm">{{ award.date }}</p>
              <h4 class="font-bold text-white">
                <a :href="award.link" target="_blank" class="hover:text-teal-400 transition-colors">
                  {{ award.title }}
                </a>
              </h4>
              <p class="text-gray-400 text-sm">{{ award.org }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills y Knowledge -->
      <div class="p-10 bg-[#0d0d0d] grid md:grid-cols-2 gap-10">
        
        <!-- Working Skills -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Habilidades Laborales</h3>
          <div class="space-y-5">
            <div v-for="(skill, index) in workSkills" :key="index">
              <p class="flex justify-between text-sm mb-1">
                {{ skill.name }} <span>{{ skill.level }}%</span>
              </p>
              <div class="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  class="h-2 rounded-full transition-all duration-700"
                  :class="skill.color"
                  :style="{ width: skill.level + '%' }"
                ></div>
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
              class="px-4 py-2 rounded-lg bg-zinc-900 border border-gray-700 hover:border-teal-500 transition-colors cursor-default"
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

const experience = ref([
  { period: "2021 - Presente", role: "Desarrollador Full-Stack", company: "Binnacle App." },
  { period: "2020 - 2021", role: "Desarrollador Full-Stack", company: "Bolsa Rosa." },
  { period: "2019 - 2020", role: "Desarrollador Front-End", company: "Minds Innovation." },
]);

const education = ref([
  { period: "2017 - 2019", degree: "Maestría en Sistemas Computacionales", institution: "Instituto Tecnológico Superior de Misantla, Ver" },
  { period: "2012 - 2017", degree: "Ingeniería en Tecnologías de la Información y Comunicación", institution: "Instituto Tecnológico Superior de Misantla, Ver" },
]);

const awards = ref([
  { date: "12 Abril 2021", title: "Bayesian Approach to Analyze Reading Comprehension", org: "Multidisciplinary Digital Publishing Institute", link: "https://www.mdpi.com/2071-1050/13/8/4285" },
]);

const workSkills = ref([
  { name: "Diseño Web", level: 80, color: "bg-gradient-to-r from-pink-500 to-red-500" },
  { name: "Front-End", level: 90, color: "bg-gradient-to-r from-purple-500 to-indigo-500" },
  { name: "Back-End", level: 90, color: "bg-gradient-to-r from-blue-500 to-sky-500" },
  { name: "Base de Datos", level: 75, color: "bg-gradient-to-r from-gray-400 to-gray-200" },
]);

const skills = ref([
  "JavaScript",
  "VueJS",
  "Quasar Framework",
  "PHP",
  "Laravel",
  "MySQL",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Bootstrap",
  "Git/GitHub",
  "Principios SOLID",
  "TypeScript",
  "Python",
]);
</script>


