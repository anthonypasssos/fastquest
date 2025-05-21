<script setup lang="ts">
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

/** Limita qualquer string a N palavras. */
const limitWords = (text: string, max = 100): string => {
  const words = text.trim().split(/\s+/)
  return words.length <= max
    ? text
    : words.slice(0, max).join(' ') + '…'   // reticência opcional
}

onMounted(async () => {
  try {
    const res = await fetch(
      'https://fastquest-backend-production.up.railway.app/questions?page=6&limit=3'
    )
    const data = (await res.json()) as QuestionResponse

    // Tratar todos os Statements antes de jogar no estado
    data.data = data.data.map(q => ({
      ...q,
      Statement: limitWords(q.Statement, 50)
    }))

    questions.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
})
</script>

<template>
      <div class="h-full flex flex-col">
        <ul class="flex justify-around flex-col h-full gap-2.5" v-if="questions">
          <li
            v-for="(question) in questions.data"
            :key="question.ID"
            class="classic-box flex items-center h-1/3 w-full overflow-hidden pr-5 rounded-2xl"
          >
            <ul class="bg-header text-white flex flex-col justify-around h-full w-2/5 p-5 text-lg">
              <li>Criador: Joãozinho123</li>
              <li>Fonte: OAB</li>
              <li>Data: 2024</li>
              <li>Disciplina: Penal</li>
            </ul>
            <router-link class="text-black w-full p-4 text-lg" :to="'/question/' + question.ID">{{ question.Statement }}</router-link>
          </li>
        </ul>

        <p v-else>Carregando questões...</p>
        <div class="h-2/12">a</div>
    </div>
</template>

<style scoped>
a {
  font-weight: 300;
  line-height: 1;
}

.bg-header {
  background: linear-gradient(
    180deg,
    #6686AF 0%,
    #1D3F69 100%
  );
}
</style>
