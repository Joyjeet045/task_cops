import React from 'react'

const Form = ({LabelName,type,value,placeholder,name,handlechange}) => {
  return (
    <div>

    <div className='flex flex-col xs:flex-row  justify-start items-center gap-2 mb-2 '>
      
      <label 
        htmlFor={name}
        >
        {LabelName}
      </label>
      
    </div>
    <input type={type} value={value} placeholder={placeholder} id={name} name={name} onChange={handlechange}
    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] truncate outline-none block w-full p-3'></input>
   
    </div>
    
  )
}

export default Form