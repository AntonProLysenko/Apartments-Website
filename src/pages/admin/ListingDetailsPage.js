import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

import { deleteListing } from "../../utilities/listings-service"


export default function ListingDetailsPage({listings}) {
    const {id} = useParams()
    const navigation = useNavigate();

    const thisListing = listings.find(element=>{
      return element._id === id
  })




  const handleDelete=async(evt)=>{
    // evt.preventdefault()
    try{
      navigation("/principal");
     await  deleteListing(thisListing)
    }catch{
     
    }
  
  }


  
  

  return (
    <>
   
      <div>ListingDetailsPage</div>
      <h1>{thisListing.title}</h1> <button>Edit</button>
      {
     thisListing.available? <h2>Available</h2>:<h2>Not Available</h2>
    }
   
   <form onSubmit={handleDelete}>
            <input type="submit" value="Delete" />
    </form>
    </>
    
  )
}
