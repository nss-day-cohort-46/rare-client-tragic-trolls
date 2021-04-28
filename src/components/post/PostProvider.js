import React, { createContext, useState } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
  const [posts, setPosts] = useState()

  const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
    .then(res => res.json())
  }

  return (
    <PostContext.Provider value={{
      posts, getPostById
    }}>
      {props.children}
    </PostContext.Provider>
  )
}