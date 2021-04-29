import React, { useContext, useEffect, useState } from "react"
import { CommentContext } from "./CommentProvider"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export const PostForm = (props) => {
    const { createPost } = useContext(CommentContext)

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
                    <Input type="textarea" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <Label for="postCategory">Select</Label>
                    <Input type="select" name="selectCategory" id="category_id">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
            </fieldset>
            <Button className="btn__submit" onClick={handleSubmitClick}>Submit</Button>
        </Form>
    )
}

const Example = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
        </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
                </FormGroup>
                <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
          Check me out
        </Label>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default Example;