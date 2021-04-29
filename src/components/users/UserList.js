import React, { useContext, useEffect } from "react"
import { Card, Button, CardBody, CardTitle, CardText } from "reactstrap"
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

                <CardBody>
                    <CardTitle>{user.fullName}</CardTitle>
                    <CardText>
                    {user.displayName}, <br></br>
                    admin: {String(user.isAdmin)}, <br></br>
                    active: {String(user.active)}
                    </CardText>
                    <Button variant="primary">Details</Button>
                </CardBody>
            </Card>
        )
        })}
        </>
    )
} 