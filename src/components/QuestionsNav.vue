<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Pagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

interface Props {
  pagination: Pagination
}

const props = defineProps<Props>()

// Estado interno reativo
const localPagination = ref<Pagination>({ ...props.pagination })

// Atualiza o localPagination sempre que a prop mudar
watch(() => props.pagination, (newVal) => {
  if (newVal) {
    localPagination.value = { ...newVal }
  }
}, { immediate: true })

const currentPage = computed(() => Number(localPagination.value.current_page) || 1)

const pagesToShow = computed(() => {
  const total = localPagination.value.last_page
  const current = currentPage.value
  const delta = 1
  const range = []

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i)
  }

  const showLeftDots = current - delta > 2
  const showRightDots = current + delta < total - 1

  const pages: (number | string)[] = [1]

  if (showLeftDots) pages.push('...')
  pages.push(...range)
  if (showRightDots) pages.push('...')
  if (total > 1) pages.push(total)

  return pages
})

function goToPage(page: number) {
  if (page < 1 || page > localPagination.value.last_page || page === currentPage.value) return
  // Emita evento se quiser notificar o pai aqui
}

function goToPreviousPage() {
  goToPage(currentPage.value - 1)
}

function goToNextPage() {
  goToPage(currentPage.value + 1)
}
</script>


<template>
  <div class="h-14 py-2 flex justify-between items-center">
      <span class="bg-main flex p-1 rounded-xl h-full">
        <img class="h-full rotate-90" src="/public/imgs/arrow.png" alt="">
      </span>

      <ul class="flex items-center gap-1 h-full">
        <li
          v-for="(num, idx) in pagesToShow"
          :key="idx"
          class="h-full flex justify-center items-center"
        >
          <span
            v-if="num === '...'"
            class="px-2 text-gray-500"
          >...</span>
          <router-link
            v-else
            :to="'/search?page=' + num"
            :class="[
              'flex justify-center items-center p-0.5 h-5/6 text-shadow-lg px-3 rounded-xl leading-0 hover:cursor-pointer',
              currentPage === num ? 'bg-main text-white' : 'classic-box text-black'
            ]"
          >
            {{ num }}
          </router-link>
        </li>
      </ul>

      <span class="bg-main flex p-1 rounded-xl h-full">
        <img class="h-full -rotate-90" src="/public/imgs/arrow.png" alt="">
      </span>
    </div>
</template>
