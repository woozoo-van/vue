<script setup>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import TodoList from './components/TodoList.vue'

</script>

<template>
  <header>
    <Header />
  </header>

  <nav>
    <Nav />
  </nav>

  <aside>
    <cite>aside</cite>
  </aside>

  <main>

    <section>
      <TodoList />
    </section>

    <article>
      <cite>article</cite>
    </article>

  </main>

  <footer>
  </footer>

</template>

<style scoped></style>
