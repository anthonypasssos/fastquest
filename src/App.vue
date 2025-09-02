<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header class="bg-black flex justify-between items-center w-full h-[12vh] px-12">
    <img class="w-24 h-fit" src="/public/imgs/logo.png" alt="">
    <ul class="flex text-white text-xl font-normal gap-6">
      <li>Home</li>
      <li>Questões</li>
      <li>Pastas</li>
      <li>Criar</li>
    </ul>

  </header>
  <section class="flex flex-col h-5/6 w-full">
      <main class="flex-1 bg-[url('/public/imgs/home/bg-home.png')] bg-cover flex items-center px-16">
        <p class="text-black text-6xl md:text-7xl lg:w-2/3 font-light text-end md:text-start">
          <b>PREPARE-SE</b> PARA OS <b>DESAFIOS</b> QUE EXIGEM O <b>MELHOR DE VOCÊ</b>
        </p>
      </main>
      <footer class="flex justify-center py-6 px-2 h-fit w-full bg-black text-white text-xl leading-0.5 overflow-hidden gap-3">
        <ul id="scroll" class="flex w-fit gap-3">
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
        </ul>
        <ul id="scroll" class="flex w-fit gap-3">
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
        </ul>
        <ul id="scroll" class="flex w-fit gap-3">
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
          <li>FLASHQUEST</li>
          <li>-</li>
        </ul>
      </footer>
  </section>
</template>

<style>
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

#scroll {
  --gap: calc(var(--spacing) * 3);
  animation: scroll 20s linear infinite
}

@keyframes scroll {
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
