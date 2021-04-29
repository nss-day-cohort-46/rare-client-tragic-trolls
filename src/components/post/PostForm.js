import React, { useContext, useEffect, useState } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
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
        "approved": false,
        "tag_ids": []
    })

    const handleControlledInputChange = (event) => {
        let newPost = { ...post }
        if (event.target.name == "tag_ids") {
            const tag = parseInt(event.target.value)
            const tagIndex = post.tag_ids.indexOf(tag)
            if (tagIndex > -1) {
                post.tag_ids.splice(tagIndex, 1)
            } else {
                post.tag_ids.push(tag)
            }
        }
        else if (event.target.id == "category_id") {
            newPost[event.target.id] = parseInt(event.target.value)
            setPost(newPost)    
        }
        else {
            newPost[event.target.id] = event.target.value
            setPost(newPost)
        }
        console.log(newPost)
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
                        <Input onChange={handleControlledInputChange} type="textarea" name="text" id="content" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="postImageURL">URL for an Image</Label>
                        <Input onChange={handleControlledInputChange} type="text" name="imageURL" id="image_url" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check><Input name="tag_ids" value={1} onChange={handleControlledInputChange} type="checkbox" />Tag #1</Label>
                    </FormGroup>
                </fieldset>
                <Button className="btn__submit" onClick={handleSubmitClick}>Submit</Button>
            </Form>
        )
    }