const mongoose = require('mongoose')

var Schema = mongoose.Schema
var CompanionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name : String,
    effect : String,
    level : { type : Number, min : 1, max : 6}
})

module.exports = mongoose.model('CompanionModel', CompanionSchema)

