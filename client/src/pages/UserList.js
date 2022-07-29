import React, { useState, useContext} from "react";
import UserItem from './UserItem'
import { UserContext } from "./UserContext";


const UserList = () => {
    const [userTable, setUserTable] = useContext(UserContext)
    return (
        <div className="container"> 
            <table className="table">
            <thead className="thead-dark">
                <tr>
                {Object.keys(userTable[0]).map((heading) => <th>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {userTable.map((item) => (
                    <UserItem 
                    id={item._id} 
                    name={item.name} 
                    email={item.email} 
                    lastLoginTime={item.lastLoginTime} 
                    registrationTime={item.registrationTime} 
                    isBlocked={item.isBlocked}
                    />
                ))}
            </tbody>
            </table>     
        </div>
    )

};

export default UserList;