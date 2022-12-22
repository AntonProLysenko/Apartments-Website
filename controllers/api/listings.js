const express = require("express")
const Listing = require("../../models/listing")
const router = express.Router()


module.exports = {

     indexListing,
     newListing,
    // delete,
    // update,
    createListing,
    // edit,
     showListing,

  };

//INDUCES
//INDEX

async function indexListing(req, res) {
  try{
    console.log('in the index')
    const listings = await Listing.find({})

    console.log(listings);
    
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
  
// router.get("/new", (req,res)=>{
//   res.render("movies/New")
// })
//DELETE
//UPDATE
//CREATE
async function createListing (req,res){
  try{
    req.body.available  = req.body.available === "on"? true : false;
    await Listing.create(req.body)
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

