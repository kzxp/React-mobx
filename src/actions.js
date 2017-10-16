import { createAction } from 'redux-actions'
import { INIT_APPLICATION, FETCH_DATA } from 'CONSTANTS'

export const initApplication = createAction(INIT_APPLICATION)
export const fetchData = createAction(FETCH_DATA)
export const fetchedData = name => createAction(`FETCHED_${name}_DATA`)
