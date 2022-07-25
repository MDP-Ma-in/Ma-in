import React from 'react'
import './auth.css'
import Animation from './../Lottie/Animation';
import Nav from '../Nav/Nav';
import './shift'

const Auth = () => {
    
    return (
      <>
      <Nav/>
        <div className="auth-container">
            <div className="auth-form">
                <div className="shift"><Animation/></div>
                <form className="sign-up">
                    <div className="sign-up-wrapper">
                        <h1>Sign up to Ma:in</h1>
                        <p></p>
                        <input type="text" placeholder='profile name' className='type-input'/>
                        <input type="text" placeholder='username' className='type-input'/>
                        <input type="password" placeholder='password' className='type-input'/>
                        <input type="password" placeholder='confirm password' className='type-input'/>
                        <div className="select-box">
                            <select name='grade'>
                                <option value="1학년">1학년</option>
                                <option value="2학년">2학년</option>
                                <option value="3학년">3학년</option>
                            </select>
                            <select name="department">
                                <option value="전자제어과">전자제어과</option>
                                <option value="전자회로과">전자회로과</option>
                                <option value="정보통신과">정보통신과</option>
                                <option value="인공지능전자과">인공지능전자과</option>
                            </select>
                            <select name="class">
                                <option value="1반">1반</option>
                                <option value="2반">2반</option>
                                <option value="3반">3반</option>
                            </select>
                            <input type="number" className='number'/>
                        </div>
                        <input type="submit" value='Sign up' className='btn-input'/>
                    </div>
                </form>
                <form className="sign-in">
                    <div className="sign-in-wrapper">
                        <h1>Sign in to Ma:in</h1>
                        <p></p>
                        <input type="text" placeholder='username' className='type-input'/>
                        <input type="password" placeholder='password' className='type-input'/>
                        <input
                            type="submit"
                            value='Sign in'
                            placeholder='password'
                            className='btn-input'/>
                        <span className='shiftSignUp'>Need an account?</span>
                        <p></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Auth