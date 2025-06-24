<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ActionBtns from '@/components/ActionBtns.vue'
import SearchQuestions from '@/components/SearchQuestions.vue'
import TheFilter from '@/components/TheFilter.vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted} from 'vue'

const route = useRoute()
const router = useRouter()

const setStatement = (inputText: string) => {
  const newQuery = {...route.query};

  if (inputText === "") {
    delete newQuery["statement"];
  } else {
    newQuery.statement = inputText;
  }

  router.push({query: newQuery})
}

onMounted(() => {
  if (!route.query.page) {
    router.push({
      query: {
        page: 1,
      }
    })
  }
})
</script>



<template>
  <main class="grid gap-4 h-screen w-full px-[3vw] py-[3vh]">
    <SearchBar @input="setStatement" />
    <ActionBtns />
    <SearchQuestions />
    <TheFilter />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  grid-template-rows: 9vh auto;
}
</style>
