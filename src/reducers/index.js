import { combineReducers } from 'redux'
import { DATA } from 'CONSTANTS'
import app from './app'
import createDataReducer from './data'

export default function createReducer(asyncReducers) {
  const dataReducers = DATA.reduce(
    (results, current) => ({ ...results, [current]: createDataReducer(current) }),
    {}
  )

  return combineReducers({
    app,
    ...dataReducers,
    ...asyncReducers
  })
}
