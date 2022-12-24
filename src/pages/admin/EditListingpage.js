import { useParams, useNavigate } from 'react-router-dom'
import { useState } from "react"
import FileBase from 'react-file-base64';

import { edit } from "../../utilities/listings-service";

export default function EditListingpage({listings}) {
    const {id} = useParams()
    const thisListing = listings.find(element=>{
        return element._id === id
    })

    const [listingData, setListingData] = useState({ title: '', description: '', photo: '', available: false,  selectedFile: '' });
    const navigation = useNavigate();

    const formData = {...listingData}
    let errorMessage;
    let errorCheck = false

    const  handleEdit = async (evt) => {
        evt.preventDefault()
       
      try {

        console.log("trying");
        
        console.log(thisListing._id);
        
       errorCheck = false
       delete formData.error;
       navigation(`/principal/${thisListing._id}`);
       await edit(formData, thisListing._id)
       delete formData.error;

      } catch {
       errorCheck = true
       errorMessage="Failed - Try Again"
      }
    }



    //value={thisListing.title}

    return(
        <>
            <form  autoComplete="off" onSubmit={handleEdit}>
                <fieldset>
                    <legend>Create New Listing</legend>

                    <label>Title<input type="text" name="title" placeholder="Enter Title"  required onChange={(e) => setListingData({ ...listingData, title: e.target.value })}/></label>

                    <label>Description:<input type="text" name="description" placeholder="Enter Description" value={thisListing.description} required  onChange={(e) => setListingData({ ...listingData, description: e.target.value })}/> </label>

                    {/* <label>Photo link<input type="text" name="photo" required onChange={(e) => setListingData({ ...listingData, photo: e.target.value })}/> </label> */}

                    <div ><FileBase type="file" multiple={true} onDone={({ base64 }) => setListingData({ ...listingData, selectedFile: base64 })} /></div>

                    {
                        thisListing.available?
                        <label>Available :<input type="checkbox" name="available" checked={true} onChange={(e) => setListingData({ ...listingData, available: e.target.value })} /> </label>
                        :
                        <label>Available :<input type="checkbox" name="available"  onChange={(e) => setListingData({ ...listingData, available: e.target.value })} /> </label>

                    }
                   
                
                    <button type="submit">Edit Listing</button>
                    {/* <button onClick={clear}>Clear</button> */}

                    {/* {errorCheck  && <p className="error-message">&#160;{errorMessage}</p>} */}
                </fieldset>
       
          
          
            </form>
        </>
  )
}
