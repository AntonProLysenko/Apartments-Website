const express = require("express")
const Stat = require("../../models/stat")

module.exports = {
  indexStats,
  addStat

};

// router.post('/stats', statCtrl.updateStats)
async function addStat(req, res){
  // console.log("On your BACK",req.body);
  try {
    // await Stat.create(req.body)
    await Stat.findOneAndUpdate({
      _id: "65ce67076d2f7f56c1057959"
    },{
      $push:{
        visitors: req.body
      }
    })
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
}


async function indexStats(req,res){
  try {
    const stats = await Stat.find({})
    res.status(200).json(stats);
  } catch (error) {
    res.status(400).json({ msg: error.message }); 
  }
}


// async function updateStats(req,res){
//   await Stat.findOneAndUpdate()
// }

