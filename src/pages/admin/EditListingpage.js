import { useParams, useNavigate, useLocation} from 'react-router-dom'
import { useState, useEffect } from "react"
import FileBase from 'react-file-base64';

// import { Component.setState } from "react";

import * as listingsAPI from "../../utilities/listings-api";
import { update } from "../../utilities/listings-service";
import loading from '../../components/loading';

export default function EditListingpage (){
  const {id} = useParams()
  const location = useLocation();
  const [listing, setListing] = useState(location.state?.listing ?? null);
  const [error, setError] = useState('');
  const [display, setDisplay] = useState({
                                isLoaded: false,
                                message: "Getting Listing"
                              });

  const navigation = useNavigate();
   
  async function getListing() {
  const responcelisting  = location.state?.listing ?? await listingsAPI.getById(id);
    setListing(responcelisting);
    if (listing){
      setDisplay({
        ...display,
        isLoaded: true,
        message: ""
      });
    }
  }
useEffect(() => {
      console.log("UseEffect Log")
      if (!listing) {
        console.log("Getting Listings")
        getListing();
      }else{
        setDisplay({
          ...display,
          isLoaded: true,
          message: ""
        });
      }
    }, [id, listing]);

    const  handleUpdate = async (evt) => {
        evt.preventDefault()
      try {
        console.log("Sending:", listing)
        setDisplay({
          ...display,
          isLoaded: false,
          message: "Updating Listing"
        });
        let updResponse = await update(listing, listing._id)
        console.log("Applied: ", updResponse)
        if (updResponse.status == 201) {
          navigation(`/irunthis/${listing._id}`);
        }else{
          setDisplay({
            ...display,
            isLoaded: true,
            message: ""
          });
        }
      } catch(e) {
        setError(`Failed to update ${e.message}`)
        // setError(`Unexpected error! ${error.message}`);
        setDisplay(d => ({ ...d, isLoaded: true, message: "" }));
      }
      // finally{
      //   navigation(`/irunthis/${listing._id}`);
      //  }
  }


  function loaded(){
    return(
        <>
            <form  autoComplete="off" onSubmit={handleUpdate}>
            <div className = " create-form, form-container">
          <legend>Edit Listing</legend>
         
         <div className='form-title'>
          <label htmlFor = "title">Title:</label>
          <input type="text" name="title" id = "title" placeholder="Title"  onChange={(e) => setListing({ ...listing, title: e.target.value })} value = {listing.title}/>
         </div>
          
          
          <div className='prices'>
            <div>
            <label>Rent:</label>
            <input type="number" name="rent" placeholder="Monthly Rent Price"  onChange={(e) => setListing({ ...listing, rent: e.target.value })} value ={listing.rent}/>
            </div>
            <div>
            <label>Security Deposit:</label>
            <input type="number" name="securityDeposit" placeholder="Security Deposit Price"  onChange={(e) => setListing({...listing, securityDeposit: e.target.value })} value ={listing.securityDeposit}/>
            </div>          
          </div>

          <label>Utilities:</label>
          <textarea className='small-textarea' name="utilities" placeholder="Enter utilities policy" onChange={(e) => setListing({ ...listing, utilities: e.target.value })} value ={listing.utilities}/> 
             

            
            <label>Description Paragraph 1:</label>
            <textarea className='description'  name="description1" placeholder="Description"  onChange={(e) => setListing({ ...listing, description1: e.target.value })} value ={listing.description1}/>
            
            <label>Description Paragraph 2:</label>
            <textarea className='description' name="description2" placeholder="Description" onChange={(e) => setListing({ ...listing, description2: e.target.value })} value ={listing.description2}/> 
            

            <label>Pets:</label>
            <textarea className='small-textarea' name="pets" placeholder="Enter pet policy" onChange={(e) => setListing({ ...listing, pets: e.target.value })} value ={listing.pets}/> 
              
              
              
    


            <label>Qualifications: </label>
            <textarea  name="qualifications" placeholder="Enter Minimum Qualifications for Residents"  onChange={(e) => setListing({ ...listing, qualifications: e.target.value })} value ={listing.qualifications}/>

           
              
              <div className = "checkr">
                <label className='available'>Available: &nbsp;</label>
                <label className="switch">
                  {listing.available ? (            
                    <input type="checkbox" name="available" checked onChange={(e) => setListing({ ...listing, available: e.target.checked })} />
                  ):(
                    <input type="checkbox" name="available"  onChange={(e) => setListing({ ...listing, available: e.target.checked })}  />
                  )}
                  <span className="slider"></span>
                </label>
              </div>

              



           

             
            <div className='photos'>
             
              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile1">Select Main Photo</label>
                <FileBase type="file" className="fileBtn" id="selectedFile1" name = "selectedFile1" multiple={false} value = {listing.selectedFile1}  onDone={({ base64 }) => setListing({ ...listing, selectedFile1: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile2">Select Second Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile2" name = "selectedFile2" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile2: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile3">Select Third Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile3" name = "selectedFile3" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile3: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile4">Select Fouth Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile4" name = "selectedFile4" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile4: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile5">Select Fifth Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile5" name = "selectedFile5" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile5: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile6">Select Sixth Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile6" name = "selectedFile6" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile6: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile7">Select Seventh Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile7" name = "selectedFile7" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile7: base64 })} />
              </div>

              <div className = "file-input-wrapper">
                <label className="input-group-text" htmlFor="selectedFile8">Select Eighth Photo</label>
                <FileBase type="file" className="fileBtn" id = "selectedFile8" name = "selectedFile8" multiple={false} onDone={({ base64 }) => setListing({ ...listing, selectedFile8: base64 })} />
              </div>

            </div>
            <div>
                  <p>Note: first picture will appear as a main listing photo</p>
                  PS. There is ALREADY a FLOOR PLAN in Photos, DO NOT Add it here
            </div> 

            <p className="error-message">&nbsp;{error}</p>

            <button type="submit"> 
            <i className="fa fa-pencil" aria-hidden="true"></i>
           &nbsp; Save Changes</button>
        

          
            </div>
            </form>
        </>
  )}



  return  listing ? loaded() : loading(display.message)
}
