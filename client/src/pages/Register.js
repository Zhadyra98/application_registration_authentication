import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Register( { setUserName } ) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] =useState('')
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    if(password !== passwordConfirm){
      throw Error
      console.log("Passwords are not same")
    }
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
      localStorage.setItem('token', data.token)
      localStorage.setItem('name', data.name)
      setUserName(data.name)
      navigate("/");
    }
  }
  return (
    <div className='container'>
      <div className="row justify-content-center align-items-center">
        <div className="col-9 col-xs-8 col-sm-7 col-md-6 col-lg-4 text-center">
        <h1 className='h2 mb-3 font-weight-normal'>Register</h1>
        <form onSubmit={registerUser}>
          <input 
            className="form-control mb-2"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoFocus
          />
          <input 
            className='form-control mb-2'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoFocus
          />
          <input 
            className='form-control mb-2'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoFocus
          />
          <input 
            className='form-control'
            placeholder='Confirm Password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            autoFocus
          />
          <div className="my-3">
            <input className='btn btn-success btn-lg w-100' type="submit" value="Sign Up"/>
          </div>
          <a href="/login" className="link-success">Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
