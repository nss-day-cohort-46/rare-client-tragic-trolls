import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CommentProvider } from "./comment/CommentProvider"
import { PostDetail } from "./post/PostDetail"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"
import { PostProvider } from "./post/PostProvider"
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
                    <TagList />
                </TagProvider>
            </Route>
            <Route exact path="/categories">
                <CategoryProvider>
                    <CategoryList />
                </CategoryProvider>
            </Route>
            <Route exact path="/posts">
                <PostProvider>
                    <PostList />
                </PostProvider>
            </Route>
            <Route exact path="/posts/my-posts">
                <PostProvider>
                    <PostList />
                </PostProvider>
            </Route>
            <Route exact path="/posts/create">
                <PostProvider>
                    <CategoryProvider>
                        <TagProvider>
                            <PostForm />
                        </TagProvider>
                    </CategoryProvider>
                </PostProvider>
            </Route>
            <Route exact path="/posts/detail/:postId(\d+)">
                <PostProvider>
                    <CommentProvider>
                        <PostDetail />
                    </CommentProvider>
                </PostProvider>
            </Route>
            <Route exact path="/users">
                <UserProvider>
                    <UserList />
                </UserProvider>
            </Route>
        </main>
    </>
}
