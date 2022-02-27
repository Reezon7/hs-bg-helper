const express = require('express')
const db = require('../database/dbcards')
const jsonParser = express.json()

var cardRouter = express.Router()

cardRouter.get("/", function(req, res){
    db.getCardCategories(function(categories){
        res.json(categories)
    })
})

cardRouter.get("/:category", function(req, res){
    const category = req.params.category
    db.getCards(category, function(cards){
        res.json(cards)
    })
})

cardRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    
    const type = req.body.type
    const name = req.body.name
    const stats = req.body.stats
    const effect = req.body.effect
    const level = req.body.level

    db.saveCard(type, name, stats, effect, level)
    res.sendStatus(201)
})

module.exports = cardRouter
