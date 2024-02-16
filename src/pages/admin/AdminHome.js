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

const [sortedVisitors, setSortedVisitors] = useState(visitors)

function createSetOfDates(){
  let years = []
  sortedVisitors.map((visitor)=>{
    years.push(visitor[1].year)
  })
  const availableYears = [...new Set(years)]

  let months =  []
  sortedVisitors.map((visitor)=>{
    months.push(visitor[1].month)
  })
  const availableMonths = [...new Set(months)]

  let dates =  []
  sortedVisitors.map((visitor)=>{
    dates.push(visitor[1].day)
  })
  const availableDays = [...new Set(dates)]
  
  return{
    days: availableDays,
    months: availableMonths, 
    years: availableYears, 
  }
}

const [filterOptions, setfilterOptions] = useState({
  year: 'all years',
  month: 'any month',
  day: 'any day'
});








function sortVisitors(){
  console.log(filterOptions,"CHANGE");
  // console.log(evt)
  // evt.preventDefault();

  let sorted = visitors
  console.log(filterOptions.day );

  console.log(filterOptions.year , "Inside")
  if (filterOptions.year != 'all years'){
    console.log(filterOptions.year);
    sorted = visitors.filter((visitor)=>{
      if (visitor[1].year == parseInt(filterOptions.year)){
        return visitor
      }
    })
  }


  // console.log(sorted, "after Years");
  

  if (filterOptions.month != 'any month'){
    sorted = visitors.filter((visitor)=>{
       if (visitor[1].month== parseInt(filterOptions.month)){
         return visitor
       }
     })
   }
  
  if (filterOptions.day != 'any day'){
   sorted = visitors.filter((visitor)=>{
      if (visitor[1].day== parseInt(filterOptions.day)){
        return visitor
      }
    })
  }else{
    sorted = sorted
  }


  // console.log(sorted);
  setSortedVisitors(sorted)

}

function changeFilter(evt){

console.log(evt.target.name, evt.target.value);

  setfilterOptions({...filterOptions, [evt.target.name]: evt.target.value})   
   
  // sortVisitors(evt)
}

function resetFilters(evt){
  evt.preventDefault()
  setfilterOptions({
    year: 'all years',
    month: 'any month',
    day: 'any day'
  })  
  setSortedVisitors(visitors)  
  // sortVisitors(evt)
}

useEffect(()=>{
  sortVisitors()
},[filterOptions])

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
      
      <h1 className='title'>Total visitors {sortedVisitors.length}</h1> 
      

      <div className='visitors_sorting_form' onSubmit={resetFilters}>
      <form autoComplete="off" >
        <select name="year" onChange={changeFilter}>
        <option value = "all years">all years</option>
        {Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "years"){
            return(
              value.map((year)=>{
                return(
                  <option value = {year}>{year}</option>
                )
              })
            )            
          }
        })}
        </select>
      
      

      <select name="month" onChange={changeFilter}>
        <option value = "any month">any month</option>
        {Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "months"){
            return(
              value.map((month)=>{
                return(
                  <option value={month}>{month}</option>
                )
              })
            )
          }
        })}
      </select>

      <select name="day" onChange={changeFilter}>
        <option value = "any day">any day</option>
        {Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "days"){
            return(
              value.map((day)=>{
                return(
                  <option value = {day}>{day}</option>
                )
              })
            )
          }
        })}
      </select>
      <button type='submit'>Reset filters</button>
      </form>
      </div>
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
