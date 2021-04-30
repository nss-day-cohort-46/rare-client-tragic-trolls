import React, { useContext, useState } from "react"
import { ListGroupItem } from 'reactstrap';
import { CommentContext } from "./CommentProvider";
import {Button} from "reactstrap"

export const CommentCard = (props) => {
  const {deleteComment, setNewComment} = useContext(CommentContext)

  const currentUser = parseInt(localStorage.getItem("rare_user_id"))

  const renderButtons = () => {
    if (props.comment.author_id === currentUser){
      return (
        <>
          <Button onClick={event => handleDeleteButtonClick(event)} id={`delete--${props.comment.id}`}>Delete</Button>
          <Button onClick={event => handleEditButtonClick(event)} id={`edit--${props.comment.id}`}>Edit</Button>
        </>
      )
    }
  }

  const handleEditButtonClick = (event) => {
    setNewComment({
      "id": props.comment.id,
      "subject": props.comment.subject,
      "content":props.comment.content,
      "post_id": props.comment.post_id,
      "author_id": props.comment.author_id,
      "created_on": props.comment.created_on  
    })
  }

  const handleDeleteButtonClick = (event) => {
    const [prefix, id] = event.target.id.split("--")
    deleteComment(parseInt(id))
  }

  return (
    <ListGroupItem className="comment__card">
      <div className="comment__subject">{props.comment.subject}</div>
      <div className="comment__date">{props.comment.created_on}</div>
      <div className="comment__content">{props.comment.content}</div>
      {renderButtons()}
    </ListGroupItem>
  )
}