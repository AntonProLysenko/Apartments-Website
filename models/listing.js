const mongoose = require('mongoose')
const { Schema, model } = mongoose


const listingSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    available:Boolean,
    selectedFiles: [],
  },
  {timestamps:true
}
);


const Listing = model("Listing", listingSchema);

module.exports = Listing