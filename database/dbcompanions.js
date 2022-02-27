const mongoose = require('mongoose')

var CompanionModel = require("../schemes/CompanionSchema")
var Schema = mongoose.Schema

module.exports.saveCompanion = function(name, effect, level){
    const companion = new CompanionModel({
        _id: new mongoose.Types.ObjectId(),
        name : name,
        effect : effect,
        level : level
    })

    companion.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.findCompanionByName = function(name, callback){
    CompanionModel.findOne({"name" : name}).select('name effect level').exec(function(error, doc){
        callback(doc)
    })
}
