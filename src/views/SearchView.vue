<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import { ref, onMounted } from 'vue'

interface Question {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  Statement: string
  Subject: number
  SubjectID: number
  UserID: number
}

interface Pagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

interface QuestionResponse {
  data: Question[]
  pagination: Pagination
}

const questions = ref<QuestionResponse | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('https://fastquest-backend-production.up.railway.app/questions?page=1&limit=3')
    const data = await res.json() as QuestionResponse
    questions.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
})
</script>


<template>
  <TheHeader />
  <main class="grid gap-10 h-full w-full overflow-hidden">
    <div class="questions-box">
        <ul class="flex flex-col gap-5 h-full" v-if="questions">
          <li
            v-for="(question, index) in questions.data"
            :key="question.ID"
            class="classic-box"
          >
            <router-link :to="'/question/' + question.ID">{{ index + 1 }}. {{ question.Statement }}</router-link>
          </li>
        </ul>

        <p v-else>Carregando questões...</p>
    </div>
    <div class="filter-box h-full">

    </div>
  </main>
</template>

<style scoped>
main {
  grid-template-columns: 3fr 1fr;
  padding: 3vh 0;
}

ul li, a {
  color: black;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1;
}

.filter-box {
  background-color: #F4F4F4;
  border: .5px solid #979494;
}
</style>
