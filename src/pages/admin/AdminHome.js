import { useState, useEffect} from 'react';

// import * as listingsAPI from "../../utilities/listings-api"
import {Link} from "react-router-dom"

// import NewListingForm from '../../components/admin/NewListingForm';
import ListingDetailsPage from './ListingDetailsPage';


export default function AdminHome({listings}) {
// const listingsArr = Object.values(listings);//converting object props to array props


console.log(listings);


  function loaded (){
    return(
      <ul>
      {listings.map((listing, idx)=>{
        // console.log(listing)
      
          return(
                  <li key = {idx}>
                      <Link to= {`/principal/${listing._id}`}>
                        <div>
                          <h3>{listing.title}</h3>
                          <img src = {listing.photo}/>
                          {listing.available}
                        </div>
                      </Link>    
                  </li>
          )
      })}
      </ul>
    )
  }


  function loading (){
    return <h1>Loading...</h1>;
  }
  
  return (
    <>  
    {/* <NewListingForm/> */}
      <h1>ListingsPage</h1> 
      <Link to = "/principal/new"><button>Create new</button></Link> 
   {   listings? loaded():loading()}
    </>
     
  )
}
