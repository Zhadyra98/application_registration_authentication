import React from "react";

const UserItem = ({ id, name, email, lastLoginTime, registrationTime, isBlocked }) => {
    const formatDate = (date) => (new Date(date).toUTCString()).substr(5,20)
    return(
        <tr>
            <td className="idText">{id.substr(0,7)+"..."}
            <span className="idTextHide bg-success">{id}</span>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{formatDate(lastLoginTime)}</td>
            <td>{formatDate(registrationTime)}</td>
            <td>{isBlocked? 'block' : 'active'}</td>
        </tr>
    );
};

export default UserItem;