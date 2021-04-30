import React, { createContext, useState } from "react"

export const PostReactionContext = createContext()

export const PostReactionProvider = (props) => {
  const [postReactions, setPostReactions] = useState([])

  const getPostReactionsById = (postId) => {
    console.log("gettign post by id, ", postId)
    return fetch(`http://localhost:8088/postreactions/${postId}`)
    .then(res => res.json())
    .then(setPostReactions)
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