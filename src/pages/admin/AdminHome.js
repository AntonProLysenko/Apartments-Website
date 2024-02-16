import { useState, useEffect} from 'react';

// import * as listingsAPI from "../../utilities/listings-api"
import {Link} from "react-router-dom"
import moment from 'moment';//for calculating dataof change from now

// import NewListingForm from '../../components/admin/NewListingForm';
import * as listingsAPI from "../../utilities/listings-api"
import loading from '../../components/loading';


export default function AdminHome({listings, visitors}) {
  // const listingsArr = Object.values(listings);//converting object props to array props
//const [listings, setListings] = useState();//getting all listings from db

// async function getListings() {
//   const listings = await listingsAPI.getAll();
//   setListings(listings);
// }

// useEffect(()=>{
//   getListings()
// },[setListings])


function createSetOfDates(){
  let years = []
  visitors.map((visitor)=>{
    years.push(visitor[1].year)
  })
  const availableYears = [...new Set(years)]

  let months =  []
  visitors.map((visitor)=>{
    months.push(visitor[1].month)
  })
  const availableMonths = [...new Set(months)]
  console.log(availableYears);

  let dates =  []
  visitors.map((visitor)=>{
    dates.push(visitor[1].day)
  })
  const availableDays = [...new Set(dates)]

  console.log({
    days: availableDays,
    months: availableMonths, 
    years: availableYears, 
  });
  
  return{
    days: availableDays,
    months: availableMonths, 
    years: availableYears, 
  }
}

  function loaded (){
    //sorting, available listing goes first
    const sorted=[]
    listings.map((listing,idx)=>{
      if(listing.available === true){
        sorted.unshift(listing)
      }else{
        sorted.push(listing)
      }
    })

    //getting set of available dates
    let availabileDates = createSetOfDates();
    return(
      <>
      <ul className='listings-ul'>
        {sorted.map((listing, idx)=>{
          // console.log(listing)
          
          
          let lastUpdate = moment(listing.updatedAt).fromNow();
          
          return(
            <li key = {idx}>
                  <Link to= {`/irunthis/${listing._id}`}>
                    <div className='listing-ad'>

                      <div className='listing-ad-img'>
                        <img src = {listing.selectedFile1}/>
                      </div>

        
                        <div className = "listing-title">
                          <div className='lastUpdate'> updated: {lastUpdate} </div>
                        { listing.available===true?  <h3> <span className="dot-online"></span> {listing.title}  </h3> : <h3> <span className="dot-offline"></span> {listing.title}  </h3> }
                        
                          <h4 className='price'><span className='rent'>Rent:</span> {listing.rent}/mo</h4>
                        </div>
                      
                    </div>
                  </Link>    
              </li>


        ) 
        })}
      </ul>
      
      <h1 className='title'>Total visitors {visitors.length}</h1> 
      {visitors&&

        <select>
        {Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "years"){
            return(
              value.map((year)=>{
                return(
                  <option value = "year">{year}</option>
                )
              })
            )            
          }
        })}
        </select>
      }
      

      <select>
        <option value = "month">any month</option>
        {Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "months"){
            return(
              value.map((month)=>{
                return(
                  <option value = "month">{month}</option>
                )
              })
            )
          }
        })}
      </select>

      <select>
        <option value = "day">any day</option>
        {Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "days"){
            return(
              value.map((day)=>{
                return(
                  <option value = "day">{day}</option>
                )
              })
            )
          }
        })}
      </select>
</>
    )
  }

  return (
    <>  
 
      <h1 className='title'>Listings</h1> 
      <Link to = "/irunthis/new"><button className='create-btn'>Create new</button></Link>
      {listings && visitors? loaded():loading()}

      
      

    </>
  )
}
