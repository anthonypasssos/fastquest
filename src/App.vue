<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header class="bg-black flex justify-between items-center w-full h-1/6 px-12 py-8">
    <img class="w-30 h-fit" src="/public/imgs/logo.png" alt="">
    <ul class="flex text-white text-2xl gap-6">
      <li>Home</li>
      <li>Questões</li>
      <li>Pastas</li>
      <li>Criar</li>
    </ul>

  </header>
  <section class="flex flex-col h-5/6 w-full">
      <main class="flex-1 bg-red-400"></main>
      <div class="h-fit w-full bg-black">
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
      </div>
  </section>
</template>

<style>
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>
