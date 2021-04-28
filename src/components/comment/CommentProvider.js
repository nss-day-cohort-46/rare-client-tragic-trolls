import React, { createContext, useState } from "react"

export const CommentContext = createContext()

export const CommentProvider = (props) => {
  const [comments, setComments] = useState()

  const getComments = () => {
    return fetch("http://localhost:8088/comments")
      .then(res => res.json())
      .then(setComments)
  }

  const createComment = (comment) => {
    return fetch("http://localhost:8088/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
    .then(getComments)
  }

  const deleteComment = (id) => {
    return fetch(`http://localhost:8088/comments/${id}`, {
      method: "DELETE"
    })
    .then(getComments)
  }

  return (
    <CommentContext.Provider value={{
      comments, getComments, createComment, deleteComment
    }}>
      {props.children}
    </CommentContext.Provider>
  )
}