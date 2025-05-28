<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  placeholder: String,
  selects: Array,
  query: String
})

const isOpen = ref<boolean>(false);

const label = ref<string>("");

const openSelects = () => {
  isOpen.value = !isOpen.value
}

const sendSelect = (item: Record<string, any>) => {
  label.value = item.name
  isOpen.value = false
  router.push({
    query: {
      ...route.query,
      [props.query]: item.order
    }
  })

}

onMounted(() => {
  label.value = props.placeholder ?? "Valor Invalido";
})
</script>

<template>
  <div class="w-11/12 hover:cursor-pointer select-none relative">
      <div
      :class="[
          'overflow-hidden pl-3 w-full flex justify-between items-center classic-box',
          isOpen ? 'openInput' : 'rounded-xl classic-box'
      ]"
      @click="openSelects"
      >
        <p :class="label === props.placeholder ?  'ph-color' : 'text-black'">{{ label }}</p>
        <span class="bg-main h-8 p-1.5">
          <img :class="['h-full', isOpen ? 'rotate-180' : '']" src="/public/imgs/arrow.png" alt="">
        </span>
      </div>
      <ul
        class="absolute top-full w-full selects z-10"
        v-if="isOpen"
      >
        <li
          class="text-black px-3 py-1"
          v-for="(item, i) in selects"
          :key="i"
          @click="sendSelect(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
</template>

<style scoped>
  .selects {
    border-color: #BFBFBF;
    border-width: 0px .5px .5px .5px;
    border-style: solid;
    background-color: #F4F4F4;
    border-radius: 0 0 0.75rem 0.75rem;
  }

  .selects li:hover {
    background-color: #e5e5e5;
  }

  .openInput {
    border-color: #BFBFBF;
    border-width: .5px;
    border-style: solid;
    border-radius: 0.75rem 0.75rem 0  0;
  }

  .classic-border {
    border: .5px solid #BFBFBF;
  }

  div:hover {
    cursor: pointer;
  }

  .ph-color {
    color: #C5C5C5;
  }
</style>
