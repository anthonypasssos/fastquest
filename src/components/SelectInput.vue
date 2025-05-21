<script setup lang="ts">
defineProps({
  placeholder: String
})
</script>

<template>
  <div class="w-11/12 flex justify-between items-center overflow-hidden pl-3 rounded-xl">
      <p class="text-xl">{{ placeholder }}</p>
      <button class="bg-main h-12 p-1.5">
        <img class="h-full" src="/public/imgs/arrow.png" alt="">
      </button>
    </div>
</template>

<style scoped>
  div {
    border: .5px solid #BFBFBF;
  }

  div:hover {
    cursor: pointer;
  }

  p {
    color: #C5C5C5;
  }
</style>
