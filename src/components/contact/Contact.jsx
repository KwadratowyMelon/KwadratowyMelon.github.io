import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3wn9xhb', 'template_rjx2ygg', form.current, 'ah_uH1JsFlS_uU9JT')

    e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>kwadratowy.melon@gmail.com</h5>
            <a href="mailto:kwadratowy.melon@gmail.com" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Karol Wrzesiński</h5>
            <a href="https://www.facebook.com/karol.wrzesinski.56" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Karol Wrzesiński</h5>
            <a href="https://www.linkedin.com/in/kwadratowy-melon-541a4a226/" target="_blank" rel="noreferrer">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact