import { combineReducers } from 'redux'
import app from './app'
import random from './random'

export default function createReducer(asyncReducers) {
  return combineReducers({
    app,
    random,
    ...asyncReducers
  })
}
