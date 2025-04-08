<script setup lang="ts"></script>

<template>
  <header>
    <img src="/public/imgs/flashquest_logo.png" alt="" />
    <nav>
      <ul>
        <li>Home</li>
        <li>Questões</li>
        <li>Pastas</li>
        <li>Criar</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 20%;

  background: rgb(5, 20, 39);
  background: linear-gradient(
    180deg,
    rgba(5, 20, 39, 1) 0%,
    rgba(84, 13, 27, 1) 51%,
    rgba(167, 66, 35, 1) 100%
  );
}

img {
  width: 60%;
  margin: 10% 0;
}

li {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 15px 0;
}

nav {
  width: 70%;
  margin: 50px 0;
}

nav ul li {
  font-size: 1.5rem;
  color: #d9d9d9;
  border-bottom: 1px solid #b5a7aa;
}
</style>
