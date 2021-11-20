const express= require('express')
const app= express()
require('dotenv').config()
const cors= require('cors')
const port = process.env.PORT || 8000
require('./db/conn')
const productRoute= require('./route/productRoute')
const orderRoute= require("./route/orderRoute")
const reviweRoute= require('./route/reviweRoute')
const userRoute= require('./route/userRoute')
// middleware 
app.use(express.json())
app.use(cors())

// routers
app.use("/product",productRoute)
app.use('/order',orderRoute)
app.use('/reviwe',reviweRoute)
app.use('/user',userRoute)

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})