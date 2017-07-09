import { combineReducers } from 'redux'
import app from './app'

export default function createReducer(asyncReducers) {
  return combineReducers({
    app,
    ...asyncReducers
  })
}
