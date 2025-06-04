<script setup lang="ts">
import QuestionsNav from '@/components/QuestionsNav.vue'
import type { DetailQuestion } from '@/models/DetailQuestion.ts';
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

interface Pagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

interface QuestionResponse {
  data: DetailQuestion[]
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
  questions.value = null;

  const query = new URLSearchParams({
    ...route.query,
    limit: "3",
    detail: "information"
  });

  try {
    const res = await fetch(`https://fastquest-backend-production.up.railway.app/questions?${query}`)
    const data = await res.json() as QuestionResponse
    console.log(data);

    data.data = data.data.map(q => ({
      ...q,
      statement: limitWords(q.statement, Math.round(window.innerHeight / 15))
    }))

    questions.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
}

const debouncedFetch = debounce(fetchQuestions, 500)

onMounted(fetchQuestions);
watch(() => route.fullPath, () => {
  debouncedFetch();
})
</script>

<template>
  <div class="h-full flex flex-col">
    <ul v-if="questions" class="flex flex-col gap-auto h-full gap-2.5">
      <li
        v-for="question in questions.data"
        :key="question.id"
        class="classic-box flex items-center max-h-1/3 h-1/3 w-full overflow-hidden pr-5 rounded-2xl hover:cursor-pointer"
      >
        <ul class="bg-header text-white flex flex-col justify-around h-full w-2/5 p-5">
          <li>Criador: {{ question.user?.name ?? 'Indefinido' }}</li>
          <li>Fonte: {{ question.source?.Name ?? 'Indefinido'}}</li>
          <li>Data: {{ question.source?.Metadata.year ?? question.created_at.slice(0, 4) }}</li>
          <li>Disciplina: {{ question.subject?.Name ?? 'Indefinido' }}</li>
        </ul>
        <router-link
          :to="'/question/' + question.id"
          class="text-black h-full w-full p-4 text-lg text-ellipsis break-words line-clamp-5"
        >
          {{ question.statement }}
        </router-link>
      </li>
    </ul>

    <div v-else class="h-full w-full flex justify-center items-center flex-col">
      <p>Carregando questões...</p>
    </div>

    <QuestionsNav :pagination="questions?.pagination" v-if="questions?.pagination.total != 1"/>
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
