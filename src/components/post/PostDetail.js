import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { CommentCard } from "../comment/CommentCard"
import { CommentForm } from "../comment/CommentForm"
import { PostContext } from "./PostProvider"
import { ListGroup } from 'reactstrap';
import { CommentContext } from "../comment/CommentProvider"

export const PostDetail = () => {
  const {getPostById} = useContext(PostContext)
  const {comments} = useContext(CommentContext)

  const [post, setPost] = useState({})

  const {postId} = useParams()

  useEffect(() => {
    getPostById(parseInt(postId))
    .then(setPost)
  }, [comments])

  return (
    <>
      <CommentForm postId={postId} />
      {post.comments?.map(comment => {
        return (
          <ListGroup key={comment.id} >
            <CommentCard comment={comment} />
          </ListGroup>
        )
      })}
    </>
  )
}