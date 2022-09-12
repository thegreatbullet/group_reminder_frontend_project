import React, { useContext, useReducer } from 'react'

import {
  OPEN_NEW_GROUP_FORM,
  CLOSE_NEW_GROUP_FORM,
  ADD_NEW_GROUP,
  INITIALIZE_GROUPS,
} from '../action/action'
import group_reducer from '../reducers/group_reducer.js'

const initialState = {
  groups: [],
  isNewGroupFormOpen: false,
}

const GroupsContext = React.createContext()

export function GroupsProvider({ children }) {
  const [state, dispatch] = useReducer(group_reducer, initialState)
  // Initialize Groups

  function initializeGroups(data) {
    dispatch({ type: INITIALIZE_GROUPS, payload: data })
  }

  // Open/Close New Group Form
  function openNewGroupForm() {
    dispatch({ type: OPEN_NEW_GROUP_FORM })
  }

  function closeNewGroupForm() {
    dispatch({ type: CLOSE_NEW_GROUP_FORM })
  }

  // Add Group to Context

  function addNewGroup() {
    dispatch({ type: ADD_NEW_GROUP, payload: groups })
  }

  return (
    <GroupsContext.Provider
      value={{
        ...state,
        openNewGroupForm,
        closeNewGroupForm,
        initializeGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  )
}

export function useGroupContext() {
  return useContext(GroupsContext)
}
