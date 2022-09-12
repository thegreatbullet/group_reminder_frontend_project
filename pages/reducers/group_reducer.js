import {
  OPEN_NEW_GROUP_FORM,
  CLOSE_NEW_GROUP_FORM,
  ADD_NEW_GROUP,
  INITIALIZE_GROUPS,
} from '../action/action'

export default function group_reducer(state, action) {
  switch (action.type) {
    case INITIALIZE_GROUPS:
      return { ...state, groups: action.payload }
    case OPEN_NEW_GROUP_FORM:
      return { ...state, isNewGroupFormOpen: true }
    case CLOSE_NEW_GROUP_FORM:
      return { ...state, isNewGroupFormOpen: false }
    case ADD_NEW_GROUP:
      return { ...state }
    default:
      throw new Error(`No matching "${action.type}" action type`)
  }
}
