import React from 'react'
import './auth.css'

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
      <div className="shift"></div>
        <form className="sign-up">
          <div className="sign-up-wrapper"></div>
          <input type="text" />
        </form>
        <form className="sign-in">
          <div className="sign-in-wrapper">
            <h1>Sign in to Ma:in</h1>
            <p></p>
            <input type="text" placeholder='username' className='type-input'/>
            <input type="password" placeholder='password' className='type-input'/>
            <span className='forgot'>forgot your password?</span>
            <input type="submit" value='Sign in' placeholder='password' className='btn-input'/>
            <span className='shiftSignUp'>Need an account?</span>
            <p></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth