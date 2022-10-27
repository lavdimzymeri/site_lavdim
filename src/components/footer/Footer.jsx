import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Lavdim Zymeri</a>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience </a></li>
      <li><a href='#services'>Services </a></li>
      <li><a href='#contact'>Contact </a></li>




      </ul>
      <div className="footer__socials">
        
      <a href='https://www.facebook.com/Lavd.02/'><AiOutlineFacebook/></a>

      <a href='https://www.instagram.com/lavdimzymeri/?fbclid=IwAR1NLvO5KbNv1jN9yegHDE4s7roxR73yHorlEV4EgVb3-wpUE20vgr179aM'><BsInstagram/></a>
      

      <a href='https://www.linkedin.com/in/lavdim-zymeri-60a547181/'><AiFillLinkedin/></a>
      </div>
      <div className="footer_copyright">
        <small> &copy; Lavdim Zymeri Totorials. All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default footer
