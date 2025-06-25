<script setup lang="ts">
import ActionBtns from '@/components/ActionBtns.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import type { NewList } from '../models/NewList';
import { useRouter } from 'vue-router';


const newListData = ref<NewList>({
  name: "",
  type: "list",
  is_private: false,
  user_id: 1,
  questions: []
})

const router = useRouter();

const goToAddToList = () => {
  router.push('/search/add-to-list');
};

onMounted(() => {
  const stored = localStorage.getItem('newListData');

  if (stored) {
    const parsed = JSON.parse(stored);
    Object.assign(newListData.value, parsed);
  };
})

onUnmounted(() => {
  localStorage.setItem("newListData", JSON.stringify(newListData.value));
})
</script>

<template>
    <main class="px-[3vw] py-3 h-screen overflow-y-scroll flex flex-wrap justify-between">
        <header class="flex h-[9vh] w-full items-center gap-4">
            <button class="bg-main flex items-center justify-center p-1 rounded-xl h-4/6 aspect-square hover:cursor-pointer">
                <img class="h-5/6 rotate-90" src="/public/imgs/arrow.png" alt="">
            </button>
            <h1 class="text-black text-2xl leading-none align-middle p-0 m-0 mt-1.5 whitespace-nowrap">Questões administrativas</h1>
            <img class="h-1/3 hover:cursor-pointer" src="/public/imgs/save.svg" alt="">
            <ActionBtns />
        </header>
        <div class="flex justify-between min-h-[0]">
          <section class="w-8/12 classic-box-dark min-h-[80vh] rounded-2xl p-6">
            <div class="flex items-center justify-center h-10">
                <input v-model="newListData.name" class="h-full w-full text-lg p-3 rounded-xl mr-9 shadow text-black" type="text" placeholder="Adicione um nome para sua lista..." />
                <button @click.stop="goToAddToList" class="flex items-center h-full p-2 aspect-square bg-main rounded-xl hover:cursor-pointer shadow">
                    <img src="/public/imgs/plus.png" alt="Adicionar questão" class="h-full w-full"/>
                </button>
            </div>
            <ul>
                <li class="flex blue-gradient text-white px-2 py-3 rounded-xl my-5">
                    <h2 class="text-lg px-4">1</h2>
                    <p class="font-thin text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ea numquam enim assumenda, sint atque explicabo, error mollitia illo autem dignissimos maiores provident similique voluptate doloribus maxime porro! Soluta a laborum assumenda, sunt repellat laboriosam odio amet provident aperiam eveniet?</p>
                </li>
                <li class="flex blue-gradient text-white px-2 py-3 rounded-xl my-5">
                    <h2 class="text-lg px-4">1</h2>
                    <p class="font-thin text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ea numquam enim assumenda, sint atque explicabo, error mollitia illo autem dignissimos maiores provident similique voluptate doloribus maxime porro! Soluta a laborum assumenda, sunt repellat laboriosam odio amet provident aperiam eveniet?</p>
                </li>
                <li class="flex blue-gradient text-white px-2 py-3 rounded-xl my-5">
                    <h2 class="text-lg px-4">1</h2>
                    <p class="font-thin text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ea numquam enim assumenda, sint atque explicabo, error mollitia illo autem dignissimos maiores provident similique voluptate doloribus maxime porro! Soluta a laborum assumenda, sunt repellat laboriosam odio amet provident aperiam eveniet?</p>
                </li>
            </ul>
        </section>
        <section class="w-3/12 h-[86vh] flex flex-col justify-between flex-[0_0_auto]">
          <div class="classic-box-dark h-full rounded-2xl flex flex-col p-6">
            <h2 class="text-black text-xl">Informações</h2>
            <textarea class="classic-box rounded-xl h-2/6 p-2" placeholder="Descrição da lista..." id=""></textarea>
          </div>
          <button class="bg-button w-full h-14 rounded-2xl mt-6 hover:cursor-pointer text-white text-xl">Criar</button>
        </section>
        </div>
    </main>
</template>

<style scoped>
    input {
        background-color: #F4F4F4;
        border: 1px solid #979494;
    }

    input::placeholder, textarea::placeholder {
        color: #979494;
    }

    .blue-gradient {
        background: linear-gradient(
            90deg,
            #6686AF 0%,
            #1D3F69 100%
        );
    }
</style>
