import {
  OPEN_NEW_GROUP_FORM,
  CLOSE_NEW_GROUP_FORM,
  ADD_NEW_GROUP,
} from '../action/action'

export default function group_reducer(state, action) {
  if (action.type === OPEN_NEW_GROUP_FORM) {
    console.log(action)
    return { ...state, isNewGroupFormOpen: true }
  }

  if (action.type === CLOSE_NEW_GROUP_FORM) {
    return { ...state, isNewGroupFormOpen: false }
  }

  if (action.type === ADD_NEW_GROUP) {
    return {
      ...state,
    }
  }
  return state

  throw new Error(`No matching "${action.type}" action type`)
}
