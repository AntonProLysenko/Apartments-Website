import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'

export default function HomePage({listings}) {

  const availableListings=[]//finding available listings
  listings.map((listing)=>{
  
    if(listing.available === true){
      console.log(listing)
     return availableListings.push( listing)
    }

  })



function MultipleAvailable(){
  return(  
  <div>
    We have {availableListings.length} available 
    <Link to = "/available"> apartments</Link>
  </div>
  )
}

function SingleAvailable(){
  return(  
    <div>
      We have {availableListings.length} available 
      <Link to = "/available"> apartment</Link>
    </div>
    )
}

function noneAvailable(){
  return(  
    <div>
      Unfortunately we don't have any apartments available here
      <br/>
      Please, Check out our family property
      <Link to = "/available"> Green Forest Apartments</Link>
    </div>
    )
}

  
  





  return (
    <>
      {
        (availableListings.length===1)?SingleAvailable: (availableListings.length===0)? noneAvailable() : MultipleAvailable()
      }
    </>
  )
}
