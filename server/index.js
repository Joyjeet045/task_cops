import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDB from './mongodb/connect.js';
dotenv.config();

import codeRoute from "./mongodb/routes/codeRoute.js"
const app=express()
app.use(express.json({limit:'40mb'}))
app.use(cors({
  origin:"*"
}))
app.use("/api/v1/code",codeRoute)
app.get("/",(req,res)=>{
  res.send("Hello")
})
const server=async()=>{
  try{
    connectDB(process.env.MONGO_URI),
    app.listen(4000,()=>console.log('server has started'))
  }
  catch(err){
    console.log(err)
  }
}
server();