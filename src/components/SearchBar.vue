<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref<string>('')

// Permitir que o componente emita o evento 'input'
const emit = defineEmits<{
  (e: 'input', value: string): void
}>()

const handleInput = () => {
  emit('input', inputText.value)
}
</script>

<template>
  <div class="input_box">
      <input
        class="text-ph text-black" type="text" placeholder="Pesquise pastas e perguntas"
        v-model="inputText"
        @input="handleInput"
        >
      <button>
        <router-link to="/search" class="flex justify-center"><img src="/public/imgs/header/search_icon.svg" alt=""></router-link>
      </button>
    </div>
</template>

<style scoped>
.input_box {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1.2vh 0;
  gap: 10px;
  filter: drop-shadow(4px 4px 10px #8b8b8b);
}

.input_box input {
  width: 100%;
  font-size: 1rem;
  height: 100%;
  border: 1px solid #979494;
  padding-left: 1rem;
  border-radius: 15px;
}

.input_box button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
  border: none;
  border-radius: 15px;
  background: rgb(5, 20, 39);
  background: linear-gradient(
    180deg,
    rgba(5, 20, 39, 1) 0%,
    rgba(84, 13, 27, 1) 51%,
    rgba(167, 66, 35, 1) 100%
  );
}

.input_box button:hover {
  cursor: pointer;
}

.input_box button img {
  width: 70%;
}
</style>
