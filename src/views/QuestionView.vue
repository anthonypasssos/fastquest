<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
import TheHeader from '@/components/TheHeader.vue';
import { watch } from 'vue';

const props = defineProps<{
  id: string
}>()

watch(() => props.id, (newId) => {
  console.log('ID mudou:', newId)
})
</script>

<template>
  <TheHeader />
  <main>
    <div class="question-box classic-box">
      <p>As irmãs Alessandra, Antônia, Alba e Aline foram dispensadas de seus empregos em 2024, e cada qual contratou uma advogada de sua confiança para ajuizar reclamação trabalhista visando postular horas extras. Alessandra tem 58 anos de idade; Antônia, 65 anos de idade; Alba, 50 anos de idade; e Aline, 61 anos de idade. Considerando a norma de regência, assinale a opção que indica o(s) processo(s) que terá(ão) prioridade na tramitação.</p>
      <ul>
        <li>a) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, sed.</li>
        <li>b) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, sed.</li>
        <li>c) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, sed.</li>
        <li>d) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, sed.</li>
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
  flex-direction: column;
  justify-content: space-around;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
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
