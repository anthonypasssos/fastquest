<script setup lang="ts">
import ActionBtns from '@/components/ActionBtns.vue';

</script>

<template>
    <main class="w-full h-full overflow-y-scroll gap-5 flex flex-col">
        <header class="h-[8vh] flex items-center gap-4">
            <button class="bg-main flex p-1 rounded-xl h-4/6 aspect-square hover:cursor-pointer">
                <img class="h-full rotate-90" src="/public/imgs/arrow.png" alt="">
            </button>
            <h1 class="text-black text-3xl leading-none align-middle p-0 m-0 mt-1.5 whitespace-nowrap">Questões administrativas</h1>
            <img class="h-1/3 hover:cursor-pointer" src="/public/imgs/save.svg" alt="">

            <ActionBtns />
        </header>
        <section class="flex justify-between h-[30vh]">
            <div class="flex flex-col justify-center items-center w-2/6 aspect-square">
                <img src="/public/imgs/List/list_icon_1.png" alt="" class="h-[100%] object-contain">
            </div>
            <div class="w-full h-full classic-box rounded-3xl flex items-center p-8 gap-10">
                <ul class="text-black text-lg whitespace-nowrap">
                    <li>Criador: Teste</li>
                    <li>Fonte: Alguma ai</li>
                    <li>Data: 2024</li>
                    <li>Disciplina: Extra Curricular</li>
                </ul>
                <span class="block w-[1px] h-5/6"></span>
                <p class="text-black font-light text-lg">Esta lista contém uma série de questões fundamentais e de aprofundamento sobre o direito criminal, abordando desde conceitos básicos até tópicos mais complexos relacionados à legislação penal. As perguntas cobrem temas essenciais como os tipos de crime, princípios do direito penal, a aplicação das penas, o processo criminal, a responsabilidade penal e os direitos dos acusados.</p>
            </div>
        </section>
        <ul class="w-full rounded-2xl text-lg p-10 questions flex flex-col gap-3">
            <li v-for="n in 10" class="flex text-black h-[15vh] overflow-hidden rounded-2xl question">
                <div class="h-full w-3/12 flex justify-center items-center text-white">
                    <p>Questão #{{ n }}</p>
                </div>
                <p class="font-light my-auto px-5 py-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ratione vel. Facilis, quia ea doloremque temporibus officiis dolor rerum corporis eos atque, facere magnam voluptatem, dolorum asperiores minima nobis blanditiis.
                </p>
            </li>
        </ul>
        <button class="absolute right-8 bottom-8 text-white px-10 py-3 text-2xl rounded-2xl hover:cursor-pointer">Responder</button>
    </main>
</template>

<style scoped>
    span {
        background-color: #979494;
    }

    .questions {
        background-color: #EAEAEA;
        border: .5px solid #D9D9D9;
        filter: drop-shadow(4px 4px 10px #b0b0b0);

    }

    .question div {
        background: linear-gradient(180deg, #6686AF, #1D3F69);
    }

    .question {
        background-color: #F4F4F4;
        filter: drop-shadow(0px 4px 4px #b0b0b0);
    }

    button {
        background: linear-gradient(180deg, #540D1B, #AA4243);
    }
</style>