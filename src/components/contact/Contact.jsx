import React from 'react'
import './contact.css'
import {MdAlternateEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vsgdfi', 'template_q1hqehd', form.current, 'lQeoaA6z_G13wcYG2')

    e.target.reset()


  };


  return (
    <section id='contact'> 
     <h5> Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
      <div className="contact__options">
       <article className="contact__option">
        <MdAlternateEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>lzymeri4@gmail.com</h5>
        <a href='mailto:lzymeri4@gmail.com' target='blank'> Send an email </a>

       </article>

       <article className="contact__option">
        <FaFacebookMessenger className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Lavdim Zymeri </h5>
        <a href='https://m.me/Lavd.02' target='blank'> Send a message  </a>

       </article>

       <article className="contact__option">
        <AiOutlineWhatsApp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+38346156417</h5>
        <a href='https://wa.me/38346156417' target='blank'> Send an email </a>

       </article>
      </div>
      {/* End of contact options*/}

      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>       
      <button type='submit' className='btn btn-primary'> Send Message</button>   
          </form>
     </div>
    </section>

  )
}

export default Contact
