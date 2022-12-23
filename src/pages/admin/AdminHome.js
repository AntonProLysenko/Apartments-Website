import { useState, useEffect, useRef } from 'react';

import * as listingsAPI from "../../utilities/listings-api"
import {Link} from "react-router-dom"
import NewListingForm from '../../components/admin/NewListingForm';


export default function AdminHome(props) {
  const [listings, setListings] = useState([]);


  async function getListings() {
    const listings = await listingsAPI.getAll();
    setListings(listings);
  }

  useEffect(()=>{
    getListings()
  },[])






  function loaded (){
    // getListings()
    return(
      <ul>
      {listings.map((listing, idx)=>{
      
          return(
              
                  <li key = {idx}>
                      <Link to= "/principal/:id">
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
    <NewListingForm/>
      <h1>ListingsPage</h1> 
      <Link to = "/principal/new"><button>Create new</button></Link> 
   {   listings? loaded():loading()}
    </>
     
  )
}
