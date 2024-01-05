<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useCounterStore } from './stores/counter';
const store = useCounterStore()

import Banner from './components/Banner.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <Banner />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/pinia">Pinia</RouterLink>
    </nav>
  </header>

  <div class="separator"></div>
  <h1>Vue Pinia Store:</h1>
  <h2>Counter: {{ store.count }}</h2>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16pt;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
