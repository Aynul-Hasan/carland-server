const mongoose= require('mongoose')

const reviweSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    ratting:{
        type:Number
    },

},{timestamps:true})


const ReviweSchema= new mongoose.model('reviwe',reviweSchema)

module.exports=ReviweSchema;