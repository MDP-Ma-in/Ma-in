import React , {} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Animation from './Lottie/Animation';


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/auth' element={<Auth/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router