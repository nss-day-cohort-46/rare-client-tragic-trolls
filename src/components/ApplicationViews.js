import React from "react"
import { Route } from "react-router-dom"
import { TagList } from "../tags/TagList"
import { TagProvider } from "../tags/TagProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { UserList } from "./users/UserList"
import { UserProvider } from "./users/UserProvider"

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
            <Route exact path="/users">
                <UserProvider>
                    <UserList/>
                </UserProvider>
            </Route>
        </main>
    </>
}
