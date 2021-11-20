const express= require('express')
const router= express.Router()
const OrderSchema= require('../models/orderSchema')

// get all orders
router.get('/',async(req,res)=>{
    try{
        const findAllorder= await OrderSchema.find()
        res.status(201).send(findAllorder)

    }catch(err){

    }
})

// add new order
router.post('/',async(req,res)=>{
    try{
        const {name,email,phone,address,shopid, status}= req.body
        // console.log(req.body)
        const addOrder=new OrderSchema({name,email,phone,address,shopid,status})
         await addOrder.save()
         res.status(201).send({msg:"Order"})
    }catch(err){

    }
})

// get single order
router.get("/:email",async(req,res)=>{
    try{
        const email=req.params.email
        const findorder= await OrderSchema.find({email})
        res.status(200).send(findorder)
    }catch(err){

    }
})

// delete order 
router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        // console.log(id)
        const del= await OrderSchema.deleteOne({_id:id})
        // console.log(del)
        res.status(200).send({msg:"Deleted"})
    }catch(err){

    }
})
// update order
router.put("/:id",async(req,res)=>{
    try{
        console.log(req.body)
        const id= req.params.id
        const isfind= await OrderSchema.updateOne({ _id:id}, { $set: { status:req.body.status } })
        res.status(200).send(isfind)
    }catch(err){

    }
})
module.exports= router