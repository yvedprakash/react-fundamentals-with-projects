import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)  

  let addvalue = ()=>{
    if(counter < 20){
    setCounter(counter+1);
    }
  } 
  
     [counter,setCounter] = useState(0)
  let removevalue =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  // let counter = 15
  // let addvalue = () =>{
  //   counter = counter+1  
  //   console.log('clicked',counter)
  // }
  return (
    <>
      <h1>Counter Project </h1>
      <h2>counter:{counter}</h2>
      <button 
       onClick={addvalue}
      >Add value</button>
      <br/>
      <button
      onClick={removevalue}
      >Remove</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
