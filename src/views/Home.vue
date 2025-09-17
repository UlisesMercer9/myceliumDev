<!-- src/views/Home.vue -->
<template>
    <section class="bg-black text-white min-h-screen flex items-center justify-center px-6">
        <!-- Contenido principal -->
        <main class="flex flex-col items-center text-center">
            <!-- Imagen de perfil -->
            <router-link
                to="/about"
                class="w-80 h-80 rounded-full overflow-hidden border-4 border-teal-500"
            >
                <img src="/images/profile/yop.jpg" alt="Profile" class="w-full h-full object-cover" />
            </router-link>

            <!-- Nombre y título -->
            <h1 class="mt-6 text-2xl font-bold mb-4">MSC. Ulises Rodríguez</h1>
            <p class="text-gray-400">Desarrollador Full-Stack</p>

            <!-- Redes sociales -->
            <div class="flex space-x-3 mt-6">
                <!-- Github -->
                <a
                href="https://github.com/UlisesMercer9"
                target="_blank"
                class="w-10 h-10 flex items-center justify-center bg-gray-800 text-orange-500 hover:bg-teal-600 hover:text-white rounded-lg"
                >
                <svg
                    class="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                    />
                </svg>
                </a>
                <!-- LinkedIn -->
                <a
                href="https://www.linkedin.com/in/ulises-rodr%C3%ADguez/"
                target="_blank"
                class="w-10 h-10 flex items-center justify-center bg-gray-800 text-sky-400 hover:bg-teal-600 hover:text-white rounded-lg"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM7 19H4V9h3v10zM5.5 7.5A1.75 1.75 0 115.5 4a1.75 1.75 0 010 3.5zM20 19h-3v-5.6c0-1.4-.5-2.4-1.7-2.4s-2 .9-2.3 1.8c-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.4-.6 1.3-1.4 3-1.4 2.2 0 4 1.4 4 4.6V19z"
                    />
                </svg>
                </a>
            </div>

            <!-- Botón de descarga -->
            <a
                href="/pdf/CV_UlisesRodriguez.pdf"
                download
                class="mt-8 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-700 text-white font-medium rounded-full shadow-lg flex items-center space-x-2"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
                </svg>
                <span>Download CV</span>
            </a>
        </main>
    </section>
</template>
