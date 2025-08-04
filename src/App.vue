<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import EventSection from './components/EventSection.vue';
</script>

<template>
  <!-- container ocupa 100% da altura -->
  <div class="flex flex-col min-h-screen">
    
    <!-- Header -->
    <Header />

    <!-- Conteúdo ocupa o espaço restante -->
    <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="text-3xl font-bold text-gray-800">Bem-vindo ao meu site!</h1>
      <p class="mt-4 text-gray-600">Aqui vai o conteúdo principal.</p>
    </main>
        <main class="flex-1">
      <EventSection />
          <section class="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 class="text-3xl font-bold text-[#8a8f6a] mb-4 text-center">Sobre a Mova Sports</h2>
            <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
              <strong class="text-[#6f7352]">Mova Sports</strong> é a plataforma definitiva para cadastro, gerenciamento e promoção de todos os tipos de eventos esportivos. Facilite a organização, acompanhe inscrições e comunique-se com os participantes de forma prática e eficiente. Seja você um atleta, organizador ou fã, a Mova Sports está aqui para tornar seu evento um sucesso.
            </p>
          </section>

          <br>
          <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 class="text-3xl font-bold text-[#8a8f6a] mb-8 text-center">Recursos da Mova Sports</h2>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- Card 1 -->
              <div class="bg-gray-100 p-8 flex flex-col justify-between">
                <div>
                  <h3 class="text-2xl font-semibold text-[#6f7352] mb-4">Gestão de Eventos</h3>
                  <p class="text-gray-700 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula ex nec
                    ligula euismod, nec commodo erat fermentum.
                  </p>
                </div>
                <button class="bg-gray-100 text-white font-medium px-6 py-2 rounded hover:bg-[#73775a] transition self-start">
                  Saiba mais
                </button>
              </div>

              <!-- Card 2 -->
              <div class="bg-gray-100 p-8 flex flex-col justify-between">
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

    </main>

    <!-- Footer colado embaixo -->
    <Footer />
  </div>
</template>

<style scoped></style>
