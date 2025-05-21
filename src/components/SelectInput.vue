<script setup lang="ts">
defineProps({
  placeholder: String
})
</script>

<template>
  <div class="classic-box w-11/12 text-phc flex justify-between items-center h-1/12 overflow-hidden pl-3 rounded-xl">
      <p class="text-xl">{{ placeholder }}</p>
      <button class="bg-main h-full p-1.5">
        <img class="h-full" src="/public/imgs/arrow.png" alt="">
      </button>
    </div>
</template>

<style scoped>
  div:hover {
    cursor: pointer;
  }
</style>
