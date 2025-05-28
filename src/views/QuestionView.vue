<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
import ActionBtns from '@/components/ActionBtns.vue';
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { DetailQuestion } from '@/models/DetailQuestion.ts';

const route = useRoute()
const question = ref<DetailQuestion | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const fetchQuestion = async (id: string | number) => {
  loading.value = true
  error.value = null

  try {
    const res = await fetch(`https://fastquest-backend-production.up.railway.app/question/${id}?detail=full`)
    if (!res.ok) throw new Error(`Erro ao buscar questão: ${res.status}`)
    const data: DetailQuestion = await res.json()
    question.value = data
    console.log(question.value)
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
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
  <main class="h-screen w-full overflow-visible">
    <header class="w-full h-full flex items-center justify-between">
      <div class="flex gap-3 h-full w-fit items-center">
        <h1 class="text-black text-3xl leading-none align-middle p-0 m-0 inline">Questão #{{ question?.id }}</h1>
        <img class="h-1/3" src="/public/imgs/save.svg" alt="">
      </div>
      <ul class="flex">
        <li v-for="n in 5" :key="n">
          <img src="/public/imgs/star_full.svg" alt="">
        </li>
      </ul>
    </header>
    <ActionBtns />
    <section class="question-box overflow-y-scroll overflow-x-visible gap-10">
      <p class="classic-box rounded-3xl  p-7 text-lg font-light text-black">{{ question?.statement }}</p>
      <ul class="flex flex-col gap-5">
        <li class="flex items-center gap-3 classic-box rounded-3xl p-3" v-for="(answer, i) in question?.answers" :key="answer.ID">
          <span class="gradient-border rounded-xl leading-0.5 align-middle h-10 aspect-square flex justify-center items-center text-xl text-black">{{ ["A", "B", "C", "D"][i] }}</span>
          <p class="font-light text-lg text-black">{{ answer.Text }}</p>
          <span v-if="answer.Is_correct"> ✅</span>
        </li>
      </ul>
    </section>
    <section class="flex flex-col items-center rounded-2xl overflow-hidden">
      <h1 class="bg-main text-white text-center text-xl p-3 w-full">Informações</h1>
      <div class="classic-box h-full w-full rounded-b-2xl">
        <ul class="text-lg p-5 flex flex-col items-center gap-2 text-black">
          <li class="w-full">Criador: {{ question?.user.name }}</li>
          <hr class="border-main w-5/6">
          <li class="w-full">Fonte: {{ question?.source.Type }}</li>
          <hr class="border-main w-5/6">
          <li class="w-full">Data: {{ question?.source.Metadata.year }}</li>
          <hr class="border-main w-5/6">
          <li class="w-full">Disciplina: {{ question?.subject.Name }}</li>
          <hr class="border-main w-5/6">
          <li class="w-full">
            <h2>Assunto: </h2>
            <ul class="w-full h-full flex py-2 gap-2">
              <li class="rounded-xl flex items-center h-fit py-1 px-3 gap-2 bg-topic font-light">
                <p class="text-white leading-none h-full">Cachorro</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button class="bg-button text-white py-3 m-4 w-full rounded-4xl text-xl hover:cursor-pointer">Ver Resposta</button>
    </section>
  </main>
</template>

<style scoped>

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

.bg-topic {
  background: linear-gradient(
    90deg,
    #6686AF 0%,
    #1D3F69 100%
  );
}
</style>
