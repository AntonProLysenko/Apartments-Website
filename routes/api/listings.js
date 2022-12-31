const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');


//INDUCES
//INDEX
// GET /api/items
router.get('/', listingsCtrl.indexListing);
//NEW
// router.get('/new', listingsCtrl.newListing)
//DELETE
router.delete('/:id', listingsCtrl.deleteListing)
//UPDATE
router.put('/:id', listingsCtrl.updateListing);
//CREATE
router.post('/new', listingsCtrl.createListing)
//EDIT
router.get("/:id/edit",listingsCtrl.indexListing)
//SHOW
// GET /api/items/:id
router.get('/:id', listingsCtrl.showListing);



module.exports = router;