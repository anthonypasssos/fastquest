<script setup lang="ts">
import QuestionsNav from '@/components/QuestionsNav.vue'
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  page: Number,
  statement: String,
  limit: Number
})

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

const limitWords = (text: string, max = 100): string => {
  const words = text.trim().split(/\s+/)
  return words.length <= max ? text : words.slice(0, max).join(' ') + '…'
}

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const fetchQuestions = async () => {
  const query = new URLSearchParams({
    page: String(props.page ?? 1),
    statement: props.statement ?? '',
    limit: String(props.limit ?? 10)
  })

  try {
    const res = await fetch(`https://fastquest-backend-production.up.railway.app/questions?${query}`)
    const data = await res.json() as QuestionResponse

    data.data = data.data.map(q => ({
      ...q,
      Statement: limitWords(q.Statement, Math.round(window.innerHeight / 15))
    }))

    questions.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
}

const debouncedFetch = debounce(fetchQuestions, 500)

onMounted(fetchQuestions)
watch(() => props.statement, debouncedFetch)
</script>

<template>
  <div class="h-full flex flex-col">
    <ul v-if="questions" class="flex flex-col justify-around h-full gap-2.5">
      <li
        v-for="question in questions.data"
        :key="question.ID"
        class="classic-box flex items-center max-h-1/3 h-1/3 w-full overflow-hidden pr-5 rounded-2xl hover:cursor-pointer"
      >
        <ul class="bg-header text-white flex flex-col justify-around h-full w-2/5 p-5">
          <li>Criador: Joãozinho123</li>
          <li>Fonte: OAB</li>
          <li>Data: 2024</li>
          <li>Disciplina: Penal</li>
        </ul>
        <router-link
          :to="'/question/' + question.ID"
          class="text-black h-full w-full p-4 text-lg text-ellipsis break-words line-clamp-5"
        >
          {{ question.Statement }}
        </router-link>
      </li>
    </ul>

    <div v-else class="h-full w-full flex justify-center items-center flex-col">
      <p>Carregando questões...</p>
    </div>

    <QuestionsNav :pagination="questions?.pagination" />
  </div>
</template>

<style scoped>
a {
  font-weight: 300;
  line-height: 1;
}

.bg-header {
  background: linear-gradient(180deg, #6686AF 0%, #1D3F69 100%);
}
</style>
