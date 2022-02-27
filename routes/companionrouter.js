const express = require('express')
const db = require('../database/dbcompanions')
const router = express.Router()
const jsonParser = express.json()

router.post("/", jsonParser, function(req, res){
    const name = req.body.name
    const effect = req.body.effect
    const level = req.body.level

    db.saveCompanion(name,effect,level)
    res.sendStatus(201)
})

router.get("/", jsonParser, function(req, res){
    db.findCompanionByName(req.body.name, function(doc){
        res.json(doc)
    })
})

module.exports = router
