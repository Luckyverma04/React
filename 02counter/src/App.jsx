import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
//Hooks :usestate;
const[counter,setCounter] = useState(5)

// let counter=5
const addValue=()=>{
  setCounter(prevCounter =>prevCounter+1)
  setCounter(prevCounter =>prevCounter+1)
  setCounter(prevCounter =>prevCounter+1)
  setCounter(prevCounter =>prevCounter+1)


}
const removeValue=()=>{
  setCounter(prevCounter=>prevCounter-1)
  setCounter(prevCounter=>prevCounter-1)
  setCounter(prevCounter=>prevCounter-1)
  setCounter(prevCounter=>prevCounter-1)
  
}
  return (
    <>
     <h1>02 counter project:</h1>
     <h2> Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value </button>
     <br/>
     <button onClick={removeValue}>remove Value {counter} </button>
     <br/>
     <p1>Footer:{counter}</p1>
    </>
  )
}

export default App
