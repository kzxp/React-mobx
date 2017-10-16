import _ from 'lodash/fp'
import { takeLatest, takeEvery, all, put, call } from 'redux-saga/effects'
import { INIT_APPLICATION, FETCH_DATA, DATA } from 'CONSTANTS'

// Actions
import { fetchData, fetchedData } from 'actions'

import { fetchStore } from 'api-services/firebase'

export function* onInitApp(action, payload) {
  yield put(fetchData())
}

export function* onFetchData(action, payload) {
  for (let collection of DATA) {
    const { hash: data, sequence } = yield call(fetchStore, collection)
    yield put(fetchedData(collection)({ data, sequence }))
  }
}

export default function* rootSaga() {
  yield takeLatest([INIT_APPLICATION], onInitApp)
  yield takeLatest([FETCH_DATA], onFetchData)
}
