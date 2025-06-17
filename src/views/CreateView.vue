<script setup lang="ts">
import ActionBtns from '@/components/ActionBtns.vue';
import SearchBar from '@/components/SearchBar.vue';

</script>

<template>
    <main>
        <header class="flex justify-between">
            <SearchBar />
            <ActionBtns />
        </header>
        <section class="w-full classic-box">
            <div class="w-1/6 h-1/6"></div>
        </section>
        <section></section>
    </main>
</template>