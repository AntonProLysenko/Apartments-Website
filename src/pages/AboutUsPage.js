import { useState } from "react";

import FsLightbox from "fslightbox-react";

import Footer from '../components/Footer'



export default function AboutUsPage() {

  const [slide, setSlide] = useState(false);

  return (
    <>
    <div className="aboutUs-container">

          <div className="box-container">
            <h1  data-aos="zoom-in"data-aos-delay="300"data-aos-duration="1500"className="title">About</h1>
            <div  data-aos="zoom-in" data-aos-delay="500"data-aos-duration="2000"className="about">
              <p>Salem Crown Apartments are fully remodeled with newly painted walls, remodeled bathroom and kitchen, luxury vinyl plank floors, and newer appliances that consist of a stove, fridge and dishwasher. </p>
              <p>The features inside this apartment are above the rest! Individual Furnace Units, new windows and doors, 3 closets, laundry area, secure entrances, and state of the art security cameras. </p>
              <p>Conveniently located 2 miles downtown Dayton, and close to Kroger (2 miles) and Dayton Police Department (2 miles).</p>
              <p><strong>RTA stop right on the corner</strong> </p>
              <p>We strive to provide nice, clean, comfortable, and affordable housing for responsible residents! 27-unit apartment complex under new management (fully remodeled in 2018-2019)</p>
            </div>
          </div>

          <div className="box-container">
            <h1 data-aos="zoom-in"data-aos-delay="200"data-aos-duration="700"className="title">Testimonials</h1>
            <div  data-aos="zoom-in"data-aos-delay="700"data-aos-duration="1500" className = "reviews-container">
              
            <div className="elfsight-app-84e13ad5-c5d0-4c66-9e18-0a2f25476153 reviews"></div>
            </div>
          </div>

          



          <div className="box-container">
          <h1  data-aos="zoom-in"data-aos-duration="2000"className = "title" >Virtual Tour</h1>
            <iframe title= "vt about" data-aos="zoom-in"data-aos-delay="300"data-aos-duration="1500" className="virtual-tour"
                      src="https://www.google.com/maps/embed?pb=!4v1672167750164!6m8!1m7!1sCAoSLEFGMVFpcE42WkZhcWhydG5waWxKVF9WYmhhUGdQdEg4bkNHTmRPb3FWaExu!2m2!1d39.7746093!2d-84.21754469999999!3f192.34562104242204!4f-14.765138178736677!5f0.4000000000000002"
                      
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
          </div>
          <div className="box-container">
            <div className="container">
            
              <h1  data-aos="zoom-in"data-aos-duration="100"className="title">Gallery</h1>

              <div className="gallery" onClick={() => setSlide(!slide)}> 
                <figure  data-aos="fade-down-right"data-aos-duration="1000"className="gallery__item gallery__item--1">
                  <img
                    src="https://i.imgur.com/ILzD0HZ.jpg"
                    className="gallery__img"
                    alt="Kitchen"
                  />
                </figure>

                <figure  data-aos="fade-right"data-aos-delay="500"data-aos-duration="1200"className="gallery__item gallery__item--2">
                  <img
                    src="https://i.imgur.com/R16jAox.jpg"
                    className="gallery__img"
                    alt="Bathroom"
                  />
                </figure>

                <figure  data-aos="fade-down-left"data-aos-delay="300"data-aos-duration="1200" className="gallery__item gallery__item--3">
                  <img
                  
                    src="https://i.imgur.com/MFPbkjh.jpg"
                    className="gallery__img"
                    alt="Living Room"
                  />
                </figure>

                <figure  data-aos="fade-right"data-aos-delay="400"data-aos-duration="1500"className="gallery__item gallery__item--4">
                  <img
                    src="https://i.imgur.com/J4xLkW4.jpg"
                    className="gallery__img"
                    alt="Bedroom"
                  />
                </figure>

                <figure data-aos="fade-right"data-aos-delay="500"data-aos-duration="1600"className="gallery__item gallery__item--5">
                  <img
                    src="https://i.imgur.com/9Pc0exQ.jpg"
                    className="gallery__img"
                    alt="Bedroom2"
                  />
                </figure>

                <figure  data-aos="fade-left"data-aos-delay="600" data-aos-duration="1700"className="gallery__item gallery__item--6">
                  <img
                    src="https://i.imgur.com/YUamIMj.jpg"
                    className="gallery__img"
                    alt="Dining"
                  />
                </figure>

                <figure  data-aos="fade-up-right"data-aos-delay="700" data-aos-duration="1300"className="gallery__item gallery__item--7">
                  <img
                    src="https://i.imgur.com/U1Mtm2b.jpg"
                    className="gallery__img"
                    alt="Outside"
                  />
                </figure>

                <figure data-aos="fade-up-left"data-aos-delay="800" data-aos-duration="1500"className="gallery__item gallery__item--8">
                  <img
                    src="https://i.imgur.com/CwSBvsh.jpg"
                    className="gallery__img"
                    alt="Floor Plan"
                  />
                </figure>

                <figure data-aos="fade-up-left"data-aos-delay="900" data-aos-duration="1400"className="gallery__item gallery__item--9">
                  <img
                    src="https://i.imgur.com/a880IHY.jpg"
                    className="gallery__img"
                    alt="Outside Winter"
                  />
                </figure>

                <figure data-aos="fade-up-right"data-aos-delay="600" data-aos-duration="1500"className="gallery__item gallery__item--10">
                  <img
                    src="https://i.imgur.com/BCQ72z5.jpg"
                    className="gallery__img"
                    alt="Outside Summer"
                  />
                </figure>
              </div>
            </div>
            

              <iframe title="maps about"  data-aos="fade-up"data-aos-delay="300"data-aos-duration="1500"className = "map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.4376179754076!2d-84.2196212846235!3d39.77473347944482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884081c5961332e7%3A0xe38cbd36b306e837!2sSALEM%20CROWN%20APARTMENTS!5e0!3m2!1sen!2sus!4v1672364214381!5m2!1sen!2sus"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <FsLightbox
                  toggler={slide}
                  sources={[
            
              
      "https://i.imgur.com/ILzD0HZ.jpg",
      "https://i.imgur.com/R16jAox.jpg",
      "https://i.imgur.com/MFPbkjh.jpg",
      "https://i.imgur.com/J4xLkW4.jpg",
      "https://i.imgur.com/9Pc0exQ.jpg",
      "https://i.imgur.com/YUamIMj.jpg",
      "https://i.imgur.com/CwSBvsh.jpg",
      "https://i.imgur.com/U1Mtm2b.jpg",
      "https://i.imgur.com/a880IHY.jpg",
      "https://i.imgur.com/BCQ72z5.jpg"

                  
                  ]}
              />
      </div>
      <Footer/>
    </>
  );

}