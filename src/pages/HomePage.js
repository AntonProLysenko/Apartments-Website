import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'

export default function HomePage({listings}) {



  // function getAvailable (){
  //   const availableListings =  listings.find(element=>{
  //     return element.available === true})
  // }

  // useEffect(()=>{
  //   getAvailable()
  // },[])




  const availableListings=[]
  listings.map((listing)=>{
    // console.log(listing.available)
    if(listing.available === true){
      console.log(listing)
     return availableListings.push( listing)
    }

  })
  console.log(availableListings)
//   const availableListings=[]
  
//   listings.find(element=>{
//     availableListings.push(element.available === true
//   )})
//   // console.log(availableListings)


// const available = listings.find(element=>{
//   return element.available === true})
//   console.log(available)








  return (


    <>
    <div>Salem Crown Apartments</div>
    
    <div>
      We have {availableListings.length} available 
      <Link to = "/available"> apartments</Link>
    </div>
    
    </>



  )
}
