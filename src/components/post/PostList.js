import React from "react"
import {Link} from "react-router-dom"

export const PostList = () => {
  return(
    <div>
      <Link to={`/posts/detail/1`}>
          Post Details
        </Link>
    </div>
  )
}