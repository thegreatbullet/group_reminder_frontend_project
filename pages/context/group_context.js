import React, { useContext, useReducer } from 'react'

import {
  OPEN_NEW_GROUP_FORM,
  CLOSE_NEW_GROUP_FORM,
  ADD_NEW_GROUP,
} from '../action/action'
import group_reducer from '../reducers/group_reducer.js'

const initialState = {
  groupTitle: '',
  groups: [
    {
      id: 1,
      name: 'Group1',
    },
    {
      id: 2,
      name: 'Group2',
    },
    {
      id: 3,
      name: 'Group3',
    },
    {
      id: 4,
      name: 'Group4',
    },
  ],

  isNewGroupFormOpen: false,
}

const GroupsContext = React.createContext()

export function GroupsProvider({ children }) {
  const [state, dispatch] = useReducer(group_reducer, initialState)

  // OPEN/CLOSE NEW GROUP FORM
  function openNewGroupForm() {
    dispatch({ type: OPEN_NEW_GROUP_FORM })
  }

  function closeNewGroupForm() {
    dispatch({ type: CLOSE_NEW_GROUP_FORM })
  }

  // ADD GROUP TO CONTEXT

  function addNewGroup() {
    dispatch({ type: ADD_NEW_GROUP, payload: groups })
  }

  return (
    <GroupsContext.Provider
      value={{ ...state, openNewGroupForm, closeNewGroupForm }}
    >
      {children}
    </GroupsContext.Provider>
  )
}

export function useGroupContext() {
  return useContext(GroupsContext)
}
