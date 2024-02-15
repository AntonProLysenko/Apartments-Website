const express = require('express')
const router = express.Router()
const statCtrl = require('../../controllers/api/stats')

// router.post('/stats', statCtrl.updateStats)
router.get('/read', statCtrl.indexStats)
router.put('/new', statCtrl.addStat)

module.exports = router
