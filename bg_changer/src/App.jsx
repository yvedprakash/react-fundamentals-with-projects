import { useEffect, useState } from 'react'

function App() {
   const [color,setColor] = useState("olive");
   
  return (
    <div className=" w-full h-screen duration-200" 
    style= {{background:color}}>
      <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
       <div className = "flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
         <button 
         onClick={()=> setColor("red")}
         className='outline-none px-3 py-1 rounded-full ' style={{backgroundColor:"red"}}>
          Red
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-3 py-2'>
        <button 
        onClick={()=> setColor("blue")}
        className='outline-none px-3 py-1 rounded-full text-white' style={{backgroundColor:'blue'}}>
          blue
        </button>
        </div>
         <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-3 py-2'>
        <button 
        onClick={()=> setColor("green")}
        className='outline-none px-3 py-1 rounded-full text-white' style={{backgroundColor:'green'}}>
          green
        </button>
        </div>
         <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-3 py-2'>
        <button 
        onClick={()=> setColor("olive")}
        className='outline-none px-3 py-1 rounded-full text-white' style={{backgroundColor:'olive'}}>
          olive
        </button>
        </div>
         <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-3 py-2'>
        <button 
        onClick={()=> setColor("black")}
        className='outline-none px-3 py-1 rounded-full text-white' style={{backgroundColor:'black'}}>
          black
        </button>
        </div>
      </div>
    </div>

  )
}

export default App
