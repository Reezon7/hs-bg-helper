const express = require('express')
const dbHero = require('../database/dbheroes')
const dbComp = require('../database/dbcompanions')
const router = express.Router()
const jsonParser = express.json()

router.post("/", jsonParser, function(req, res){
    const name = req.body.name
    const heroPower = req.body.heroPower
    const companion = req.body.companion //name

    dbComp.findCompanionByName(companion, function(doc){
        console.log(doc)
        dbHero.saveHero(name, heroPower, doc._id)
        res.sendStatus(201)
    })

    
})

router.get("/", function(req, res){
    dbHero.getHeroes(function(doc){
        res.json(doc)
    })
})

module.exports = router