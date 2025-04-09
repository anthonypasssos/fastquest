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
    const res = await fetch('http://localhost:8080/questions')
    const data = await res.json() as QuestionResponse
    questions.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
})
</script>


<template>
  <TheHeader />
  <main>
    <ul v-if="questions">
      <li
        v-for="(question, index) in questions.data"
        :key="question.ID"
        class="classic-box"
      >
        <router-link :to="'/question/' + question.ID">{{ index + 1 }}. {{ question.Statement }}</router-link>
      </li>
    </ul>

    <p v-else>Carregando questões...</p>
  </main>
</template>

<style scoped>
main {
  height: 92vh;
  width: 100%;
  padding: 3vh 0;
  overflow-y: scroll;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

ul li, a {
  color: black;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1;
}
</style>
