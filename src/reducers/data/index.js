import fp from 'lodash/fp'
export const initialState = { data: {}, sequence: [], isFetching: false }

const dataReducer = name => (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA':
      return {
        ...state,
        isFetching: true
      }
    case `FETCHED_${name}_DATA`:
      return {
        isFetching: false,
        data: fp.get('data', payload),
        sequence: fp.get('sequence', payload)
      }
    default:
      return state
  }
}

export default dataReducer
