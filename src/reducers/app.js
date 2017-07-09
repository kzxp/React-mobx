import { UI_LOADING, UI_LOADED, LOGGED_IN, LOGGED_OUT } from 'constants'

const appReducer = (state = { loading: true, user: {} }, { type, payload }) => {
  switch (type) {
    case UI_LOADING:
      return { ...state, loading: true }

    case UI_LOADED:
      return { ...state, loading: false }

    case LOGGED_IN:
      return { ...state, user: payload, login: true }

    case LOGGED_OUT:
      return { ...state, user: {}, login: false }

    default:
      return state
  }
}

export default appReducer
