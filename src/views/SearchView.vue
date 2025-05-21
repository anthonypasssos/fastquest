<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ActionBtns from '@/components/ActionBtns.vue'
import SearchQuestions from '@/components/SearchQuestions.vue'
import TheFilter from '@/components/TheFilter.vue'
</script>



<template>
  <main class="grid gap-8 h-full w-full">
    <SearchBar />
    <ActionBtns />
    <SearchQuestions />
    <TheFilter />
  </main>
</template>

<style scoped>
main {
  grid-template-columns: 3.5fr 1fr;
  grid-template-rows: 10vh auto;
  padding: 3vh 0;
}
</style>
