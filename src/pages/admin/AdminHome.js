import { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"

import * as listingsAPI from "../../utilities/listings-api"


export default function AdminHome(props) {
  console.log(props)
  const [listings, setListings] = useState([]);


  async function getListings() {
    const listings = await listingsAPI.getAll();

    console.log(listings);
    
    setListings(listings);
  }

  useEffect(()=>{
    getListings()
    console.log(listings)
  },[])

  


  return (
    <div>
      AdminHome
      <div>
       <h1>ListingsPage</h1> 
        <Link to = "/principal/new"><button>Create new</button></Link> 
    </div>
      </div>
  )
}
