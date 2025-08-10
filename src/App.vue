<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <router-view />
    </main>
    <Footer />
  </div>
</template>