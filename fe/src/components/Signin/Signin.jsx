import React from 'react'
import './signin.css'
import Animation from '../Lottie/Animation';
import Nav from '../Nav/Nav';

const Signin = () => {
    return (
      <>
      <Nav/>
      <div className="sign-in-container">
            <div className="sign-in-box">
                <div className="lottie-animation"><Animation/></div>
                <div className="sign-in"></div>
                <h1>Sign in to Ma:in</h1>
                <input type="text" />
                <input type="password"/>
            </div>
      </div>
      </>
    )
}

export default Signin