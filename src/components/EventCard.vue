<template>
  <div class="bg-white shadow-md overflow-hidden flex flex-col">
    <img
      :src="evento.imagem"
      :alt="`Imagem do ${evento.nome}`"
      class="w-full h-40 object-cover"
    />
    <div class="p-4 flex flex-col flex-1">
      <h3 class="text-lg font-semibold mb-2">{{ evento.nome }}</h3>
      <p class="text-gray-600 text-sm mb-1">
        {{ evento.data }} às {{ evento.hora }}
      </p>
      <p class="text-gray-600 text-sm mb-4">
        {{ evento.local }}, {{ evento.cidade }}
      </p>
      <router-link
          :to="`/evento/${evento.id}`"
          class="self-center mt-4 inline-flex items-center justify-center
             bg-[#8a8f6a] text-white py-2 px-6  shadow-md
             hover:bg-[#7a7f5d] hover:shadow-lg hover:-translate-y-0.5
             transition duration-300 ease-in-out"
      >
        Mais detalhes
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  evento: Object
})
</script>
