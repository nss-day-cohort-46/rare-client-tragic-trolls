import React, { createContext, useState } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
  const [posts, setPosts] = useState()

  const getAllPosts = (id) => {
    return fetch(`http://localhost:8088/posts`)
    .then(res => res.json())
    .then(setPosts)
  }

  const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
    .then(res => res.json())
  }

  const getPostsByUserId = (userId) => {
    return fetch(`http://localhost:8088/posts?user_id=${userId}`)
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
    .then(getAllPosts)
  }

  return (
    <PostContext.Provider value={{
      posts, getPostById, createPost, getAllPosts, getPostsByUserId
    }}>
      {props.children}
    </PostContext.Provider>
  )
}