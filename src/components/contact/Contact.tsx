import React, { useRef, useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_fh39fgb', 'template_spomdqu', form.current, 'WHVdy-jYRA2bQ1j2t')
        .then(() => {
          console.log('Email sent successfully!');
          setAlertVisible(true); // Show the alert

          // Hide the alert after 3 seconds
          setTimeout(() => setAlertVisible(false), 3000);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });

      form.current.reset();
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gaoaaron1@gmail.com</h5>
            <a href="mailto:gaoaaron1@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Aaron Gao</h5>
            <a href="https://m.me/aaron.gao1" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+5879666258</h5>
            <a href="https://wa.me/+5879666258" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='from_email' placeholder='Your Email' required />
          <textarea name="message" rows={7} placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

      {/* Alert Notification */}
      {alertVisible && <div className="alert">Your message has been sent!</div>}
    </section>
  );
}

export default Contact;
