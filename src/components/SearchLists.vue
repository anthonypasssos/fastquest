<script setup lang="ts">
import QuestionsNav from '@/components/QuestionsNav.vue'
import { API_BASE_URL } from '@/config/api';
import type { NewList } from '@/models/NewList';
import type { List } from '@/models/List';
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

interface Pagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

interface ListResponse {
  data: List[]
  pagination: Pagination
}

const lists = ref<ListResponse | null>(null)

const limitChars = (text: string, max = 300): string => {
  return text.length <= max ? text : text.slice(0, max) + '…';
};


function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const fetchLists = async () => {
  lists.value = null;

  const query = new URLSearchParams({
    ...route.query,
    limit: "3",
    detail: "information"
  });

  try {
    const res = await fetch(`${API_BASE_URL}/question-sets?${query}`)
    const data = await res.json() as ListResponse
    console.log(data);

    data.data = data.data.map(q => ({
      ...q,
      statement: limitChars(q.desc, Math.round(window.innerHeight / 3.5))
    }))

    lists.value = data
  } catch (err) {
    console.error('Erro ao buscar questões:', err)
  }
}

const debouncedFetch = debounce(fetchLists, 300)

const goToList = (id: number) => {
  if (!addTolist.value) router.push('/list/' + id)
}

const addTolist = ref<boolean>(false);

const newListData = ref<NewList>({
  name: "",
  type: "list",
  desc: "",
  is_private: false,
  user_id: 1,
  questions: []
})

onMounted(async () => {
  await fetchLists()
});

watch(() => route.fullPath, () => {
  debouncedFetch();
})
</script>

<template>
  <div class="h-full flex flex-col">
    <ul v-if="lists" class="flex flex-col gap-auto h-full gap-2.5">
      <li
        v-for="list in lists.data"
        :key="list.id"
        class="classic-box flex items-center max-h-1/3 h-1/3 w-full pr-5 rounded-2xl hover:cursor-pointer relative"
        @click="goToList(list.id!)"
      >
        <ul class="bg-header text-white flex flex-col justify-around h-full w-2/5 p-5 rounded-tl-2xl rounded-bl-2xl">
          <li>Nome: {{ list.name ?? 'Indefinido'}}</li>
          <li>Data: {{ list.creation_date.slice(0,4)}}</li>
        </ul>
        <p
          class="text-black h-full w-full p-4 text-lg text-ellipsis break-words line-clamp-5"
        >
          {{ list.desc }}
        </p>
      </li>
    </ul>

    <div v-else class="h-full w-full flex justify-center items-center flex-col text-black">
      <p>Carregando questões...</p>
    </div>

    <QuestionsNav :pagination="lists?.pagination!" v-if="lists?.pagination.total != 1"/>
  </div>
</template>

<style scoped>
a {
  font-weight: 300;
  line-height: 1;
}

.bg-header {
  background: linear-gradient(180deg, #6686AF 0%, #1D3F69 100%);
}
</style>
