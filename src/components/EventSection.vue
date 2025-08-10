<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
     <h2 class="text-2xl font-bold flex items-center gap-2 mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Próximos Eventos
    </h2>

    <!-- Grid de cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <EventCard
        v-for="evento in eventosLimitados"
        :key="evento.id"
        :evento="evento"
      />
    </div>

    <!-- Botão Ver mais -->
    <div v-if="eventos.length > 3" class="mt-8 text-center">
      <router-link
          to="/eventos"
          class="inline-flex items-center gap-2 border border-[#8a8f6a] text-[#8a8f6a] px-6 py-2 font-medium
         hover:bg-[#8a8f6a] hover:text-white
         transition duration-300 ease-in-out"
      >
        Ver mais...
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import EventCard from './EventCard.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { EyeIcon } from '@heroicons/vue/24/solid'

const eventos = [
  {
    id: 1,
    nome: 'Evento 1',
    data: '10/08/2025',
    hora: '14:00',
    local: 'Parque Central',
    cidade: 'São Paulo',
    imagem: 'https://picsum.photos/400/200?random=1'
  },
  {
    id: 2,
    nome: 'Evento 2',
    data: '15/08/2025',
    hora: '09:30',
    local: 'Praça da Liberdade',
    cidade: 'Belo Horizonte',
    imagem: 'https://picsum.photos/400/200?random=2'
  },
  {
    id: 3,
    nome: 'Evento 3',
    data: '20/08/2025',
    hora: '19:00',
    local: 'Orla',
    cidade: 'Rio de Janeiro',
    imagem: 'https://picsum.photos/400/200?random=3'
  },
  {
    id: 4,
    nome: 'Evento 4',
    data: '25/08/2025',
    hora: '16:00',
    local: 'Ginásio Municipal',
    cidade: 'Curitiba',
    imagem: 'https://picsum.photos/400/200?random=4'
  }
]

const eventosLimitados = computed(() => eventos.slice(0, 3))
</script>
