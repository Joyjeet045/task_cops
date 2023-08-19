import express from 'express'
import * as dotenv from 'dotenv'
import {OpenAIApi,Configuration} from "openai"
dotenv.config()
//config
const config=new Configuration({
  apiKey:process.env.OPENAI_API_KEY
})
//instance
const openai=new OpenAIApi(config)
const router=express.Router()
router.route('/').get((req,res)=>{
  res.send('hi',200);
})
router.route('/').post(async(req,res)=>{
  const {prompt}=req.body;
  try{
    const response=await openai.createChatCompletion({
      model: 'text-davinci-003', 
      prompt,
      max_tokens: 100, 
    });
    const generatedCode = response.choices[0].text;
    res.json({generatedCode})
  }
  catch(error){
    console.error('Error generating code:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})
export default router
