import React, { useContext, useState } from "react";
import UserList from "./UserList";
import Toolbar from "./Toolbar";
import { UserContext } from "./UserContext";
import jwt from 'jwt-decode'

function AdminPanel () {
    const [userTable, setUserTable] = useContext(UserContext)
    const [selecAll, setSellectAll] = useState('')
    async function getAdminTable() {
        const req = await fetch('http://localhost:1337/api/admin',{
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        });
        const data = await req.json()
        if(data.status === 'ok'){ 
            setUserTable(data.table.map(item => ({...item, "isChecked": false})))
        }
        else{
            alert(data.error)
        }
    }
    function openTableHandle() {        
        const token = localStorage.getItem('token')
        if(token) {
            const user = jwt(token)
            if(!user) {
                localStorage.removeItem('token')
                localStorage.removeItem('name')
                window.location.href = '/login';
            }else {
                getAdminTable();
            }
        }else{
            window.location.href = '/login';
        }
    }
    const onToggleDone = (id) => {
        setUserTable(prev => prev.map(item => {
            if(item._id===id){
            return {...item, isChecked: !item.isChecked}
            }
            return item
        }))
    }

    return (
        userTable ? 
        <><Toolbar /><UserList onToggleDone={onToggleDone} /></>  : 
        <div className="container my-auto text-center">
            <button className="btn btn-success" onClick={openTableHandle} >Open Table </button>
        </div>
    )
}

export default AdminPanel