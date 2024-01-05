import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function multiply() {
    count.value *= 2
  }

  function divide() {
    count.value /= 2
  }

  function reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, decrement, multiply, divide, reset }
})