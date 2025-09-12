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
      <div class="mt-16">
        <h3 class="text-2xl font-bold mb-6">Todo</h3>
        <!-- Grid de servicios -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
            <div class="max-w-sm border rounded-lg shadow-sm bg-zinc-900-800 border-gray-700">
              <a>
                  <img class="rounded-t-lg" src="/beyond.png" alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Life Beyond Work</h5>
                  </a>
                  <a href="https://my.lifebeyondwork.com/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gradient-to-r from-teal-500 to-green-700 text-white rounded-lg hover:from-teal-600 hover:to-green-800">
                      Ver proyecto
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </div>

            <div class="max-w-sm border rounded-lg shadow-sm bg-zinc-900-800 border-gray-700">
              <a>
                  <img class="rounded-t-lg" src="/ITICS.png" alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Life Beyond Work</h5>
                  </a>
                  <a href="https://ingentecnologias.com/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gradient-to-r from-teal-500 to-green-700 text-white rounded-lg hover:from-teal-600 hover:to-green-800">
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
