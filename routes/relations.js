const express = require('express')
const { RelationController } = require('../controllers/relationController')
const router = express.Router()


router.get('/',RelationController.readAllRelation)
router.post('/d',RelationController.addRelation)

module.exports = router