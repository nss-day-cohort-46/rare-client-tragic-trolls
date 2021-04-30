import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { PostContext } from "./PostProvider";

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const { getPostsByUserId, getAllPosts } = useContext(PostContext)
  const currentUser = parseInt(localStorage.getItem("rare_user_id"))
  const history = useHistory()
  const urlPath = history.location.pathname
  useEffect(() => {
    if (urlPath === "/posts/my-posts") {
      getPostsByUserId(currentUser)
        .then(result => {
          const sortedArrayOfPosts = sortThePosts(result)
          setPosts(sortedArrayOfPosts)
        })
    }
    else if (urlPath === "/posts") {
      getAllPosts()
        .then(result => {
          const sortedArrayOfPosts = sortThePosts(result)
          const approvedPosts = filterApprovedPosts(sortedArrayOfPosts)
          const postsNotFromTheFuture = nonFuturePosts(approvedPosts)
          setPosts(postsNotFromTheFuture)
        })
    }
    else if (urlPath === "/posts/unapproved-posts") {
      getAllPosts()
        .then(result => {
          const sortedArrayOfPosts = sortThePosts(result)
          const unApprovedPosts = filterUnapprovedPosts(sortedArrayOfPosts)
          setPosts(unApprovedPosts)
        })
    }
  }, [])
  return (
    <section>
      <ListGroup>
        {posts?.map(post => {
          return (<ListGroupItem key={post.id}>
            <ListGroupItemHeading>{post?.title}</ListGroupItemHeading>
            <ListGroupItemText>
              Author: {post?.user.displayName}
            </ListGroupItemText>
            <ListGroupItemText>
              Category: {post?.category.label}
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

const sortThePosts = (posts) => {
  return posts?.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    a.date = aDate
    b.date = bDate
    return b.date - a.date
  })
}

const filterApprovedPosts = (posts) => {
  return posts?.filter(post => {
    return post.approved === true
  })
}

const filterUnapprovedPosts = (posts) => {
  return posts?.filter(post => {
    return post.approved === false
  })
}

const nonFuturePosts = (posts) => {
  const today = new Date()
  return posts?.filter(post => {
    const dateArray = post.publicationDate.split("-")
    const dateOfPublication = new Date(dateArray[0], dateArray[1] - 1, dateArray[2])
    return today > dateOfPublication
  })
}