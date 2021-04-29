import React, { createContext, useState } from "react"

export const PostReactionContext = createContext()

export const PostReactionProvider = (props) => {
  const [postReactions, setPostReactions] = useState([])

  const getPostReactionsById = (post_id) => {
    return fetch(`http://localhost:8088/postreactions/${post_id}`)
    .then(res => res.json())
    .then(res => setPostReactions(res))
    .then(console.log(postReactions))
  }

  const addReaction = (postReaction) => {
    return fetch("http://localhost:8088/postreactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postReaction)
    })
    .then(getPostReactionsById(postReaction.post_id))
  }

  return (
    <PostReactionContext.Provider value={{
      postReactions, getPostReactionsById, addReaction
    }}>
      {props.children}
    </PostReactionContext.Provider>
  )
}