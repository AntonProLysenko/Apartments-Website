import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

import * as listingsAPI from "../../utilities/listings-api"

import { deleteListing } from "../../utilities/listings-service"

import EditListingpage from './EditListingpage';

import FsLightbox from "fslightbox-react";


export default function ListingDetailsPage({listings}) {
  const [listing, setListing] = useState();//getting all listings from db

 

  const [slide, setSlide] = useState(false);
    const {id} = useParams()
    const navigation = useNavigate();

    const thisListing = listings.find(element=>{
      return element._id === id
  })





  async function getListing() {
    const listing = await listingsAPI.getById(id);
    setListing(listing);
    console.log(listing)
  }

  useEffect(()=>{
    getListing()
  },[setListing])




  const handleDelete=async(evt)=>{
    // evt.preventdefault()
    try{
      navigation("/principal");
     await  deleteListing(thisListing)
    }catch{
     
    }
  
  }


  function loaded(){
    return(
<>
      <div onClick={() => setSlide(!slide)}  class="stack">
        <img src={listing.selectedFile1} width="250" height="180"/>
        <span>Click to See All Photos</span>
      </div>

    <FsLightbox
				toggler={slide}
				sources={[
          listing.selectedFile1,
					listing.selectedFile2,
          listing.selectedFile3,
					listing.selectedFile4,
          listing.selectedFile5,
          listing.selectedFile7,
          listing.selectedFile9,
				]}
        />

        </>
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

    {   listing? loaded():loading()}
 
     
   
      {/* <div className='galery'>
        <img onClick={() => setSlide(!slide)} className='galery-pic1' src = {thisListing.selectedFile1}  />
        <img  onClick={() => setSlide(!slide)}className='galery-pic2' src = {thisListing.selectedFile2}/>
        <img onClick={() => setSlide(!slide)} className='galery-pic3' src = {thisListing.selectedFile3}/>
        <img onClick={() => setSlide(!slide)} className='galery-pic4' src = {thisListing.selectedFile4}/>
        <img onClick={() => setSlide(!slide)} className='galery-pic5' src = {thisListing.selectedFile5}/>
        <img onClick={() => setSlide(!slide)} className='galery-pic6' src = {thisListing.selectedFile7}/>
        <img  onClick={() => setSlide(!slide)} className='galery-pic7' src = {thisListing.selectedFile9}/>
      </div> */}
       {/* <div>ListingDetailsPage</div>
      <h1>{thisListing.title}</h1> 

      <div onClick={() => setSlide(!slide)}  class="stack">
        <img src={thisListing.selectedFile1} width="250" height="180"/>
        <span>Click to See All Photos</span>
      </div>

    <FsLightbox
				toggler={slide}
				sources={[
					thisListing.selectedFile1,
					thisListing.selectedFile2,
          thisListing.selectedFile3,
					thisListing.selectedFile4,
          thisListing.selectedFile5,
          thisListing.selectedFile7,
          thisListing.selectedFile9,
				]}
			/>



<Link to={`/principal/${thisListing._id}/edit`}>
        <button>Edit</button>
      </Link>

      {
     thisListing.available? <checkbox checked = "true"/>:<h2>Not Available</h2>
    }
    <h4>{thisListing.desctiption1}</h4>
   
   <form onSubmit={handleDelete}>
            <input type="submit" value="Delete" />
    </form> */}



{/* <Routes>
  <Route path ="/principal/:id/edit" element = {<EditListingpage listing = {thisListing}/>} />
</Routes> */}

    </>
    
  )
}
