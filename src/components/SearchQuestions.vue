<script setup lang="ts">
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

/** Limita qualquer string a N palavras. */
const limitWords = (text: string, max = 100): string => {
  const words = text.trim().split(/\s+/)
  return words.length <= max
    ? text
    : words.slice(0, max).join(' ') + '…'   // reticência opcional
}

const loadQuestions = async () => {
  const queryString = new URLSearchParams({
    page: String(props.page ?? 1),
    statement: props.statement ?? '',
    limit: String(props.limit ?? 10)
  }).toString()

  try {
    const res = await fetch(
      `https://fastquest-backend-production.up.railway.app/questions?${queryString}`
    )
    const data = (await res.json()) as QuestionResponse

    data.data = data.data.map(q => ({
      ...q,
      Statement: limitWords(q.Statement, Math.round(window.innerHeight / 15))
    }))

    questions.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
}

onMounted(loadQuestions);

watch(() => props.statement, loadQuestions);
</script>

<template>
      <div class="h-full flex flex-col">
        <ul class="flex justify-around flex-col h-full gap-2.5" v-if="questions">
          <li
            v-for="(question) in questions.data"
            :key="question.ID"
            class="classic-box flex items-center max-h-1/3 h-1/3 w-full overflow-hidden pr-5 rounded-2xl hover:cursor-pointer "
          >
            <ul class="bg-header text-white flex flex-col justify-around h-full w-2/5 p-5 text">
              <li>Criador: Joãozinho123</li>
              <li>Fonte: OAB</li>
              <li>Data: 2024</li>
              <li>Disciplina: Penal</li>
            </ul>
            <router-link class="text-black h-full w-full p-4 text-lg text-ellipsis break-words line-clamp-5" :to="'/question/' + question.ID">{{ question.Statement }}</router-link>
          </li>
        </ul>

        <div v-else class="h-full w-full flex justify-center items-center flex-col">
          <span></span>
          <p>Carregando questões...</p>
        </div>
        <div class="h-14 py-2 flex justify-between">
          <span class="bg-main flex p-1 rounded-xl">
            <img class="h-full rotate-90" src="/public/imgs/arrow.png" alt="">
          </span>
          <ul class="pages flex items-center gap-1">
            <router-link
            v-for="num in [1,2,3,'...',2134]"
            :key="num"
            :class="[
              'flex justify-center items-center p-0.5 h-5/6 text-shadow-lg px-3 rounded-xl leading-0 hover:cursor-pointer',
              page == num ? 'bg-main text-white' : 'classic-box text-black'
            ]"
            :to="'/search?page=' + num"
            >{{ num }}</router-link>
          </ul>
          <span class="bg-main flex p-1 rounded-xl">
            <img class="h-full -rotate-90" src="/public/imgs/arrow.png" alt="">
          </span>
        </div>
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
