<script setup lang="ts">
import SelectInput from '@/components/SelectInput.vue'
import MultSelect from '@/components/MultSelect.vue'

</script>

<template>
  <div class="classic-box h-full overflow-hidden rounded-2xl flex flex-col justify-between pb-3 items-center">
    <header class="bg-main flex justify-center items-center h-11 w-full">
      <h2 class="text-white text-lg">Filtros</h2>
    </header>
    <SelectInput placeholder="Ordenar Por" :selects="['A - Z', 'Z - A', 'Recentes', 'Mais Antigos']"/>
    <SelectInput placeholder="Fonte" />
    <SelectInput placeholder="Data" />
    <SelectInput placeholder="Disciplina" />
    <MultSelect />
    <div class="flex items-center px-2 gap-2 w-11/12">
      <input class="h-6" type="checkbox" id="html" name="fav_language" value="HTML">
      <label for="html" class="text-black font-light">Incluir apenas questões <b>com</b> listas</label>
    </div>
    <div class="flex items-center px-2 gap-2 w-11/12">
      <input class="h-fit" type="checkbox" id="html" name="fav_language" value="HTML">
      <label for="html" class="text-black font-light">Incluir apenas questões <b>sem</b> listas</label>
    </div>
    <button class="bg-main-h text-white w-11/12 rounded-3xl text-lg p-1">Resetar Filtros</button>
  </div>
</template>

<style scoped>
label {
  line-height: 1;
}
</style>


