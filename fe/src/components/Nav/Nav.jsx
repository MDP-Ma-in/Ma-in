import React from 'react'
import './nav.css'
import {AiOutlineFullscreen} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import { Link } from 'react-router-dom';


const Nav = () => {
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      }
  return (
    <>
    <nav className='nav-container'>
    <Link to="/"><h1 className='nav-logo' title='홈 화면으로'>#</h1></Link>
        <div className="nav-menus">
        <Link to="/auth"><FiUser size={24} className='fi'/></Link>
        <AiOutlineFullscreen size={25} className='ai' onClick={toggleFullScreen} title='전체화면 전환'/>
        </div>
    </nav>
    <footer className='main-footer'>
        <span>Copyright © Ma:in. All Rights Reserved.</span>
    </footer>
    </>
  )
}

export default Nav