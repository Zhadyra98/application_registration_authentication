import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'

function Dashboard () {
    async function openAdminPage() {
        const req = await fetch('http://localhost:1337/api/admin',{
            headers: {
                'Content-Type': 'application/json',
              },
        });
        const data = await req.json()
        if(data.status === 'ok') {
            console.log("OKEY")
        }else{
            alert(data.error)
        }
    }
    return (
        <div>
            <button className="btn" onClick={openAdminPage} >Open Table </button>
        </div>
    ) 
}

export default Dashboard

/*
const history = useNavigate()
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

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const user = jwt(token)
            if(!user) {
                localStorage.removeItem('token')
                history('/login')
            }else {
                populateQuote()
            }
        }
    }, [])

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