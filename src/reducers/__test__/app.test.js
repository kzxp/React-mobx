import { default as reducer, initialState } from '../app'

describe('App reducer', () => {
  it('return initialState when pass undefiend', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual(initialState)
  })
})
