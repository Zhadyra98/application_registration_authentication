import React, { useContext} from "react";
import UserItem from './UserItem'
import { UserContext } from "./UserContext";

const UserList = ({onToggleDone}) => {
    const [userTable, setUserTable] = useContext(UserContext)
    const toggleSelectAll = (event) => {
        setUserTable(prev => prev.map(item => {
            return {...item, isChecked: event.target.checked}
        }))
    }
    return (
        <div className="container-fluid"> 
            <table className="table table-bordered">
                <tbody>
                    <tr className="table-success">
                        <th><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" onChange={toggleSelectAll} aria-label="..."/></th>
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
                        isChecked={item.isChecked}
                        onToggleDone={() => onToggleDone(item._id)}
                        />
                    ))}
                </tbody>
            </table>     
        </div>
    )
};

export default UserList;