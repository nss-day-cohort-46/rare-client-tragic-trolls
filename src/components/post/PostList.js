import React from "react"
import { Link, useHistory } from "react-router-dom"
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export const PostList = () => {
  decidePostList()
  // const sortedArrayOfPosts = arrayOfPosts.slice().sort((a, b) => {
  //   const aDate = new Date(a.date)
  //   const bDate = new Date(b.date)
  //   a.date = aDate
  //   b.date = bDate
  //   return b.date - a.date
  // })
  return (
    <section>
      {/* <ListGroup>
        {sortedArrayOfPosts.map(post => {
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

const decidePostList = () => {
  history = useHistory()
  console.log(history.location.pathname)
}