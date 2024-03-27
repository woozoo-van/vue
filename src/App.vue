<script setup>
import { ref } from 'vue';

const count = ref(0)

const text = ref('')

function increment() {
  count.value++
}

function onInput(e){
  text.value = e.target.value
}

const awesome = 1

function toggle() {
  awesome.value = 0
}

</script>

<template>
  <header>
    <h1 v-if="awesome">Hello Vue</h1>
    <h1 v-else>Oh No</h1>
  </header>

  <section>
    <button @click="increment"> 숫자 올려! : {{ count }}</button>
    <input :value="text" @input="onInput"> <!-- 양방향 바인딩-->
    <p>{{ text }}</p>

    <input v-model="text"> <!-- 양방향 바인딩 간소화 -->
    <p>{{ text }}</p>
  </section>
 
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
