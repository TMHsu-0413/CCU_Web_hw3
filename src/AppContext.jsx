import React, { createContext, useReducer } from 'react'
import { InitialState, AppReducer, ACTIONS } from './AppReducer';


export const AppContext = createContext(InitialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  const modifyAlert = (show, title, content) => {
    dispatch({
      type: ACTIONS.MODIFY,
      payload: {
        ...state,
        show: show,
        title: title,
        content: content
      }
    })
  }
  const value = {
    show: InitialState.show,
    title: InitialState.title,
    content: InitialState.content,
    modifyAlert
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
