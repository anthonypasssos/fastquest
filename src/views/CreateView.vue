<script setup lang="ts">
import ActionBtns from '@/components/ActionBtns.vue';

</script>

<template>
    <main class="px-[3vw] py-6 h-screen overflow-y-scroll flex flex-wrap justify-between">
        <header class="flex h-[8vh] w-full items-center gap-4 mb-6">
            <button class="bg-main flex items-center justify-center p-1 rounded-xl h-4/6 aspect-square hover:cursor-pointer">
                <img class="h-5/6 rotate-90" src="/public/imgs/arrow.png" alt="">
            </button>
            <h1 class="text-black text-2xl leading-none align-middle p-0 m-0 mt-1.5 whitespace-nowrap">Questões administrativas</h1>
            <img class="h-1/3 hover:cursor-pointer" src="/public/imgs/save.svg" alt="">
            <ActionBtns />
        </header>
        <section class="w-8/12 classic-box-dark min-h-full h-screen rounded-2xl p-6">
            <div class="flex items-center justify-center h-12">
                <input class="h-full w-full text-lg p-3 rounded-xl mr-9 shadow" type="text" placeholder="Pesquisar questões..." />
                <div class="flex items-center h-full p-2 aspect-square bg-main rounded-xl hover:cursor-pointer shadow">
                    <image src="/public/imgs/plus.png" alt="Adicionar questão" class="h-full w-full"/>
                </div>
            </div>
            <ul>
                <li class="flex blue-gradient text-white px-2 py-3 rounded-xl my-5">
                    <h2 class="text-xl px-4">1</h2>
                    <p class="font-thin text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ea numquam enim assumenda, sint atque explicabo, error mollitia illo autem dignissimos maiores provident similique voluptate doloribus maxime porro! Soluta a laborum assumenda, sunt repellat laboriosam odio amet provident aperiam eveniet?</p>
                </li>
            </ul>
        </section>
        <section class="w-3/12 classic-box-dark h-[82vh] rounded-2xl">
        </section>
    </main>
</template>

<style scoped>
    input {
        background-color: #F4F4F4;
        border: 1px solid #979494;
    }

    .blue-gradient {
        background: linear-gradient(
            90deg,
            #6686AF 0%,
            #1D3F69 100%
        );
    }
</style>