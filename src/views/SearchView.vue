<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';

</script>

<template>
  <TheHeader />
  <main>
    <ul>
      <li class="classic-box">As irmãs Alessandra, Antônia, Alba e Aline foram dispensadas de seus empregos em 2024, e cada qual contratou uma advogada de sua confiança para ajuizar reclamação trabalhista visando postular horas extras. Alessandra tem 58 anos de idade; Antônia, 65 anos de idade; Alba, 50 anos de idade; e Aline, 61 anos de idade...</li>
    </ul>
  </main>
</template>

<style scoped>
main {
  height: 92vh;
  width: 100%;
  padding: 3vh 0;
}

ul {
  width: 100%;
}

ul li {
  color: black;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1;
}
</style>
