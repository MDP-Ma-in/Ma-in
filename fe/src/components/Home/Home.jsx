import React from 'react'
import './home.css'
import TypeIt from "typeit-react";


const Home = () => {
  return (
    <div className='home-container'>
    <div className="home-box">
    <div className="text-box">
      <TypeIt element={"span"}
       options={{
          strings: ["불가피한 일들로 당신의 계획이 망가지면 안되니까,","언제 어디서든 모두를 만날 수 있을거에요."],
          speed:70,
          waitUntilVisible: true,
        }}></TypeIt></div>
        <button>확인하기</button>
    </div>
      
      <div className="location">
        <h1>HOME</h1>
      </div>
    </div>
  )
}

export default Home