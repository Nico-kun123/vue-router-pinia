<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<template>
  <div class="separator"></div>

  <h1>Playing around with <a href="https://pinia.esm.dev/" target="_blank" rel="noopener noreferrer">Pinia</a></h1>

  <p>Changing the value of <code>counter</code> in our Pinia store:</p>
  
  <div class="code">
    <pre class="myCode" style="margin-bottom: 0">
  {{ store.$id }}:<br><br>  count: {{ store.$state.count }}
  doubleCount: {{ store.doubleCount }}</pre>
    <button @click="store.increment()" class="btn">+1</button>
    <button @click="store.decrement()" class="btn">-1</button>
    <button @click="store.multiply()" class="btn">*2</button>
    <button @click="store.divide()" class="btn">/2</button>
    <button @click="store.reset()" class="btn__reset">Reset</button>
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
.myCode {
  width: max-content;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 15px;
  border-bottom-left-radius: 0;
  margin-top: 10px;
  margin-bottom: 30px;
  min-width: 220px;
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
