const mongoose = require('mongoose')
var CardModel = require("../schemes/CardSchema")

module.exports.saveCard = function(type, name, stats, effect, level){
    
    const card = new CardModel({
        type : type,
        name : name,
        stats : stats,
        effect : effect,
        level : level
    })

    card.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getCardCategories = function(callback){
    CardModel.find({}, 'type', function(error, categories){
        callback(categories)
    })
}

module.exports.getCards = function(type, callback){
    CardModel.find({"type" : type}, function(error, cards){
        callback(cards)
    })
}
