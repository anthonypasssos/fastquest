<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
import ActionBtns from '@/components/ActionBtns.vue';
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

type Question = {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  Statement: string
  Subject: number
  SubjectID: number
  UserID: number
}

type Answer = {
  ID: number
  Text: string
  Is_correct: boolean
  QuestionID: number
}

const route = useRoute()
const question = ref<Question | null>(null)
const answers = ref<Answer[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchQuestion = async (id: string | number) => {
  loading.value = true
  error.value = null

  try {
    const res = await fetch(`https://fastquest-backend-production.up.railway.app/question/${id}`)
    if (!res.ok) throw new Error(`Erro ao buscar questão: ${res.status}`)
    const data: Question = await res.json()
    question.value = data
    fetchAnswers(data.ID)
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const fetchAnswers = async (questionId: number) => {
  try {
    const res = await fetch(`https://fastquest-backend-production.up.railway.app/question/${questionId}/answers`)
    if (!res.ok) throw new Error(`Erro ao buscar respostas: ${res.status}`)
    const data: Answer[] = await res.json()
    answers.value = data
  } catch (err: any) {
    error.value = `Erro ao buscar alternativas: ${err.message}`
  }
}

onMounted(() => {
  fetchQuestion(route.params.id as string)
})

watch(() => route.params.id, (newId) => {
  fetchQuestion(newId as string)
})
</script>

<template>
  <main class="h-screen w-full">
    <header></header>
    <ActionBtns />
    <div class="question-box overflow-y-scroll overflow-x-visible gap-10">
      <p class="classic-box rounded-3xl  p-7 text-lg font-light">{{ question?.Statement }}</p>
      <ul class="flex flex-col gap-5">
        <li class="flex items-center gap-3 classic-box rounded-3xl p-3" v-for="(answer, i) in answers" :key="answer.ID">
          <span class="gradient-border rounded-xl leading-0.5 align-middle h-1/2 aspect-square flex justify-center items-center text-xl">{{ ["A", "B", "C", "D"][i] }}</span>
          <p class="font-light text-lg">{{ answer.Text }}</p>
          <span v-if="answer.Is_correct"> ✅</span>
        </li>
      </ul>
    </div>
    <div class="note-box classic-box"></div>
  </main>
</template>

<style scoped>
p,li {
  color: black;
}

main {
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  grid-template-rows: 9vh auto;
  gap: 4%;

  padding: 3vh 0;
}

.question-box {
  display: flex;
  flex-direction: column;
}

.gradient-border {
  border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box, /* fundo do conteúdo */
              linear-gradient(180deg, #051427, #540D1B, #A74223) border-box; /* borda gradient */
}

</style>
