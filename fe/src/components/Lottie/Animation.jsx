import React from 'react';
import Lottie from "lottie-react";
import assets from './90714-online-learning.json';

const Animation = () => {
  return (
    <>
    <Lottie animationData={assets} style={{position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%,-50%)', 
    width: '40vw',height: '20vw'}} />
    </>
  )
}

export default Animation