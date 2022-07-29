import React, { useState, useContext } from "react";
import UserList from "./UserList";
import { UserContext } from "./UserContext";
import jwt from 'jwt-decode'

function AdminPanel () {
    const [userTable, setUserTable] = useContext(UserContext)
    async function getAdminTable() {
        const req = await fetch('http://localhost:1337/api/admin',{
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        });
        const data = await req.json()
        if(data.status === 'ok'){
            // console.log(data.table)
            // console.log(Array.isArray(data.table));
            setUserTable(data.table)
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


    return (
        userTable ? <UserList/> : <div className="container my-auto text-center"><button className="btn btn-success" onClick={openTableHandle} >Open Table </button></div>
    )
}

export default AdminPanel
/*

    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')

    async function populateQuote() {
        const req = await fetch('http://localhost:1337/api/dashboard', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setQuote(data.quote)
        }else{
            alert(data.error)
        }
    }



    async function updateQuote(event) {
        event.preventDefault()
        const req = await fetch('http://localhost:1337/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                quote: tempQuote,
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setTempQuote('')
            setQuote(tempQuote)
        }else{
            alert(data.error)
        }
    }
*/
