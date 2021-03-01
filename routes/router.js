const express = require('express')
const router = express.Router()

const { doc, fetchData } = require('../controllers/handler.js')

router.get('/', doc )
router.get('/gempa', doc)
router.get('/gempa/:status', fetchData )

module.exports = router
