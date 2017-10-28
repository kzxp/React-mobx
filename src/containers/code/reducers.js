import fp from 'lodash/fp'
import { EditorState } from 'draft-js'
import { EDIT_DRAFT } from 'CONSTANTS'

export const initialState = { title: '', intro: EditorState.createEmpty(), content: '', tags: [] }

const draft = (state = initialState, { type, payload }) => {
  const key = fp.get('key', payload)
  const value = fp.get('value', payload)

  switch (type) {
    case EDIT_DRAFT:
      return {
        ...state,
        [key]: value
      }
    default:
      return state
  }
}

export default {
  draft
}
