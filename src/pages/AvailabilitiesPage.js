import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import * as listingsAPI from "../utilities/listings-api";
import loading from "../components/loading";

export default function AvailabilitiesPage(props) {
  const [listings, setListings] = useState(); //getting all listings from db

  async function getListings() {
    const listings = await listingsAPI.getAll();
    setListings(listings);
  }

  useEffect(() => {
    getListings();
  }, [setListings]);

  


  function loaded() {
    const availableListings=[]//finding available listings
    listings.map((listing)=>{
  
    if(listing.available === true){
      // console.log(listing)
     return availableListings.push( listing)
    }
  })

  if (availableListings.length>0){
    return (
      
      <ul className="listings-ul">
        {availableListings.map((listing, idx) => {
          // console.log(listing)

          let lastUpdate = moment(listing.updatedAt).fromNow();

          return (
            <li key={idx}>
              <Link to={`/available/${listing._id}`}>
                <div className="listing-ad">
                  <div className="listing-ad-img">
                    <img src={listing.selectedFile1} />
                  </div>

                  <div className="listing-title">
                    <div className="lastUpdate"> updated: {lastUpdate} </div>

                    <h3>{listing.title}</h3>

                    <h4 className="price">
                      <span className="rent">Rent:</span> {listing.rent}/mo
                    </h4>
                  </div>

                  
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }else{
    return(
    <>
    <h3 className="title">Sorry...</h3>

         <h4 className="title"> We do't have any apartments available right now</h4>
         <h5 className="title">
           Please check out our sister property{" "}
           <a href="https://greenforestapts.business.site/" target="_blank">Green Forest Apartments</a>
         </h5>
       </>)
  }
    
  }

  return      listings? loaded():loading()
 
  // ) props.apartments ? (
  //   <>
  //     <h1>We have available apartments</h1>
  //   </>
  // ) : (
  //   <>
  //     <h3>Sorry...</h3>

  //     <h4> We do't have any apartments available right now</h4>
  //     <h5>
  //       Please check out our sister property{" "}
  //       <a href="#">Green Forest Apartments</a>
  //     </h5>
  //   </>
  
}
