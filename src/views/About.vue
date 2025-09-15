<!-- src/views/About.vue -->
<template>
  <section class="bg-black text-white py-16 px-6 justify-center">
    <div class="max-w-6xl w-full rounded-2xl shadow-lg p-10 bg-[#101010]">

      <!-- Título -->
      <h2 class="text-3xl font-bold inline-block pb-1 mb-10 
          border-b-4 border-transparent 
          bg-gradient-to-r from-teal-500 to-green-700 bg-[length:100%_4px] bg-no-repeat bg-bottom">
        Acerca de mí
      </h2>

      <!-- Contenedor principal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <!-- Imagen -->
        <div class="flex justify-center md:justify-start">
          <img
            src="/yop.jpg"
            alt="Profile"
            class="rounded-lg shadow-lg"
            width="400" height="400"
          />
        </div>

        <!-- Descripción -->
        <div class="col-span-2">
          <h3 class="text-xl font-semibold mb-2">¿Quién soy yo?</h3>
          <p class="text-gray-300 mb-6 leading-relaxed text-justify">
            Soy desarrollador web Full-Stack con experiencia en la creación de aplicaciones 
            modernas, enfocadas en rendimiento y usabilidad. Me apasiona transformar ideas 
            en soluciones digitales que ayuden a personas y empresas a crecer. Busco combinar 
            creatividad, tecnología y disciplina para seguir evolucionando en cada proyecto.
          </p>

          <!-- Información personal -->
          <h3 class="text-xl font-semibold mb-4">Información Personal</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Columna izquierda -->
          <div class="space-y">
            <!-- Phone -->
            <div class="flex items-center p-4 rounded-lg shadow-md">
              <div class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-md">
                <svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-gray-400 text-sm">Phone</p>
                <p class="text-white font-semibold">+52 228 407 3225</p>
              </div>
            </div>

            
          </div>

          <!-- Columna derecha -->
          <div class="space-y">
            <!-- Email -->
            <div class="flex items-center p-4 rounded-lg shadow-md">
              <div class="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-md">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  class="lucide lucide-mail-icon lucide-mail h-6 w-6 text-sky-300"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              </div>
              <div class="ml-4">
                <p class="text-gray-400 text-sm">Email</p>
                <p class="text-white font-semibold">ulisesrodriguezbar@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>

      <!-- Sección What I do -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold mb-6">Servicios</h3>
        <!-- Grid de servicios -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Desarrollo Web -->
            <div class="bg-zinc-900 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                <div class="flex justify-center mb-4">
                    <!-- Lucide Layout -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <rect width="18" height="7" x="3" y="3" rx="1"/>
                        <rect width="9" height="7" x="3" y="14" rx="1"/>
                        <rect width="5" height="7" x="16" y="14" rx="1"/>
                    </svg>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Desarrollo Web</h3>
                <!-- Lista -->
                    <ul class="text-sm text-gray-400 text-center md:text-left space-y-2">
                        <li>✔️ Sitios Institucionales y Corporativos</li>
                        <li>✔️ Landing Pages con CTAs y formularios</li>
                        <li>✔️ Tiendas en líneapagos</li>
                        <li>✔️ Sistemas web personalizados y dashboards</li>
                    </ul>
            </div>

            <!-- Diseño UX/UI -->
            <div class="bg-zinc-900 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                <div class="flex justify-center mb-4">
                    <!-- Lucide Palette -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                    </svg>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Diseño UX/UI</h3>
                <ul class="text-sm text-gray-400 text-center md:text-left space-y-2">
                    <li>✔️ Consultoría en experiencia de usuario</li>
                    <li>✔️ Revisión de flujos de navegación</li>
                    <li>✔️ Mejora de accesibilidad y usabilidad </li>
                </ul>
            </div>

            <!-- Optimización y Marketing -->
            <div class="bg-zinc-900 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                <div class="flex justify-center mb-4">
                    <!-- Lucide Chart -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
                        <path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Optimización</h3>
                <ul class="text-sm text-gray-400 text-center md:text-left space-y-2">
                    <li>✔️ Optimización de contenido y estructura web </li>
                    <li>✔️ Optimización de velocidad y rendimiento </li>
                    <li>✔️ SEO técnico (metadatos, sitemap, robots.txt)  </li>
                </ul>
            </div>

            <!-- Servicios Técnicos -->
            <div class="bg-zinc-900 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                <div class="flex justify-center mb-4">
                    <!-- Lucide Wrench -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-12 h-12 text-teal-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>

                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Servicios Webs</h3>
                <ul class="text-sm text-gray-400 text-center md:text-left space-y-2">
                    <li>✔️ Mantenimiento y soporte web </li>
                    <li>✔️ Integraciones con APIs externas</li>
                </ul>
            </div>

            <!-- Consultoría Técnica -->
            <div class="bg-zinc-900 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                <div class="flex justify-center mb-4">
                    <!-- Lucide File -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                        <path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/>
                        <circle cx="8" cy="16" r="6"/>
                    </svg>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Consultoría Técnica</h3>
                <ul class="text-sm text-gray-400 text-center md:text-left space-y-2">
                    <li>✔️ Análisis de requerimientos y documentación  </li>
                    <li>✔️ Auditoría de código y escalabilidad  </li>
                </ul>
            </div>

            <!-- Servicios Adicionales -->
            <div class="bg-zinc-900 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                <div class="flex justify-center mb-4">
                    <!-- Lucide Server -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
                        <line x1="6" x2="6.01" y1="6" y2="6"/>
                        <line x1="6" x2="6.01" y1="18" y2="18"/>
                    </svg>
                </div>
                <h3 class="text-white text-lg font-semibold mb-2">Servicios Adicionales</h3>
                <ul class="text-sm text-gray-400 text-center md:text-left space-y-2">
                    <li>✔️ Asesoramiento en compra de dominio y hosting   </li>
                </ul>
            </div>

            </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const personalInfo = ref([
  {
    title: 'Teléfono'
  },
  {
    title: 'Ubicación'
  },
  {
    title: 'Email'
  },
  {
    title: 'Cumpleaños'
  }
]);
</script>