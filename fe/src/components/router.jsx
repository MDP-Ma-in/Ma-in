import React , {} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from './Signin/Signin';
import Home from './Home/Home';
import Class from './ClassroomHome/Choom'
import Assignment from './Assignment/Assignment';
import WriteSpace from './WriteSpace/WriteSpace'


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/sign-in' element={<Signin/>}/>
        <Route exact path='/class' element={<Class/>}/>
        <Route exact path='/assign' element={<Assignment/>}/>
        <Route exact path='/writespace' element={<WriteSpace/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router