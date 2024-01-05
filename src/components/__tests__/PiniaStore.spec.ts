import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Pinia Counter Store', () => {
  // Activate Pinia Store for each test (before starting the tests)
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Init', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('Increment', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('Decrement', () => {
    const store = useCounterStore()
    store.decrement()
    expect(store.count).toBe(-1)
  })

  it('Multiply', () => {
    const store = useCounterStore()
    store.multiply()
    expect(store.count).toBe(0)
  })

  it('Divide', () => {
    const store = useCounterStore()
    store.divide()
    expect(store.count).toBe(0)
  })

  it('Reset', () => {
    const store = useCounterStore()
    store.reset()
    expect(store.count).toBe(0)
  })
})
