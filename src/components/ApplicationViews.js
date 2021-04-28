import React from "react"
import { Route } from "react-router-dom"
import { TagList } from "../tags/TagList"
import { TagProvider } from "../tags/TagProvider"

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
        </main>
    </>
}
