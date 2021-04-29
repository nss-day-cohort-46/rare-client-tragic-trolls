import React, { useContext, useEffect, useState } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { PostContext } from "./PostProvider"

export const PostForm = (props) => {
    const { createPost } = useContext(PostContext)

    const currentUser = parseInt(localStorage.getItem("rare_user_id"))
    const today = new Date()
    const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const [post, setPost] = useState({
        "user_id": currentUser,
        "category_id": 0,
        "title": 0,
        "publication_date": currentDate,
        "image_url": "",
        "content": "",
        "approved": false
    })

    const handleControlledInputChange = (event) => {
        let newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleSubmitClick = (event) => {
        createPost(post)
    }

    return (
        <Form className="postForm" autoComplete="on">
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <FormGroup>
                    <Label for="postTitle">Title</Label>
                    <Input onChange={handleControlledInputChange} type="text" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <Label for="postCategory">Category</Label>
                    <Input onChange={handleControlledInputChange} type="select" name="selectCategory" id="category_id">
                        <option value="0">choose a category...</option>
                        <option value="1">Category One</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="postContent">Your Thoughts</Label>
                    <Input type="textarea" name="text" id="content" />
                </FormGroup>
                <FormGroup>
                    <Label for="postImageURL">URL for an Image</Label>
                    <Input onChange={handleControlledInputChange} type="text" name="imageURL" id="image_url" />
                </FormGroup>
                <FormGroup check>
                    <Label check><Input type="checkbox" />Check me out</Label>
                </FormGroup>
            </fieldset>
            <Button className="btn__submit" onClick={handleSubmitClick}>Submit</Button>
        </Form>
    )
}