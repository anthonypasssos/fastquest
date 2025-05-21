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
    <button class="bg-main-h text-white w-11/12 rounded-3xl text-lg p-1">Resetar Filtros</button>
  </div>
</template>
