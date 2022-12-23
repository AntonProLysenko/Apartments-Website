const express = require("express")
const Listing = require("../../models/listing")
const router = express.Router()


module.exports = {

     indexListing,
     newListing,
     deleteListing,
    // update,
    createListing,
    // edit,
     showListing,

  };

//INDUCES
//INDEX

async function indexListing(req, res) {
  try{
   
    const listings = await Listing.find({})
    res.status(200).json(listings);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

//NEW
async function newListing (req,res) {
  try{
    req.status(200)
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}
  

//DELETE
async function deleteListing(req,res){
  try {
    console.log(req.body)
    // res.redirect("/principal")
    const deletedListing = await Listing.findByIdAndDelete(req.body._id)
    res.status(200).json(deletedListing)
   
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
}
//UPDATE
//CREATE
async function createListing (req,res){
  try{
    console.log(req.body.available)
    req.body.available  = req.body.available === "on"? true : false;
    
    console.log('req.body.selectedFiles', req.body.selectedFiles);
    // req.body.selectedFiles
    await Listing.create(req.body)
    res.redirect('/principal')

  }catch(e){
    res.status(400).json({msg:e.message})
  }
}

//EDIT
//SHOW
async function showListing(req, res) {
  try{
    const listing = await Listing.findById(req.params.id);
    res.status(200).json(listing);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}









// router.get("/principal/listings/new", (req,res)=>{
//     res.send("woohooo")
// //     res.render("movies/New")
// // })

