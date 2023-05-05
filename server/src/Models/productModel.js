const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    name : {type : String , required : true},
    price : {type : Number , required : true},
    ratings : { type : Number , required : true , min : 1 , max : 5},
    description : { type : String , required : true}

}, {timestamps : true})

module.exports = mongoose.model('Product', ProductSchema)