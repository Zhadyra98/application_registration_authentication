import React, { useContext} from "react";
import UserItem from './UserItem'
import { UserContext } from "./UserContext";

const UserList = () => {
    const [userTable, setUserTable] = useContext(UserContext)
    return (
        <div className="container-fluid"> 
            <table className="table table-bordered">
                <tbody>
                    <tr className="table-success">
                        <th><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/></th>
                        <th className="d-none d-md-table-cell">ID</th>
                        <th className="d-none d-sm-table-cell">Name</th>
                        <th>Email</th>
                        <th className="d-none d-md-table-cell">Last Login Time</th>
                        <th className="d-none d-md-table-cell">Registration Time</th>  
                        <th>Status</th>                 
                    </tr>
                    {userTable.map((item) => (
                        <UserItem 
                        key = {item._id}
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