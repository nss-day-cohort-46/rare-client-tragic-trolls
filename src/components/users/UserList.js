
import React, { useContext, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import { UserContext } from "./UserProvider"

export const UserList = () => {
    const {users, getAllUsers} = useContext(UserContext)
    useEffect(()=>{
        getAllUsers()
    },[])
    return(
        <>
        {users?.map(user => {
            console.log(user)
        return(
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>{user.fullName}</Card.Title>
                    <Card.Text>
                    {user.displayName}, <br></br>
                    admin: {String(user.isAdmin)}, <br></br>
                    active: {String(user.active)}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        )
        })}
        </>
    )
}