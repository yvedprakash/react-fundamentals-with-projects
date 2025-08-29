import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)
    
  let myObj = {
      username : "ved",
      age :23
    }
    
  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind test</h1> 
      {/* <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind!</h1> */}
      <Card username="Chai"/>
      <Card username ="Lorem Ipsum Dolor" />
    </>
  )
}

export default App

