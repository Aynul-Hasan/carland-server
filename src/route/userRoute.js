const express= require('express')
const router= express.Router()
const UserSchema= require('../models/userSchema')

router.get('/:email',async(req,res)=>{
    try{
        const email= req.params.email
        // console.log(email)
        const user= await UserSchema.findOne({email})
        let isAdmin= false
        if(user?.role==="admin"){
            isAdmin=true
        }

        res.status(201).send({role:isAdmin})
    }catch(err){
        // console.log(err)
    }
})
router.post('/',async(req,res)=>{
    try{
        
        const {name,email}=req.body
        // console.log(name,email)
        const role='user'
        const user= new UserSchema({name,email,role})
          await user.save()
        res.status(201).send({msg:"user created"})
    }catch(err){
            // console.log(err)
    }
})

router.put('/',async(req,res)=>{
    try{
        const {email}= req.body
        // console.log(email)
        const isfind=await UserSchema.findOne({email})
        if(isfind){
            const result= await UserSchema.updateOne({email}, { $set: { role:"admin"} })
            res.status(201).send({msg:'admin'})
        }
      
    }catch(err){
        // console.log(err)
    }
})

module.exports= router