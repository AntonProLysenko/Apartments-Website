import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

import { deleteListing } from "../../utilities/listings-service"

import EditListingpage from './EditListingpage';


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
      <h1>{thisListing.title}</h1> 
      <Link to={`/principal/${thisListing._id}/edit`}>
        <button>Edit</button>
      </Link>

      {
     thisListing.available? <h2>Available</h2>:<h2>Not Available</h2>
    }
    <h4>{thisListing.desctiption}</h4>
   
   <form onSubmit={handleDelete}>
            <input type="submit" value="Delete" />
    </form>


{/* <Routes>
  <Route path ="/principal/:id/edit" element = {<EditListingpage listing = {thisListing}/>} />
</Routes> */}

    </>
    
  )
}
