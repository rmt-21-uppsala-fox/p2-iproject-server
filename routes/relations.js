const express = require('express')
const { RelationController } = require('../controllers/relationController')
const router = express.Router()


router.get('/:UserId',RelationController.readAllRelation)
router.post('/:UserId',RelationController.addRelation)

module.exports = router