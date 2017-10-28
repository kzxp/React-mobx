import { createAction } from 'redux-actions'
import { INIT_APPLICATION, FETCH_DATA, EDIT_DRAFT } from 'CONSTANTS'

export const initApplication = createAction(INIT_APPLICATION)
export const fetchData = createAction(FETCH_DATA)
export const fetchedData = name => createAction(`FETCHED_${name}_DATA`)
export const editDraft = createAction(EDIT_DRAFT, (key, value) => ({ key, value }))
