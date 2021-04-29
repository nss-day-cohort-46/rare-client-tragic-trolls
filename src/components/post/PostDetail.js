import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { CommentCard } from "../comment/CommentCard"
import { CommentForm } from "../comment/CommentForm"
import { PostContext } from "./PostProvider"
import { CommentContext } from "../comment/CommentProvider"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup
} from 'reactstrap';
import "./PostDetail.css"

export const PostDetail = () => {
  const {getPostById} = useContext(PostContext)
  const {comments} = useContext(CommentContext)

  const [post, setPost] = useState({
    'id': 0,
    'userId': 0,
    'categoryId': 0,
    'title': "",
    'publicationDate': "",
    'imageUrl': "",
    'content': "",
    'approved': false,
    'tags': [],
    'comments': [],
    'reactions': []
  })

  const {postId} = useParams()

  useEffect(() => {
    getPostById(parseInt(postId))
    .then(setPost)
  }, [comments])

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardSubtitle>{post.userId} | {post.publicationDate}</CardSubtitle>
          <CardText>{post.content}</CardText>
        </CardBody>
        <div className="reactions">
          
          {post.reactions.map(reaction => {
            return (
              <div className="reaction" key={reaction.id} style={{display:"inline-block"}}>
                <img className="reaction__img" src={reaction.image_url} alt={reaction.label} width="20vh" height="20vh" />
                <div className="reaction__count" style={{display:"inline-block"}}>{reaction.count}</div>
              </div>
            )
          })}
        </div>
      </Card>
      <CommentForm postId={postId} />
      {post.comments.map(comment => {
        return (
          <ListGroup key={comment.id} >
            <CommentCard comment={comment} />
          </ListGroup>
        )
      })}
    </>
  )
}