import React from "react";

const UserItem = ({ id, name, email, lastLoginTime, registrationTime, isBlocked }) => {

    const formatDate = (date) => (new Date(date).toUTCString()).substr(5,20)

    return(
        <tr>
            <td>
                <input className="form-check-input-lg" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
            </td>
            <td className="idText d-none d-md-table-cell">{id.substr(0,7)+"..."}
                <span className="idTextHide bg-success">{id}</span>
            </td>
            <td className="d-none d-sm-table-cell">{name}</td>
            <td>{email}</td>
            <td className="d-none d-md-table-cell" >{formatDate(lastLoginTime)}</td>
            <td className="d-none d-md-table-cell" >{formatDate(registrationTime)}</td>
            <td>{isBlocked ? 'blocked' : 'active'}</td>
        </tr>
    );
};

export default UserItem;