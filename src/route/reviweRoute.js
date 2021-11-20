const express= require('express')
const router= express.Router()
const ReviweSchema= require('../models/reviweSchema')

router.get('/',async(req,res)=>{
    try{
        const allreviwe=await ReviweSchema.find()
        res.status(201).send(allreviwe)
    }catch(err){

    }
})
router.get('/:email',async(req,res)=>{
    try{
        const email= req.params.email
        const findReviwe=await ReviweSchema.find({email})
        res.status(201).send(findReviwe)
    }catch(err){

    }
})
router.post('/',async(req,res)=>{
    try{
        const {name, email, desc,ratting}= req.body
        const saveReviwe= ReviweSchema({name,email,desc,ratting})
        await saveReviwe.save()
        res.status(201).send({msg:"Create a new reviwe"})
    }catch(err){

    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const id =req.params.id
        const deleteReviwe= await ReviweSchema.deleteOne({_id:id})
        res.status(201).send(deleteReviwe)
    }catch(err){

    }
})


module.exports= router
