import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { CommentCard } from "../comment/CommentCard"
import { CommentForm } from "../comment/CommentForm"
import { PostContext } from "./PostProvider"
import { CommentContext } from "../comment/CommentProvider"
import { ReactionContext } from "../reaction/ReactionProvider"
import { PostReactionContext } from "../postReaction/PostReactionProvider"
import "./PostDetail.css"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
  ListGroup, Dropdown, DropdownToggle, 
  DropdownMenu, DropdownItem
} from 'reactstrap';

export const PostDetail = () => {
  const {getPostById} = useContext(PostContext)
  const {comments} = useContext(CommentContext)
  const {getReactions, reactions} = useContext(ReactionContext)
  const {postReactions, getPostReactionsById, addReaction} = useContext(PostReactionContext)

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

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const {postId} = useParams()
  const currentUser = parseInt(localStorage.getItem("rare_user_id"))

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleReactionInput = (event) => {
    const newReaction = {
      "user_id": currentUser,
      "reaction_id": parseInt(event.target.id),
      "post_id": post.id
    }
    addReaction(newReaction)
    .then(getPostReactionsById(post.id))
  }

  useEffect(() => {
    getPostById(parseInt(postId))
    .then(setPost)
    .then(getReactions)
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
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret>
            Reactions
          </DropdownToggle>
          <DropdownMenu>
          {reactions.map(reaction => {
            return <DropdownItem key={reaction.id} id={reaction.id} onClick={event => handleReactionInput(event)}><img src={reaction.image_url} alt={reaction.label} style={{pointerEvents:"none"}} width="20vh" height="20vh" /></DropdownItem>
          })}
          </DropdownMenu>
        </Dropdown>
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