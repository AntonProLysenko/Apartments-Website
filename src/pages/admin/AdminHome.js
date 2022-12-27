import { useState, useEffect} from 'react';

// import * as listingsAPI from "../../utilities/listings-api"
import {Link} from "react-router-dom"
import moment from 'moment';

// import NewListingForm from '../../components/admin/NewListingForm';
import ListingDetailsPage from './ListingDetailsPage';


export default function AdminHome({listings}) {
// const listingsArr = Object.values(listings);//converting object props to array props




// console.log(listings);




  function loaded (){
    return(
      <ul className='listings-ul'>
      {listings.map((listing, idx)=>{
        // console.log(listing)
       

        let lastUpdate = moment(listing.updatedAt).fromNow();
      
          return(
                  <li key = {idx}>
                      <Link to= {`/principal/${listing._id}`}>
                        <div className='listing-ad'>

                          <div className='listing-ad-img'>
                            <img src = {listing.selectedFile1}/>
                          </div>

             
                            <div className = "listing-title">
                              <div className='lastUpdate'> updated: {lastUpdate}</div>
                              <h3>{listing.title}</h3>
                              <h4 className='price'><span className='rent'>Rent:</span> {listing.rent}/mo</h4>
                            </div>
                          
                    
                       
                         
                          
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
    return(
<div className="loader">
  <div className="loader-inner">
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line"></div>
    </div>
  </div>
</div>
    )
    
  }

  
  return (
    <>  
    {/* <NewListingForm/> */}
      <h1>Listings</h1> 
      <Link to = "/principal/new"><button className='create-btn'>Create new</button></Link>

   {   listings.length>0? loaded():loading()}
    </>
     
  )
}
