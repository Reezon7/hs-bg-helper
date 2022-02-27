const mongoose = require('mongoose')

var Schema = mongoose.Schema

var CardSchema = new Schema({
    type : String,
    name : String,
    stats : String,
    effect : String,
    level : { type : Number, min : 1, max : 6}
})

module.exports = mongoose.model('CardModel', CardSchema)