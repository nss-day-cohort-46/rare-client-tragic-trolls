import React, { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const getAllUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }
    const getUserById = (userId) =>{
        return fetch(`http://localhost:8088/users/${userId}`)
        .then(res => res.json())
    }
    // const getSubcriptions = (userId) => {
    //     return fetch(`http://localhost:8088/subscriptions/${userId}`)
    //     .then(res => res.json())
    //     .then(res => console.log("subcriptions: ",res))
    // }
    const checkSubscribed = (followerId, authorId) => {
        return fetch("http://localhost:8088/subscribed",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "follower_id" : followerId,
                "author_id" : authorId
            })
        })
        .then(res => res.json())
    }
    const subscribe = (subscription) => {
        return fetch("http://localhost:8088/subscriptions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(subscription)
        })
    }
    const unsubscribe = (subscription) => {
        return fetch("http://localhost:8088/unsubscribe",{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(subscription)
        })
    }
    return (
        <UserContext.Provider value={{getAllUsers, users, getUserById, subscribe, checkSubscribed, unsubscribe}}>
            {props.children}
        </UserContext.Provider>
        )
} 