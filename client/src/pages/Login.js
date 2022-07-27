import {useState} from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/login', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await response.json()
    if(data.user) {
      localStorage.setItem('token', data.user)
      alert('Login successful')
      window.location.href = '/dashboard'
    }else{
      alert('Please check your username and email')
    }  
  }

  return (
    <div className='form__container'>
      <div className="form__content">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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
        <input className='btn form-btn' type="submit" value="Login"/>
      </form>
    </div>
    </div>
  );
}

export default Login;
