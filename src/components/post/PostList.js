import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { PostContext } from "./PostProvider";

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const { getPostsByUserId } = useContext(PostContext)
  const currentUser = parseInt(localStorage.getItem("rare_user_id"))
  const history = useHistory()
  const urlPath = history.location.pathname
  let newListOfPosts = []
  useEffect(() => {
    if (urlPath === "/posts/my-posts") {
      getPostsByUserId(currentUser)
        .then(result => {
          console.log(result)
          const sortedArrayOfPosts = result.slice().sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            a.date = aDate
            b.date = bDate
            return b.date - a.date
          })
          setPosts(sortedArrayOfPosts)
        })
    }
  }, [])
  return (
    <section>
      <ListGroup>
        {posts.map(post => {
          return (<ListGroupItem key={post.id}>
            <ListGroupItemHeading>{post?.title}</ListGroupItemHeading>
            <ListGroupItemText>
              {post?.user.displayName}
            </ListGroupItemText>
            <ListGroupItemText>
              {post?.category.label}
            </ListGroupItemText>
            <Link to={`/posts/detail/1`}>
              Post Details
            </Link>
          </ListGroupItem>)
        })}
      </ListGroup>
    </section>
  )
}