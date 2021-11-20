const mongoose= require('mongoose')

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true
    },
    ratting:{
        type:String
    },
    image:{
        type:String,
        required:true
    }

},{timestamps:true})


const ProductSchema= new mongoose.model('product',productSchema)

module.exports=ProductSchema;