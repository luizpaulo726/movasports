<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold text-[#8a8f6a]">
        <img src="/logo.png" alt="Mova Sports" class="h-16 w-auto" />
      </div>

      <!-- Menu principal -->
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="text-[#8a8f6a] hover:text-[#6f704f] transition">Home</a>
        <a href="/eventos" class="text-[#8a8f6a] hover:text-[#6f704f] transition">Eventos</a>
        <a href="/contato" class="text-[#8a8f6a] hover:text-[#6f704f] transition">Contato</a>
      </nav>

      <!-- Botões Login e Registre-se -->
      <div class="flex items-center space-x-4">
        <a
            href="/login"
            class="inline-block border border-[#8a8f6a] text-[#8a8f6a] px-6 py-2 font-medium
                 hover:bg-[#8a8f6a] hover:text-white transition duration-300 ease-in-out"
        >
          Login
        </a>
        <a
            href="/registro"
            class="inline-block border border-[#8a8f6a] text-[#8a8f6a] px-6 py-2 font-medium
                 hover:bg-[#8a8f6a] hover:text-white transition duration-300 ease-in-out rounded"
        >
          Registre-se
        </a>
      </div>

      <!-- Botão para menu mobile -->
      <button
          @click="toggleMenu"
          class="md:hidden text-[#8a8f6a] focus:outline-none"
          aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" viewBox="0 0 24 24">
          <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <nav
        v-if="isOpen"
        class="md:hidden bg-white shadow-inner border-t border-[#8a8f6a]"
    >
      <a href="/" class="block px-6 py-3 text-[#8a8f6a] hover:bg-[#e2e3d5] transition">Home</a>
      <a href="/eventos" class="block px-6 py-3 text-[#8a8f6a] hover:bg-[#e2e3d5] transition">Eventos</a>
      <a href="/contato" class="block px-6 py-3 text-[#8a8f6a] hover:bg-[#e2e3d5] transition">Contato</a>
      <a href="/login" class="block px-6 py-3 border border-[#8a8f6a] text-[#8a8f6a] hover:bg-[#8a8f6a] hover:text-white transition font-medium">Login</a>
      <a href="/registro" class="block px-6 py-3 border border-[#8a8f6a] text-[#8a8f6a] hover:bg-[#8a8f6a] hover:text-white transition font-medium rounded">Registre-se</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
