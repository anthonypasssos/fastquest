<script setup lang="ts"></script>

<template>
  <header>
    <div class="input_box">
      <input type="text" placeholder="Pesquise pastas e perguntas">
      <button>
        <img src="/public/imgs/header/search_icon.svg" alt="">
      </button>
    </div>
    <ul>
      <li><img src="/public/imgs/header/config_icon.svg" alt=""></li>
      <li><img src="/public/imgs/header/user_icon.svg" alt=""></li>
    </ul>
  </header>
  <main>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
}

.input_box {
  display: flex;
  align-items: center;
  height: 100%;
  width: 60%;
  padding: 1.3vh 0;
  gap: 10px;
  filter: drop-shadow(4px 4px 10px #8b8b8b);
}

.input_box input {
  width: 100%;
  font-size: 1.3rem;
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
  width: 80%;
}

header ul {
  display: flex;
  align-items: center;
  height: 100%;
}

header ul li {
  display: flex;
  align-items: center;
}

header ul li img {
  width: 90%;
}

main {
  display: grid;
  height: 100%;
  width: 100%;
}
</style>