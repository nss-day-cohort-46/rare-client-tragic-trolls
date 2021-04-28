import React, { useContext } from "react"
import { ListGroupItem } from 'reactstrap';
import { CommentContext } from "./CommentProvider";
import {Button} from "reactstrap"

export const CommentCard = (props) => {
  const {deleteComment} = useContext(CommentContext)
  const currentUser = parseInt(localStorage.getItem("rare_user_id"))

  const renderDeleteButton = () => {
    if (props.comment.author_id === currentUser){
      return <Button onClick={event => handleDeleteButtonClick(event)} id={`delete--${props.comment.id}`}>Delete</Button>
    }
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
      {renderDeleteButton()}
    </ListGroupItem>
  )
}