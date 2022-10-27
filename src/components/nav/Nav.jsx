import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserCircle} from 'react-icons/fa'
import {BsFillBookmarkDashFill} from 'react-icons/bs'
import {RiCustomerService2Line}from 'react-icons/ri'
import {MdContactSupport} from 'react-icons/md'
import {useState}from 'react'





const Nav = () => { 
  const[activeNav, setActiveNav] = useState('#');
  return (
   <nav> 
    <a href='#'  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': '' }><FaUserCircle/></a>
    <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarkDashFill/></a>
    <a href='#services'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerService2Line/></a>
    <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactSupport/></a>


   </nav> 
  )
}

export default Nav
