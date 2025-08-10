<script setup lang="ts">
import EventSection from '@/components/EventSection.vue'
import { UserPlusIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Bem-vindo ao meu site!</h1>
    <p class="mt-4 text-gray-600 text-center mb-10">Aqui vai o conteúdo principal.</p>

    <EventSection />

    <section class="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-12 rounded">
      <h2 class="text-3xl font-bold text-[#8a8f6a] mb-4 text-center">Sobre a Mova Sports</h2>
      <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
        <strong class="text-[#6f7352]">Mova Sports</strong> é a plataforma definitiva para cadastro, gerenciamento e promoção de todos os tipos de eventos esportivos. Facilite a organização, acompanhe inscrições e comunique-se com os participantes de forma prática e eficiente. Seja você um atleta, organizador ou fã, a Mova Sports está aqui para tornar seu evento um sucesso.
      </p>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-16">
      <h2 class="text-3xl font-bold text-[#8a8f6a] mb-8 text-center">Recursos da Mova Sports</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-100 p-8 flex flex-col justify-between rounded">
          <div>
            <h3 class="text-2xl font-semibold text-[#6f7352] mb-4">Experiência Completa</h3>
            <p class="text-gray-700 mb-6">
              Seja parte da comunidade esportiva! Cadastre-se e receba novidades exclusivas sobre os eventos dos esportes que você mais gosta
            </p>
          </div>
          <div class="w-full">
            <router-link
                to="/cadastro-atleta"
                class="flex justify-center items-center gap-2 bg-[#8a8f6a] text-white font-semibold shadow-md
                hover:bg-[#73775a] hover:shadow-lg transition duration-300 ease-in-out
                w-full py-3 rounded"
            >
              Cadastre-se
              <UserPlusIcon class="w-5 h-5" />
            </router-link>
          </div>
        </div>

        <div class="bg-gray-100 p-8 flex flex-col justify-between rounded">
          <div>
            <h3 class="text-2xl font-semibold text-[#6f7352] mb-4">Experiência Completa</h3>
            <p class="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet
              tortor nec mauris vestibulum varius ac sed ligula.
            </p>
          </div>
          <button class="bg-[#8a8f6a] text-white font-medium px-6 py-2 rounded hover:bg-[#73775a] transition self-start">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
