import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const history = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/register', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const data = await response.json()
    if(data.status === 'ok') {
      history('/')
    }
    
  }
  return (
    <div className='form__container'>
      <div className="form__content">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <label className = "form__label" htmlFor = "name"> Name: </label>
        <br/>
        <input 
          id="name"
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <br />
        <label className = "form__label" htmlFor = "email" >email:</label>
        <br/>
        <input 
          id="email"
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <br />
        <label className = "form__label" htmlFor="password" >Password:</label>
        <br/>
        <input 
          id="password"
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <br />
        <input className='btn form-btn' type="submit" value="Register"/>
      </form>
      </div>
    </div>
  );
}

export default App;
