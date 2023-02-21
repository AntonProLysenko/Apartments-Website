import { Link } from "react-router-dom";
import moment from "moment";


import loading from "../components/loading";
import Footer from '../components/Footer';

export default function AvailabilitiesPage({listings}) {

  function loaded() {
    const availableListings=[]//finding available listings
    listings.map((listing)=>{
    if(listing.available === true){
     return availableListings.push( listing)
    }
    return null
  })

  if (availableListings.length>0){
    return (
      <>
      
      <ul className="listings-ul">
        {availableListings.map((listing, idx) => {
          
          let lastUpdate = moment(listing.updatedAt).fromNow();
          
          return (
            <li  data-aos="zoom-in"data-aos-duration="1500" key={idx}>
              <Link to={`/available/${listing._id}`}>
                <div className="listing-ad">
                  <div className="listing-ad-img">
                    <img src={listing.selectedFile1} alt = "Salem Crown Apartment Interior" />
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
      <Footer/>
        </>
    );
  }else{
    return(
    <>
    <h3 className="title">Sorry...</h3>

         <h4 className="title"> We do't have any apartments available right now</h4>
         <h5 className="title">
           Please check out our sister property{" "}
           <a href="https://greenforestapts.business.site/" target="_blank" rel="noreferrer">Green Forest Apartments</a>
         </h5>

         <Footer/>
       </>)
  }
    
  }

  return      listings? loaded():loading()
   
}
