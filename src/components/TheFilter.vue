<script setup lang="ts">
import SelectInput from '@/components/SelectInput.vue'
import MultSelect from '@/components/MultSelect.vue'
import { useRouter } from 'vue-router'

const orders = [
  { name: 'A - Z', order: 'statement asc' },
  { name: 'Z - A', order: 'statement desc' },
  { name: 'Recentes', order: 'created_at desc' },
  { name: 'Mais Antigos', order: 'created_at asc' },
  { name: 'Atualizados Recentemente', order: 'updated_at desc' },
  { name: 'Menos Recentemente Atualizados', order: 'updated_at asc' },
  { name: 'ID Crescente', order: 'id asc' },
  { name: 'ID Decrescente', order: 'id desc' }
]

const router = useRouter();

const resetQueries = () => {
  router.push({
    query: {}
  })
}
</script>

<template>
  <div class="classic-box h-full overflow-hidden rounded-2xl flex flex-col justify-between pb-3 items-center">
    <header class="bg-main flex justify-center items-center h-11 w-full">
      <h2 class="text-white text-lg">Filtros</h2>
    </header>
    <SelectInput placeholder="Ordenar Por" :selects="orders" query="order_by"/>
    <SelectInput placeholder="Fonte" :selects="[{name: 'OAB Exame 42º', order: 2}, {name: 'OAB Exame 39º', order: 1}]" query="source"/>
    <SelectInput placeholder="Data" :selects="[{name: '2025', order: '2025'}, {name: '2024', order: '2024'}, {name: '2023', order: '2023'}]" query="year"/>
    <SelectInput
      placeholder="Disciplina"
      query="subject"
      :selects="[
        { name: 'Direito Constitucional', order: '1' },
        { name: 'Direito Penal', order: '2' },
        { name: 'Direito Civil', order: '3' },
        { name: 'Direito Administrativo', order: '4' },
        { name: 'Direito do Trabalho', order: '5' },
        { name: 'Direito Tributário', order: '6' }
      ]"
    />

    <MultSelect />
    <div class="flex items-center px-2 gap-2 w-11/12">
      <input class="h-6" type="checkbox" id="html" name="fav_language" value="HTML">
      <label for="html" class="text-black font-light">Incluir apenas questões <b>com</b> listas</label>
    </div>
    <div class="flex items-center px-2 gap-2 w-11/12">
      <input class="h-fit" type="checkbox" id="html" name="fav_language" value="HTML">
      <label for="html" class="text-black font-light">Incluir apenas questões <b>sem</b> listas</label>
    </div>
    <button @click="resetQueries" class="bg-main-h text-white w-11/12 rounded-3xl text-lg p-1">Resetar Filtros</button>
  </div>
</template>

<style scoped>
label {
  line-height: 1;
}
</style>


