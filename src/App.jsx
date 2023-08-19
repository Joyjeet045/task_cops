import React from "react"
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
// import {logo} from '../src/assets/'
import {Home,GenerateCode} from "./pages"
const App=()=> {

  return (
    
    <BrowserRouter>
    <header className="w-full flex align-center justify-between bg-slate-100
    sm:px-8 px-4 py-4 border-b border-b-[#e4e8ee]">
      <Link to="/">
        {/* <img src={logo} alt="logo" className='w-28 object-contain'/> */}
      </Link>
      <Link to="/generate-code" className='font-inter font-medium bg-[#944ddc] text-white px-3 py-2 sm:[px-1 py-2] rounded-md'>
          Generate Code
      </Link>
    </header>
    
    <main className='sm:px-4 px-8 py-4 w-full bg-[#f1f1f1]
    min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/generate-code" element={<GenerateCode/>}/>
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App
