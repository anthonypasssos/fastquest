<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ActionBtns from '@/components/ActionBtns.vue'
import SearchLists from '@/components/SearchLists.vue'
import TheFilter from '@/components/TheFilter.vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted} from 'vue'

const route = useRoute()
const router = useRouter()

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
  <main class="grid gap-4 h-screen w-full px-[3vw] py-3">
    <SearchBar/>
    <ActionBtns />
    <SearchLists />
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
