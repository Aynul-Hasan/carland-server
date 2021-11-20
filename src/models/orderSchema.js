const mongoose= require('mongoose')

const orderSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    shopid:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    phone:{
        type:Number,
        required:true
    }
},{timestamps:true})

const OrderSchema= new mongoose.model('order',orderSchema)

module.exports=OrderSchema;