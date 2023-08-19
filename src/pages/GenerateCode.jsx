import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
const GenerateCode = () => {
  const navigate=useNavigate()
  const [generatingCode,setgeneratingCode]=useState(false)
  const [form,setForm]=useState({
    name:'',
    prompt:'',
    response:''
  })

  const url='http://localhost/4000/'
  const generateCode=async()=>{
    if(form.prompt){
      try{
        setgeneratingCode(true);
        const response=await axios.post(url+'/api/v1/code',
        JSON.stringify({prompt:form.prompt}),
        {headers:{
          'Content-type':'application/json',
        },
      })
      const data=await response.data
      setForm({...form,response:data})
      navigate('/');
    }
      catch(error){
        alert(err)
      }
      finally{
        setgeneratingCode(false)
      }
    }
  }
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <form className='mt-16 max-w-3xl' onSubmit={generateCode}>
      <div className='flex flex-col gap-5'>
      <Form LabelName="Your name" type="text" value={form.name} name="name" placeholder="Type here"
      handlechange={handlechange}/>
      <Form LabelName="Your prompt" type="text" value={form.prompt} name="prompt" placeholder="Generate your code..."
      handlechange={handlechange} />
      </div>
    </form>
  )
}

export default GenerateCode