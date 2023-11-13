const mongoose = require('mongoose')
const { Schema, model } = mongoose


const listingSchema = new Schema({
    title: {type:String, required:true},
    rent: {type:String, required:true},
    securityDeposit: {type:String, required:true},
    utilities: {type:String, required:true},
    description1: {type:String, required:true},
    description2: {type:String, required:true},
    pets: {type:String, required:true},
    qualifications: {type:String, required:true},
    available:Boolean,
    selectedFile1: {type:String},
    selectedFile2: {type:String},
    selectedFile3: {type:String},
    selectedFile4: {type:String},
    selectedFile5: {type:String},
    selectedFile6: {type:String},
    selectedFile7: {type:String},
    selectedFile8: {type:String},
    // testFiles: {type:Array},

  },
  {timestamps:true
}
);


const Listing = model("Listing", listingSchema);

module.exports = Listing