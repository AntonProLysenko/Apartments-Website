import { useState, useEffect} from 'react';

// import * as listingsAPI from "../../utilities/listings-api"
import {Link} from "react-router-dom"
import moment from 'moment';//for calculating dataof change from now

// import NewListingForm from '../../components/admin/NewListingForm';
// import * as listingsAPI from "../../utilities/listings-api"
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
    sortedVisitors.forEach((visitor)=>{
      years.push(visitor[1].year)
    })
    let availableYears = [...new Set(years)]

    if(availableYears.length>1){
      availableYears.unshift("all years")
    }

    let months =  []
    sortedVisitors.forEach((visitor)=>{
      months.push(visitor[1].month)
    })
    const availableMonths = [...new Set(months)]
    if(availableMonths.length>1){
      availableMonths.unshift("any month")
    }

    let dates =  []
    sortedVisitors.forEach((visitor)=>{
      dates.push(visitor[1].day)
    })

    let availableDays = [...new Set(dates)]
    
    if(availableDays.length>1){
      availableDays.unshift("any day")
    }


    let cities =  []
    sortedVisitors.forEach((visitor)=>{
      cities.push(visitor[1].city)
    })
    let availabileCities = [...new Set(cities)]

    // console.log(availabileCities, "cities inside sorting");
    
    return{
      days: availableDays,
      months: availableMonths, 
      years: availableYears,
      cities: availabileCities
    }
}

const [filterOptions, setfilterOptions] = useState({
  year: 'all years',
  month: 'any month',
  day: 'any day'
});








function sortVisitors(){
  let sorted = visitors

  if (filterOptions.year !== 'all years'){
    sorted = visitors.filter((visitor)=>{
      if (visitor[1].year === parseInt(filterOptions.year)){
        return visitor
      }
    })
  }


  if (filterOptions.month !== 'any month'){
    sorted = visitors.filter((visitor)=>{
       if (visitor[1].month === parseInt(filterOptions.month)){
         return visitor
       }
     })
   }
  
  if (filterOptions.day !== 'any day'){
   sorted = visitors.filter((visitor)=>{
      if (visitor[1].day === parseInt(filterOptions.day)){
        return visitor
      }
    })
  }else{
    sorted = sorted
  }

  setSortedVisitors(sorted)

  // console.log(sorted, "sorted vis");
  
}

function changeFilter(evt){
  setfilterOptions({...filterOptions, [evt.target.name]: evt.target.value})   
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
      
      <h1 className='title'>Total unique visitors {sortedVisitors.length}</h1> 
      
      <ul id='visitor_cities_ul'>
      <h2 className='title'>Cities visited:</h2>
      {
         Object.entries(availabileDates).map(([key, value]) =>{
          if (key === "cities"){
            return(
              <li> {`${value},  `}</li> 
              )
          }
        })
      }
        </ul>
      

      <div className='visitors_sorting_form' onSubmit={resetFilters}>
      <form autoComplete="off" >
        <select name="year" defaultValue={"all years"} onChange={changeFilter}>
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
      
      

      <select name="month" defaultValue={"any month"} onChange={changeFilter}>
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

      <select name="day" defaultValue={"any day"} onChange={changeFilter}>
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
      
      {listings&&sortedVisitors? loaded():loading()}
    </>
  )
}
