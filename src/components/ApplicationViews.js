import React from "react"
import { Route } from "react-router-dom"
import { TagList } from "../tags/TagList"
import { TagProvider } from "../tags/TagProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"

import { CommentProvider } from "./comment/CommentProvider"
import { PostDetail } from "./post/PostDetail"
import { PostList } from "./post/PostList"
import { PostProvider } from "./post/PostProvider"

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
                <PostProvider>
                <CommentProvider>
                    <PostDetail />
                </CommentProvider>
                </PostProvider>

            </Route>
        </main>
    </>
}
