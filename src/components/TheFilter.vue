<script setup lang="ts">
import SelectInput from '@/components/SelectInput.vue'

</script>

<template>
  <div class="classic-box h-full overflow-hidden rounded-2xl flex flex-col items-center">
    <header class="bg-main flex justify-center items-center h-14 w-full">
      <h2 class="text-white text-2xl">Filtros</h2>
    </header>
    <SelectInput placeholder="Ordenar Por" />
    <SelectInput placeholder="Fonte" />
    <SelectInput placeholder="Data" />
    <SelectInput placeholder="Disciplina" />
    <div class="topic classic-box w-11/12 h-1/5 rounded-xl flex justify-center flex-col p-2">
      <div class="w-full h-fit rounded-xl pl-3 py-1">
        <p class="text-xl">Assunto</p>
      </div>
      <ul class="w-full h-full flex py-2 gap-2">
        <li class="rounded-xl flex items-center h-fit py-1 px-1.5 gap-2">
          <p class="text-white text-lg h-fit text-center align-middle">Cachorro</p>
          <img src="/public/imgs/close.png" class="h-6 hover:cursor-pointer" alt="">
        </li>
      </ul>
    </div>
    <button class="bg-main-h text-white w-11/12 rounded-3xl text-lg p-1">Resetar Filtros</button>
  </div>
</template>

<style scoped>
.topic, .topic div:first-child {
  border: .5px solid #BFBFBF;
}

.topic div:hover {
  cursor: pointer;
}

.topic div:first-child p {
  color: #C5C5C5;
}

.topic li {
  background: linear-gradient(
    90deg,
    #6686AF 0%,
    #1D3F69 100%
  );
}
</style>
