const express = require("express")
const Stat = require("../../models/stat")

module.exports = {
  indexStats,
  addStat,
  removeStat

};

// router.post('/stats', statCtrl.updateStats)
async function addStat(req, res){
  
  try {
    const stats = await Stat.findOne({"_id": "65d4cbf67ee317d5ff4a7b1b"})
    let checkr = JSON.stringify(stats.visitors).includes(JSON.stringify(req.body))    

    if(req.body[1].ip =="216.196.160.27"){
      console.log("Admin is here");
    }else if(!checkr&&req.body[1].ip){
      await Stat.findOneAndUpdate({
        _id: "65ce67076d2f7f56c1057959"
        // _id: "65d4cbf67ee317d5ff4a7b1b"//test collection
      },{
          $push:{
            visitors: req.body
        }
      })
      res.status(200).json(req.body);
      console.log("On your BACK",req.body);
    }else if(!req.body[1].ip){
      console.log("No IP detected", req.body);
    }else{
      console.log("Existing visitor from", req.body[1].city, req.body[1].ip);
    }
    



  } catch (error) {
    console.log("ERROR IN ADDING STAT",error);
    res.status(400).json({msg:error.message})
  }
}


async function removeStat(req,res){
  try {
    // await Stat.create(req.body)
    await Stat.findOneAndUpdate({
      _id: "65ce67076d2f7f56c1057959"
      // _id: "65d4cbf67ee317d5ff4a7b1b"
    },{
      $pop:{
        visitors: 1
      }
    })
    console.log("On your Back -1");
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
}

async function indexStats(req,res){
  try {
    // const stats = await Stat.find({})
    // const stats = await Stat.findOne({"_id": "65d4cbf67ee317d5ff4a7b1b"})//test collection
    const stats = await Stat.findOne({"_id": "65ce67076d2f7f56c1057959"})
    res.status(200).json(stats);    
  } catch (error) {    
    res.status(400).json({ msg: error.message }); 
  }
}


// async function updateStats(req,res){
//   await Stat.findOneAndUpdate()
// }

