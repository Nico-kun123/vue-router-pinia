import{d as e,u as t,c as o,o as a,a as n,_ as d}from"./index-TQsUrXca.js";const r={class:"about"},i=n(`<div class="separator" data-v-4324be67></div><div id="vue router" data-v-4324be67><h1 data-v-4324be67>Simple <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer" data-v-4324be67>Vue Router</a> Configuration</h1><p data-v-4324be67> First, you need to install the Vue Router package. To do this, run the following command in the terminal: </p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>npm install vue-router</pre></div><p data-v-4324be67>Create a new file <code data-v-4324be67>./src/router/index.js</code> and add the following code:</p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>  import { createRouter, createWebHistory } from &#39;vue-router&#39;
  import HomeView from &#39;../views/HomeView.vue&#39;
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: &#39;/&#39;,
        name: &#39;home&#39;,
        component: HomeView
      },
      {
        path: &#39;/about&#39;,
        name: &#39;about&#39;,
        component: () =&gt; import(&#39;../views/AboutView.vue&#39;)
      }
      // OTHER ROUTES
    ]
  })
  
  export default router</pre></div><p data-v-4324be67>Add this code in the <code data-v-4324be67>./src/App.vue</code> file:</p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>  // add this inside the script tag:
  import { RouterLink, RouterView } from &#39;vue-router&#39;
  
  // change the template tag, so it looks something like this:
  template
    header
      Banner /&gt;
      nav
        RouterLink to=&quot;/&quot;&gt;Home /RouterLink&gt;
        RouterLink to=&quot;/about&quot;&gt;About /RouterLink&gt;
      /nav
    /header
  
  RouterView
  /template</pre></div><p data-v-4324be67>All pages components should be placed in the <code data-v-4324be67>./src/views</code> folder.</p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>  ./src/views
  |  AboutView.vue
  |  HomeView.vue
  |  ...</pre></div><p data-v-4324be67> Add this code in the <code data-v-4324be67>./src/main.js</code> file, before <code data-v-4324be67>app.mount(&#39;#app&#39;)</code>: </p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>  import router from &#39;./router&#39;
  // ...
  app.use(router)
  // ...</pre></div></div><div class="separator" data-v-4324be67></div><div id="Pinia" data-v-4324be67><h1 data-v-4324be67> Using <a href="https://pinia.esm.dev/" target="_blank" rel="noopener noreferrer" data-v-4324be67>Pinia</a></h1><p data-v-4324be67> First, you need to install the Pinia package. To do this, run the following command in the terminal: </p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>npm install pinia</pre></div><p data-v-4324be67>Create a new file <code data-v-4324be67>./src/store/index.js</code> and add the following code:</p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>import { ref, computed } from &#39;vue&#39;
import { defineStore } from &#39;pinia&#39;

export const useCounterStore = defineStore(&#39;counter&#39;, () =&gt; {
  const count = ref(0)
  const doubleCount = computed(() =&gt; count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) </pre></div><p data-v-4324be67> Add this code in the <code data-v-4324be67>./src/main.js</code> file, before <code data-v-4324be67>app.mount(&#39;#app&#39;)</code>: </p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>  import store from &#39;./store&#39;
  // ...
  app.use(store)
  // ...</pre></div><p data-v-4324be67> Import <code data-v-4324be67>useCounterStore</code> in a component: </p><div class="code" data-v-4324be67><pre class="myCode" data-v-4324be67>import { useCounterStore } from &#39;@/stores/counter&#39;</pre></div><p data-v-4324be67> To try it out go <a href="/pinia" data-v-4324be67>here</a>! :3 </p></div>`,4),s=[i],c=e({__name:"AboutView",setup(p){return t(),(v,u)=>(a(),o("div",r,s))}}),l=d(c,[["__scopeId","data-v-4324be67"]]);export{l as default};
