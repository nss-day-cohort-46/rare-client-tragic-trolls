import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { PostContext } from "./PostProvider";

export const Post = () => {
    const [posts, setPosts] = useState([])
    const { getPostsByUserId } = useContext(PostContext)
    const currentUser = parseInt(localStorage.getItem("rare_user_id"))
    const history = useHistory()
    const newListOfPosts = decidePostList(history, currentUser)
    // const sortedArrayOfPosts = listOfPosts.slice().sort((a, b) => {
    //   const aDate = new Date(a.date)
    //   const bDate = new Date(b.date)
    //   a.date = aDate
    //   b.date = bDate
    //   return b.date - a.date
    // })
    return (
        <section>
            {/* <ListGroup>
        {posts.map(post => {
          <ListGroupItem>
            <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
          </ListGroupItem>
        })}
      </ListGroup>
      <Link to={`/posts/detail/1`}>
        Post Details
        </Link> */}
        </section>
    )
}

const decidePostList = (history, currentUser) => {
    console.log(history.location.pathname)
    const urlPath = history.location.pathname
    if (urlPath === "/posts/my-posts") {
        getPostsByUserId(currentUser)
    }
}