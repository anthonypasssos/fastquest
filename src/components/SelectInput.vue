<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

interface Select {
  label: string,
  value: string
}

interface Props {
  placeholder: string,
  selects: Select[],
  selectedValue: string
}

const props = defineProps<Props>()

const isOpen = ref<boolean>(false);

const selected = ref<Select>({label: "", value: ""});

const openSelects = () => {
  isOpen.value = !isOpen.value;
}

const emit = defineEmits<{(e: 'select', item: Select): void}>();

const select = (item: Select) => {
  selected.value = item
  isOpen.value = false
  emit('select', item);
}

const root = ref<HTMLElement | null>(null)

function handleClickOutside(event: MouseEvent) {
  if (!root.value) return

  if (!root.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  const encontrado = props.selects.find(item => item.value === props.selectedValue);
  selected.value = encontrado ?? { label: props.placeholder, value: "" };
});

watch(() => props.selectedValue, (newValue: string) => {
  selected.value = props.selects.find(item => item.value === newValue) ?? {label: props.placeholder, value: ""};
})

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});
</script>

<template>
  <div ref="root" class="w-11/12 hover:cursor-pointer select-none relative">
      <div
      :class="[
          'overflow-hidden pl-3 w-full flex justify-between items-center classic-box',
          isOpen ? 'openInput' : 'rounded-xl classic-box'
      ]"
      @click="openSelects"
      >
        <p :class="['mt-0.5', selected?.label === props.placeholder ?  'ph-color' : 'text-black']">{{ selected?.label }}</p>
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
          @click="select(item)"
        >
          {{ item.label }}
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
