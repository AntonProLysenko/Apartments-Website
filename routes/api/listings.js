const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');


//INDUCES
//INDEX
// GET /api/items
router.get('/', listingsCtrl.indexListing);
//NEW
// router.get('/listings/new', listingsCtrl.newListing)
//DELETE
router.delete('/:id', listingsCtrl.deleteListing)
//CREATE
router.post('/new', listingsCtrl.createListing)
//SHOW
// GET /api/items/:id
router.get('/:id', listingsCtrl.showListing);

module.exports = router;