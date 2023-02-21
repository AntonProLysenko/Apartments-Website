import React, { useState } from 'react';
import { send } from 'emailjs-com';

import Footer from '../components/Footer';

export default function ContactUs() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [isSent, setisSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();    
    send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_PUBLIC_KEY,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      setToSend({ 
      from_name: '',
      message: '',
      reply_to: '',})

      setisSent(true)

      // .catch((e) => {
      //   console.log('FAILED...', e);
      // });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1  data-aos="zoom-in"data-aos-duration="1500" className='title'>Contact Salem Crown Apartments</h1>
      <div className='contactUs-page'>
    
        <div  data-aos="fade-right"data-aos-duration="2000"data-aos-delay="600"className='contactUs-img'>
          <img  src="https://i.imgur.com/BCQ72z5.jpg" alt = "Salem Crown Apartment outside view" />
        </div>

        <div  data-aos="fade-left"data-aos-duration="2000"data-aos-delay="400" className='contactUs-text'>
        <p className='text'>Thank you for inquiring about our apartments for rent in Dayton. Feel free to contact us with any further questions and we will be happy to assist you.</p>
        <address className='text single-direction'><span className='text'>Address:</span> <a href='https://www.google.com/maps/dir//SALEM+CROWN+APARTMENTS,+1102+Salem+Ave,+Dayton,+OH+45406/@39.7747335,-84.2174326,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x884081c5961332e7:0xe38cbd36b306e837!2m2!1d-84.2174326!2d39.7747335?hl=en-US'>1102 Salem Ave, Dayton, OH 45406</a> </address>

        <p className='single-direction text'><span className='text'>Phone:</span> <a href="sms:937-985-0069?&body=Hello! I'm interested in Salem Crown Apartments">937-985-0069</a></p>

        <h1  data-aos="zoom-in"data-aos-duration="1500" className='title'>Apply Online</h1>
        <p className='text center'>Online applications can be submitted 24/7.</p>
        <a href="https://day.managebuilding.com/Resident/rental-application/new" target="_blank" rel="noreferrer">
          <button className="create-btn">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            &nbsp; Apply Now</button>
        </a>
        </div>
      </div>

      <h1  data-aos="zoom-in"data-aos-duration="2000"data-aos-delay="700"className={isSent? "hidden":"title"}>Email Us</h1>

      <div data-aos="fade-up"data-aos-duration="2000"data-aos-delay="700" className='email-container'>

        <h3 className={isSent? "shown title":"hidden"}>Thank you for contacting Salem Crown Apartments!</h3>
        <h3 className={isSent? "shown title":"hidden"}> We'll email you shortly</h3>

        <form className={isSent? "hidden":"emailUs-form"} onSubmit={onSubmit}>
         <input
            type='text'
            name='from_name'
            placeholder='Enter Your Name'
            required
            value={toSend.from_name}
            onChange={handleChange}
          />
      
          <textarea className = "description"
            type='text'
            name='message'
            required
            placeholder='Enter Your message'
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type='email'
            name='reply_to'
            required
            placeholder='Enter Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
            <button type='submit'>
            <i className="fa fa-envelope" aria-hidden="true"></i>
              &nbsp; Send</button>
        </form>
   
       </div>
    
    <Footer/>
    </>
  )
}
