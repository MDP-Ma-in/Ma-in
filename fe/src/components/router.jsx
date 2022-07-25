import React , {} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from './Auth/Auth';
import Home from './Home/Home';


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Auth/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router