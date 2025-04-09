<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
import TheHeader from '@/components/TheHeader.vue';
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
  Answer: string
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
    const res = await fetch(`http://localhost:8080/question/${id}`)
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
    const res = await fetch(`http://localhost:8080/questions/${questionId}/answers`)
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
  <TheHeader />
  <main>
    <div class="question-box classic-box">
      <p>{{ question?.Statement }}</p>
      <ul>
        <li v-for="(answer, i) in answers" :key="answer.ID">
          {{ ["a", "b", "c", "d"][i] + ") " + answer.Answer }}
          <span v-if="answer.Is_correct"> ✅</span>
        </li>
      </ul>
    </div>
    <div class="note-box classic-box"></div>
    <ul class="list-items">
      <li>
        <ListItem />
      </li>
      <li>
        <ListItem />
      </li>
      <li>
        <ListItem />
      </li>
    </ul>
  </main>
</template>

<style scoped>
p,li {
  color: black;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.4fr;
  grid-template-rows: 1fr 1fr 30vh;
  gap: 4%;

  height: 92vh;
  width: 100%;
  padding: 3vh 0;
}

.question-box {
  display: flex;
  padding: 25px;
  flex-direction: column;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.question-box p {
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.question-box li {
  margin: 20px 0;
}

.note-box {
  grid-row: 1 / 4;
}

.list-items {
  grid-column: 1 / 4;
  display: flex;
  justify-content: space-around;
}

.list-items li {
  height: 100%;
  width: fit-content;
}
</style>
