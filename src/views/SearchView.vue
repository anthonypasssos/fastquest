<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ActionBtns from '@/components/ActionBtns.vue'
import SearchQuestions from '@/components/SearchQuestions.vue'
import TheFilter from '@/components/TheFilter.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

const pageQuery = Number(route.query.page ?? 1)

const statement = ref<string>("");

const setStatement = (inputText: string) => {
  statement.value = inputText;
}
</script>



<template>
  <main class="grid gap-4 h-screen w-full">
    <SearchBar @input="setStatement" />
    <ActionBtns />
    <SearchQuestions :page="pageQuery" :limit="3" :statement/>
    <TheFilter />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  grid-template-rows: 9vh auto;
  padding: 3vh 0;
}
</style>
