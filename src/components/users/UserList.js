import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Card, Button, CardBody, CardTitle, CardText } from "reactstrap"
import { UserContext } from "./UserProvider"

export const UserList = () => {
    const {users, getAllUsers, checkAdmin} = useContext(UserContext)
    const history = useHistory()
    useEffect(()=>{
        getAllUsers()
    },[])
    return(
        <>
        {users?.map(user => {
            if(user.id !== parseInt(localStorage.getItem("rare_user_id"))){
                return(
                    <Card style={{ width: '18rem' }}>
                        <CardBody>
                            <CardTitle>{user.fullName}</CardTitle>
                            <CardText>
                            {user.displayName}, <br></br>
                            admin: {String(user.isAdmin)}, <br></br>
                            active: {String(user.active)}
                            </CardText>
                            <Button variant="primary" onClick={e=> history.push(`/users/detail/${user.id}`)}>Details</Button>
                        </CardBody>
                    </Card>
                )
            }else{
                return <></>
            }
        })}
        </>
    )
} 