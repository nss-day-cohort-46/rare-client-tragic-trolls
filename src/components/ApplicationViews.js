import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CommentProvider } from "./comment/CommentProvider"
import { PostDetail } from "./post/PostDetail"
import { PostList } from "./post/PostList"
import { PostProvider } from "./post/PostProvider"
import { PostReactionProvider } from "./postReaction/PostReactionProvider"
import { ReactionProvider } from "./reaction/ReactionProvider"
import { UserList } from "./users/UserList"
import { UserProvider } from "./users/UserProvider"
import { TagList } from "./tags/TagList"
import { TagProvider } from "./tags/TagProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/tags">
                <TagProvider>
                    <TagList/>
                </TagProvider>
            </Route>
            <Route exact path="/categories">
                <CategoryProvider>
                    <CategoryList/>
                </CategoryProvider>
            </Route>
            <Route exact path="/posts">
                <PostList />
            </Route>
            <Route exact path="/posts/detail/:postId(\d+)">
                <PostReactionProvider>
                <ReactionProvider>
                <PostProvider>
                <CommentProvider>
                    <PostDetail />
                </CommentProvider>
                </PostProvider>
                </ReactionProvider>
                </PostReactionProvider>
            </Route>
            <Route exact path="/users">
                <UserProvider>
                    <UserList/>
                </UserProvider>
            </Route>
        </main>
    </>
}
