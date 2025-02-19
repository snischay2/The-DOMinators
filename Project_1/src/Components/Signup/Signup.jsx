import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div>
      <div class="login-container">
        <h2>Sign Up</h2>
        <form action="welcome.html" method="POST">
            <div class="input-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
            </div>
            <button type="submit">
                <Link to='/'>Sign Up</Link>
            </button>
            <p>Already have an account? </p> <p> <Link to='/login'>Login</Link></p>
        </form>
    </div>

    </div>
  )
}

export default Signup
