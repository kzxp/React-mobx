import { default as reducer, initialState } from '../random'

describe('Random reducer', () => {
  it('return initialState when pass undefiend', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual(initialState)
  })
})
