const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');


//INDUCES
//INDEX
// GET /api/items
router.get('/principal', listingsCtrl.indexListing);
//NEW
router.get('/principal/listings/new', listingsCtrl.newListing)
//SHOW
// GET /api/items/:id
router.get('/principal/listings/:id', listingsCtrl.showListing);

module.exports = router;