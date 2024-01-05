import { assert, test, describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'
// import test from 'node:test'

describe.concurrent('Skipping a Test (test.skip)', () => {
  // Activate Pinia Store for each test (before starting the tests)
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Increment by 1(passed)', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  // skips the test
  test.skip('Increment by 2 (skipped)', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    expect(store.count).toBe(1)
  })
})

describe.concurrent('Running a Certain Test (test.only)', () => {
  // Activate Pinia Store for each test (before starting the tests)
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Increment by 1 (excluded)', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  // skips the test
  // test.only('Increment by 2 (run only this one)', () => {
  //   const store = useCounterStore()
  //   store.increment()
  //   store.increment()
  //   expect(store.count).toBe(2)
  // })
})

describe.concurrent('Tests to do (test.todo)', () => {
  test.todo('unimplemented test')
})

describe.concurrent('Test that is supposed to fail 💀 (test.fails)', () => {
  // Activate Pinia Store for each test (before starting the tests)
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test.fails('0 + 3 != 2', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.increment()
    expect(store.count).toBe(2)
  })
})

describe.skip('Skipping a describe (describe.skip)', () => {
  // Activate Pinia Store for each test (before starting the tests)
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Increment by 1', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('Increment by 2', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    expect(store.count).toBe(2)
  })
})