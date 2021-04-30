import React, { useContext, useEffect, useState } from "react"
import { CommentContext } from "./CommentProvider"
import {Button} from "reactstrap"

export const CommentForm = (props) => {
  const {createComment, newComment, setNewComment, editComment} = useContext(CommentContext)

  const currentUser = parseInt(localStorage.getItem("rare_user_id"))
  const today = new Date()
  const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  const handleControlledInputChange = (event) => {
    let comment = {...newComment}

    comment[event.target.id] = event.target.value

    setNewComment(comment)
  }

  const handleSubmitClick = (event) => {
    if(newComment.id){
      editComment(newComment)
    } else{
      createComment(newComment)
    }
    setNewComment({
      "subject": "",
      "content": "",
      "post_id": props.postId,
      "author_id": currentUser,
      "created_on": currentDate
    })
  }

  useEffect(() => {
    setNewComment({
      "subject": "",
      "content": "",
      "post_id": props.postId,
      "author_id": currentUser,
      "created_on": currentDate  
    })
  }, [])

  return (
    <form className="commentForm" autoComplete="off">
      <h2 className="commentForm__title">New Comment</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="subject">Subject: </label>
          <input type="text" id="subject" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Subject" value={newComment.subject} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Comment: </label>
          <input type="text" id="content" onChange={handleControlledInputChange} required className="form-control" placeholder="Comment" value={newComment.content} />
        </div>
      </fieldset>
      <Button className="btn__submit" onClick={event => {
        handleSubmitClick()
        }}>
        Submit
      </Button>
    </form>
  )
}