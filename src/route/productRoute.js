const express= require('express')
const router= express.Router()
const ProductSchema = require('../models/productsSchema')

// get all products
router.get("/",async(req,res)=>{
        try{
                const find = await ProductSchema.find()
                res.status(201).send(find)
        }catch(err){
            
        }
})

// get single product 
router.get("/:id",async(req,res)=>{
    try{
        const id= req.params.id
        const isfind= await ProductSchema.findOne({_id:id})
        res.status(201).send(isfind)
    }catch(err){ 

    }
})
// post single product 
router.post("/",async(req,res)=>{
    try{
        const {title,price,ratting,image}= req.body;
        const newProduct =new ProductSchema({title,price,ratting,image})
         const result= await newProduct.save()
         res.status(201).send({msg:"new products added"})

    }catch(err){

    }
})

router.put("/:id",async(req,res)=>{
    try{
        const id =req.params.id
        const isfind= await ProductSchema.findByIdAndUpdate(id,{$set:req.body})
        res.status(201).send({msg:'Product updated'})

    }catch(err){

    }
})
// product delete
router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const del= await ProductSchema.deleteOne({_id:id})
        res.status(201).send(del)

    }catch(err){
        
    }
})

module.exports= router