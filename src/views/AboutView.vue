<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();

</script>

<template>
  <div class="about">
    <div class="separator"></div>
    
    <div id="vue router">

      <h1>Simple 
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router</a>
        Configuration</h1>
  
      <p>
        First, you need to install the Vue Router package. To do this, run the following command in
        the terminal:
      </p>
      <div class="code">
        <pre class="myCode">npm install vue-router</pre>
        <!-- <button class="btn" data-clipboard-target=".myCode">Copy</button> -->
      </div>
  
      <p>Create a new file <code>./src/router/index.js</code> and add the following code:</p>
      <div class="code">
        <pre class="myCode">
  import { createRouter, createWebHistory } from 'vue-router'
  import HomeView from '../views/HomeView.vue'
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
      // OTHER ROUTES
    ]
  })
  
  export default router</pre
        >
      </div>
  
      <p>Add this code in the <code>./src/App.vue</code> file:</p>
      <div class="code">
        <pre class="myCode">
  // add this inside the script tag:
  import { RouterLink, RouterView } from 'vue-router'
  
  // change the template tag, so it looks something like this:
  template
    header
      Banner />
      nav
        RouterLink to="/">Home /RouterLink>
        RouterLink to="/about">About /RouterLink>
      /nav
    /header
  
  RouterView
  /template</pre
        >
      </div>
  
      <p>All pages components should be placed in the <code>./src/views</code> folder.</p>
      <div class="code">
        <pre class="myCode">
  ./src/views
  |  AboutView.vue
  |  HomeView.vue
  |  ...</pre
        >
      </div>
  
      <p>
        Add this code in the <code>./src/main.js</code> file, before <code>app.mount('#app')</code>:
      </p>
      <div class="code">
        <pre class="myCode">
  import router from './router'
  // ...
  app.use(router)
  // ...</pre
        >
      </div>
    </div>

    <div class="separator"></div>
    
    <div id="Pinia">

      <h1>
        Using
        <a href="https://pinia.esm.dev/" target="_blank" rel="noopener noreferrer">Pinia</a>
      </h1>
  
      <p>
        First, you need to install the Pinia package. To do this, run the following command in the
        terminal:
      </p>
      <div class="code">
        <pre class="myCode">npm install pinia</pre>
      </div>
  
      <p>Create a new file <code>./src/store/index.js</code> and add the following code:</p>
      <div class="code">
        <pre class="myCode">
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) </pre
        >
      </div>
  
      <p>
        Add this code in the <code>./src/main.js</code> file, before <code>app.mount('#app')</code>:
      </p>
      <div class="code">
        <pre class="myCode">
  import store from './store'
  // ...
  app.use(store)
  // ...</pre
        >
      </div>

      <p>
        Import <code>useCounterStore</code> in a component:
      </p>
      <div class="code">
        <pre class="myCode">import { useCounterStore } from '@/stores/counter'</pre
        >
      </div>

      <p>
        To try it out go <a href="/pinia">here</a>! :3
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  /* font-size: 18pt; */
  position: relative;
  /* text-align: center; */
  margin-bottom: 25px;
  margin-top: 25px;
}

h3 {
  font-size: 1.2rem;
}

a {
  // color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.btn {
  background-color: hsla(160, 100%, 37%, 1);
  color: black;
  border: none;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-right: 5px;
  border-top-left-radius: 0;
  // border-bottom-left-radius: 0;
  border-top-right-radius: 0;

  &:hover {
    background-color: hsla(160, 100%, 37%, 0.6);
    color: white;
  }
}
.btn__reset {
  background-color: rgb(255, 0, 0);
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-right: 5px;
  border-top-left-radius: 0;
  // border-bottom-left-radius: 0;
  border-top-right-radius: 0;

  &:hover {
    background-color: hsla(0, 100%, 50%, 0.6);
    color: white;
  }
}

.about {
  width: 100%;
}
.myCode {
  width: max-content;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 15px;
  border-bottom-left-radius: 0;
  margin-top: 10px;
  margin-bottom: 30px;
}

// .separator {
//   width: 100%;
//   height: 1px;
//   background-color: var(--color-text);
//   margin-bottom: 25px;
//   // color: var(--color-text);
// }
code {
  width: max-content;
  background-color: hsla(160, 100%, 37%, 1);
  color: black;
  font-weight: bold;
  border-radius: 5px;
  padding: 1px;
  margin-bottom: 20px;
}
</style>
