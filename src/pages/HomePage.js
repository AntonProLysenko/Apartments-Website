import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'

export default function HomePage({listings}) {

  const availableListings=[]//finding available listings
  listings.map((listing)=>{
  
    if(listing.available === true){
      // console.log(listing)
     return availableListings.push( listing)
    }
  })

  console.log(availableListings);
  



function MultipleAvailable(){
  return(  
  <div className = "ad">
   <span>We have {availableListings.length} available apartments
   <Link to = "/available"> <button className="btn-add">See more</button></Link>
    </span> 
  </div>
  )
}

function SingleAvailable(){
  return(  
    <div data-aos="zoom-in" className = "ad" >
      <span>We have {availableListings.length} available apartment
      <Link to = "/available"> <button className="btn-add">See more</button></Link>
      </span>      
    </div>
    )
}

function noneAvailable(){
  return(  
    <div className = "ad">
      <span>Unfortunately we don't have any apartments available here
      <br/>
      Please, Check out our family property
      <a href = "https://greenforestapts.business.site/" target ="_blank"> Green Forest Apartments</a>
      </span> 
    </div>
    )
}

  
  





  return (
    <div className="homepageContainer">
      <div className="directions">
      <div>
        <i className="fas fa-map-signs"></i>
        <span> &nbsp; Directions:</span>
      </div>

             
       

            <a href="https://www.google.com/maps/dir//1102+Salem+Ave,+Dayton,+OH+45406/@39.7746572,-84.2196603,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88408122b505a61d:0xc35c5f962acf2cf5!2m2!1d-84.2174716!2d39.7746572" target="_blank">
                <span>1102 Salem AveDayton, OH 45406</span>  
            </a>
      </div>    

    <img data-aos="zoom-in"className="homePic" src="https://i.imgur.com/T8ueCt2.jpg"/>
    {
        (availableListings.length===1)? SingleAvailable(): (availableListings.length===0)? noneAvailable() : MultipleAvailable()
      }
    </div>
  )
}
