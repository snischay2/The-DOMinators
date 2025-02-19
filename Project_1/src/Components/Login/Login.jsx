import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
  return (
    <div>
      <div class="login-container">
        <h2>Login</h2>
        <form action="dashboard.html" method="POST">
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit"> <Link to='/'>Login</Link></button>
            <p>Don't have an account? </p> <p><Link to='/Signup'>Sign up</Link></p>
        </form>
    </div>
    </div>
  )
}

export default Login
