import React from 'react'
import './about.css'
import ME from '../../assets/mee.jpg'
import {CgAwards} from 'react-icons/cg'
import {SiPolymerproject} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'> 
    <h5>Get To Know</h5>
    <h2>About Me</h2>
       <div className='.container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
         
          <article className='about__card'>
            <CgAwards className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>

            </article>
            
            <article className='about__card'>
            <SiPolymerproject className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Projects </small>

            </article>
            
          </div>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Distinctio repudiandae aspernatur, natus ab rerum, a nulla
             fuga eum dolore est doloremque asperiores velit dolores id modi corporis recusandae ea fugiat.
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
       </div>

    
    </section>
    
  )
}

export default About
