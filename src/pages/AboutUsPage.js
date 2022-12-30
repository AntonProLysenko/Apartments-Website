import { useState, useEffect } from "react";

import FsLightbox from "fslightbox-react";



export default function AboutUsPage() {

  const [slide, setSlide] = useState(false);

  return (
    <>
     <h1 className = "title" >Virtual Tour</h1>
      <iframe className="virtual-tour"
                src="https://www.google.com/maps/embed?pb=!4v1672167750164!6m8!1m7!1sCAoSLEFGMVFpcE42WkZhcWhydG5waWxKVF9WYmhhUGdQdEg4bkNHTmRPb3FWaExu!2m2!1d39.7746093!2d-84.21754469999999!3f192.34562104242204!4f-14.765138178736677!5f0.4000000000000002"
                
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>,
      <div className="container">
       
        <h1 className="title">Gallery</h1>

        <div className="gallery" onClick={() => setSlide(!slide)}> 
          <figure className="gallery__item gallery__item--1">
            <img
              src="https://i.imgur.com/ILzD0HZ.jpg"
              class="gallery__img"
              alt="Kitchen"
            />
          </figure>

          <figure className="gallery__item gallery__item--2">
            <img
              src="https://i.imgur.com/R16jAox.jpg"
              className="gallery__img"
              alt="Bathroom"
            />
          </figure>

          <figure className="gallery__item gallery__item--3">
            <img
            
              src="https://i.imgur.com/MFPbkjh.jpg"
              className="gallery__img"
              alt="Living Room"
            />
          </figure>

          <figure className="gallery__item gallery__item--4">
            <img
              src="https://i.imgur.com/J4xLkW4.jpg"
              className="gallery__img"
              alt="Bedroom"
            />
          </figure>

          <figure className="gallery__item gallery__item--5">
            <img
              src="https://i.imgur.com/9Pc0exQ.jpg"
              className="gallery__img"
              alt="Bedroom2"
            />
          </figure>

          <figure className="gallery__item gallery__item--6">
            <img
              src="https://i.imgur.com/YUamIMj.jpg"
              className="gallery__img"
              alt="Dining"
            />
          </figure>

          <figure className="gallery__item gallery__item--7">
            <img
              src="https://i.imgur.com/U1Mtm2b.jpg"
              className="gallery__img"
              alt="Outside"
            />
          </figure>

          <figure className="gallery__item gallery__item--8">
            <img
              src="https://i.imgur.com/CwSBvsh.jpg"
              className="gallery__img"
              alt="Floor Plan"
            />
          </figure>





        </div>
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
            
            ]}
         />
    </>
  );

}