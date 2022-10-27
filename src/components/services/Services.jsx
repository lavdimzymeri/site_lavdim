import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const services = () => {
  return (
    <section id='services'> 
    <h5>
      What I offer
    </h5>
    <h2> Services</h2>
    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>
            UI/UX Design
          </h3>
        </div>
        <ul className='service__list'>
        <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li>
          
           <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li>

        </ul>

      </article>
      {/*FUNDI UI DESIGN*/}
      <article className='service'>
        <div className="service__head">
          <h3>
            WEB DEVELOPMENT 
          </h3>
        </div>
        <ul className='service__list'>
        <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 
          
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li> 

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li>
          
           <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </li>

        </ul>
        {/*FUNDI WEB DEV*/}

      </article>
    </div>

     </section>
  )
}

export default services
