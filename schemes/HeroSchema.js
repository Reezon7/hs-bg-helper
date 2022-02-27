const mongoose = require('mongoose')
var CompanionModel = require('../schemes/CompanionSchema')
var Schema = mongoose.Schema


var HeroSchema = new Schema({
    name : String,
    heroPower : String,
    companion : {type : Schema.Types.ObjectId, ref : 'CompanionModel'}
})

module.exports = mongoose.model('HeroModel', HeroSchema)