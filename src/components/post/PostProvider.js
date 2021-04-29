import React, { createContext, useState } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
  const [posts, setPosts] = useState()

  const getPosts = (id) => {
    return fetch(`http://localhost:8088/posts`)
    .then(res => res.json())
    .then(setPosts)
  }

  const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
    .then(res => res.json())
  }

  const createPost = (postBody) => {
    return fetch("http://localhost:8088/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
    })
    .then(getPosts)
  }

  return (
    <PostContext.Provider value={{
      posts, getPostById, createPost, getPosts
    }}>
      {props.children}
    </PostContext.Provider>
  )
}