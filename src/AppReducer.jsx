import React from "react";

export const InitialState = {
  show: false,
  title: "",
  content: "",
}

export const ACTIONS = {
  MODIFY: "modify",
}


export const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.MODIFY:
      return {
        ...state,
        show: payload.show,
        title: payload.title,
        content: payload.content
      }
    default:
      return state
  }
}

