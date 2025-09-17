<!-- src/views/Contact.vue -->
<template>
  <section class="bg-black text-white min-h-screen flex items-center justify-center px-6">
    <div class="max-w-6xl w-full rounded-2xl shadow-lg p-10 bg-[#101010]">

      <!-- Título -->
      <h2 class="text-3xl font-bold inline-block pb-1 mb-10 
          border-b-4 border-transparent 
          bg-gradient-to-r from-teal-500 to-green-700 bg-[length:100%_4px] bg-no-repeat bg-bottom">
        Contacto
      </h2>

      <!-- Contenedor principal -->
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8">

        <!-- Columna izquierda -->
        <div class="space-y-8">
          <!-- Teléfono -->
          <div class="flex items-start space-x-4 bg-zinc-900 p-5 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="h-6 w-6 text-teal-300 mb-4">
              <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <div>
              <p class="font-semibold">Teléfono :</p>
              <p>+52 228 407 3225</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start space-x-4 bg-zinc-900 p-5 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="h-6 w-6 text-teal-300 mb-4">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <div>
              <p class="font-semibold">Email :</p>
              <p>ulisesrodriguezbar@gmail.com</p>
            </div>
          </div>

          <!-- Dirección -->
          <div class="flex items-start space-x-4 bg-zinc-900 p-5 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-300 mb-4"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
            </svg>
            <div>
              <p class="font-semibold">Dirección :</p>
              <p>Veracruz, México</p>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Formulario -->
        <div class="bg-[#101010] text-zinc-600 rounded-xl border p-6 col-span-2 md:ml-10 md:mt-0 mt-10 md:mb-0 mb-5">
          <p class="text-lg mb-8 text-white">
            Siempre estoy abierto a discutir
            <span class="font-bold">trabajos o asociaciones de diseño de productos.</span>
          </p>

          <!-- Formulario con confirmación -->
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            @submit.prevent="handleSubmit"
            class="space-y-4"
          >
            <!-- Campo oculto requerido por Netlify -->
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label class="block text-sm mb-1 text-white">Nombre *</label>
              <input v-model="form.name" type="text" name="name"
                class="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-teal-500"
                required />
            </div>

            <div>
              <label class="block text-sm mb-1 text-white">Email *</label>
              <input v-model="form.email" type="email" name="email"
                class="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-teal-500"
                required />
            </div>

            <div>
              <label class="block text-sm mb-1 text-white">Mensaje *</label>
              <textarea v-model="form.message" rows="4" name="message"
                class="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-teal-500"
                required></textarea>
            </div>

            <button type="submit"
              class="px-6 py-2 bg-gradient-to-r from-teal-500 to-green-700 hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-800 rounded-lg shadow-md font-semibold text-white cursor-pointer">
              Enviar
            </button>
          </form>

          <!-- Mensaje de confirmación -->
          <p v-if="successMessage" class="mt-4 text-green-400 font-semibold">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="mt-4 text-red-400 font-semibold">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const successMessage = ref("");
const errorMessage = ref("");

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("form-name", "contact");
  formData.append("name", form.value.name);
  formData.append("email", form.value.email);
  formData.append("message", form.value.message);

  try {
    await fetch("/", {
      method: "POST",
      body: formData,
    });
    successMessage.value = "¡Gracias por tu mensaje! Te responderé pronto.";
    errorMessage.value = "";
    form.value = { name: "", email: "", message: "" }; // limpiar campos
  } catch (err) {
    errorMessage.value = "Hubo un error al enviar el mensaje. Intenta de nuevo.";
    successMessage.value = "";
  }
};
</script>

