const mongoose = require('mongoose')
var HeroModel = require('../schemes/HeroSchema')
var CompanionModel = require('../schemes/CompanionSchema')

module.exports.saveHero = function(name, heroPower, companion){
    console.log(companion)
    const hero = new HeroModel({
        name : name,
        heroPower : heroPower,
        companion : companion
    })

    hero.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getHeroes = function(callback){
    HeroModel.find({}).populate('companion').exec(function(error, heroes){
        //if (error) callback(error, null)

        callback(heroes)
    })
}