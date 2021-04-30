import React, { createContext, useState } from "react"

export const ReactionContext = createContext()

export const ReactionProvider = (props) => {
  const [reactions, setReactions] = useState([])

  const getReactions = () => {
    return fetch("http://localhost:8088/reactions")
    .then(res => res.json())
    .then(setReactions)
  }

  return (
    <ReactionContext.Provider value={{
      reactions, getReactions
    }}>
      {props.children}
    </ReactionContext.Provider>
  )
}