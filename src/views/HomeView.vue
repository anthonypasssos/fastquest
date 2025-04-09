<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
import TheHeader from '@/components/TheHeader.vue';

</script>

<template>
  <TheHeader />
  <main>
    <div class="main-content">
      <section class="main-section">
        <img src="/public/imgs/home/img_1.png" alt="">
        <div>
          <h1>Prepare-se para os desafios que exigem o melhor de você.</h1>
          <p>Questões práticas e atualizadas para quem busca a excelência em qualquer exame.</p>
        </div>
      </section>
      <section class="sub-section">
        <div>
          <h1>Prepare-se para os maiores desafios da sua carreira jurídica.</h1>
          <p>Questões atualizadas para você se destacar na prova que abre portas para o futuro.</p>
        </div>
        <img src="/public/imgs/home/img_2.png" alt="">
      </section>
    </div>
    <ul>
      <li><ListItem/></li>
      <li><ListItem/></li>
      <li><ListItem/></li>
    </ul>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 30vh;

  height: 92vh;
  width: 100%;
  padding: 3vh 0;
}

.main-content {
  background-color: #F4F4F4;
  grid-column: span 3;
  grid-row: span 2 ;

  border: .5px solid #979494;
  border-radius: 30px;
  filter: drop-shadow(4px 4px 10px #8b8b8b);

  padding: 5%;
}

section {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 50%;
  line-height: 1.1;
}

.main-section {
  justify-content: end;
}

.main-section div {
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 10%;
}


.main-section h1 {
  font-size: 1.9rem;
  color: #892E2F;
}

.main-section p {
  color: #1D3F69;
  font-size: 1.4rem;
  font-weight: 300;
}

.main-section img {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 120%;
}

.sub-section {
  background: rgb(170,66,67);
  background: linear-gradient(180deg, rgba(170,66,67,1) 0%, rgba(68,26,27,1) 100%);
  border-radius: 30px;
  padding: 2%;
}

.sub-section div {
  display: flex;
  flex-direction: column;
  gap: 10%;
  width: 80%;
}

.sub-section h1, .sub-section p {
  color: white;
}

.sub-section h1 {
  font-size: 1.5rem;
}

.sub-section p {
  font-size: 1.5rem;
  font-weight: 300;
}

.sub-section img {
  position: absolute;
  bottom: 0;
  right: 2%;

  height: 100%;
}

ul {
  display: flex;
  justify-content: space-around;
  grid-column: 1 / -1;
}

</style>
