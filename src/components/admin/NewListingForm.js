import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect  } from "react";
import FileBase from 'react-file-base64';


import { create } from "../../utilities/listings-service";


import OrderHistoryPage from "../../pages/OrderHistoryPage"
import AdminHome from '../../pages/admin/AdminHome';

export default function NewListingForm  (){

    const [error, setError] = useState('');
    const [listingData, setListingData] = useState({   

    title: '',
    rent: '',
    securityDeposit: '',
    utilities: '',
    description1: '',
    description2: '',
    pets: '',
    qualifications: '',
    available: false,
    selectedFile1: '',
    selectedFile2: '',
    selectedFile3: '',
    selectedFile4: '',
    selectedFile5: '',
    selectedFile6: '',
    selectedFile7: '',
    selectedFile8: '',
  });


  const navigation = useNavigate();
  //Autosize textarea
  



    const formData = {...listingData}

  

  
    const  handleSubmit = async (evt) => {
         evt.preventDefault()
        
       try {
       
        navigation("/principal");
        setListingData(formData)
        await create(formData)
       
       } catch {
        alert("Failed - Try Again")
       }
     }

    return(
     
      <div>


         <form  onSubmit={handleSubmit}>


          <div className = " create-form, form-container">
          <legend>Create New Listing</legend>
         
         <div className='form-title'>
          <label htmlFor = "title">Title:</label>
          <input type="text" name="title" id = "title" placeholder="Title" required onChange={(e) => setListingData({ ...listingData, title: e.target.value })}/>
         </div>
          
          
          <div className='prices'>
            <div>
            <label>Rent:</label>
            <input type="text" name="rent" placeholder="Monthly Rent Price" required onChange={(e) => setListingData({ ...listingData, rent: e.target.value })}/>
            </div>
            <div>
            <label>Security Deposit:</label>
            <input type="text" name="securityDeposit" placeholder="Security Deposit Price" required onChange={(e) => setListingData({ ...listingData, securityDeposit: e.target.value })}/>
            </div>          
          </div>

          <label>Utilities:</label>
          <textarea className='small-textarea' name="utilities" placeholder="Enter utilities policy" onChange={(e) => setListingData({ ...listingData, utilities: e.target.value })}/> 
             

            
            <label>Description Paragraph 1:</label>
            <textarea className='description'  name="description1" placeholder="Description" required onChange={(e) => setListingData({ ...listingData, description1: e.target.value })}/>
            
            <label>Description Paragraph 2:</label>
            <textarea className='description' name="description2" placeholder="Description" onChange={(e) => setListingData({ ...listingData, description2: e.target.value })}/> 
            

            <label>Pets:</label>
            <textarea className='small-textarea' name="pets" placeholder="Enter pet policy" onChange={(e) => setListingData({ ...listingData, pets: e.target.value })}/> 
              
              
              
    


            <label>Qualifications: </label>
            <textarea  name="qualifications" placeholder="Enter Minimum Qualifications for Residents" required onChange={(e) => setListingData({ ...listingData, qualifications: e.target.value })}/>


            <div className = "checkr">
              <label className='available'>Available: &nbsp;</label>
              <label className="switch">
                <input type="checkbox" name="available" onChange={(e) => setListingData({ ...listingData, available: e.target.value })} />
                <span className="slider"></span>
              </label>
             </div>



           

             
            <div className='photos'>
              <div><FileBase type="file" name = "selectedFile1" multiple={false}  onDone={({ base64 }) => setListingData({ ...listingData, selectedFile1: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile2" multiple={false}  onDone={({ base64 }) => setListingData({ ...listingData, selectedFile2: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile3" multiple={false}  onDone={({ base64 }) => setListingData({ ...listingData, selectedFile3: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile4" multiple={false}  onDone={({ base64 }) => setListingData({ ...listingData, selectedFile4: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile5" multiple={false} onDone={({ base64 }) => setListingData({ ...listingData, selectedFile5: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile6" multiple={false} onDone={({ base64 }) => setListingData({ ...listingData, selectedFile6: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile7" multiple={false} onDone={({ base64 }) => setListingData({ ...listingData, selectedFile7: base64 })} /></div>
              <div><FileBase type="file" name = "selectedFile8" multiple={false} onDone={({ base64 }) => setListingData({ ...listingData, selectedFile8: base64 })} /></div>
            </div>

            <button type="submit">Create Listing</button>
        

          
            </div>
            <p className="error-message">&nbsp;{error}</p>

          
          
        </form>
 
        {/* <Routes>
           <Route to = '/principal' element = {<AdminHome/>}>
         </Route>
        </Routes> */}
        </div>
    )
}























// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

// import useStyles from './styles';
// import { createPost, updatePost } from '../../actions/posts';

// const Form = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (currentId === 0) {
//       dispatch(createPost(postData));
//       clear();
//     } else {
//       dispatch(updatePost(currentId, postData));
//       clear();
//     }
//   };

//   return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//         <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
//         <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
//         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//         <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//         <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
//         <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;