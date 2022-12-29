import { useState, useEffect} from 'react';

// import * as listingsAPI from "../../utilities/listings-api"
import {Link} from "react-router-dom"
import moment from 'moment';

// import NewListingForm from '../../components/admin/NewListingForm';
import ListingDetailsPage from './ListingDetailsPage';
import * as listingsAPI from "../../utilities/listings-api"
import loading from '../../components/loading';


export default function AdminHome() {
// const listingsArr = Object.values(listings);//converting object props to array props
const [listings, setListings] = useState();//getting all listings from db

async function getListings() {
  const listings = await listingsAPI.getAll();
  setListings(listings);
}

useEffect(()=>{
  getListings()
},[setListings])


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
                              <div className='lastUpdate'> updated: {lastUpdate} </div>
                             { listing.available===true?  <h3> <span className="dot-online"></span> {listing.title}  </h3> : <h3> <span className="dot-offline"></span> {listing.title}  </h3> }
                             
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

  return (
    <>  
    {/* <NewListingForm/> */}
      <h1 className='title'>Listings</h1> 
      <Link to = "/principal/new"><button className='create-btn'>Create new</button></Link>

   {   listings? loaded():loading()}
    </>
     
  )
}
