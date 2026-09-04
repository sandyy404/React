import { useState } from 'react'
import './App.css'

function App() {

  const [Counter,setCounter] = useState(5)
  const addValue = () => {
    if (Counter<20) {
      setCounter(Counter+1)
    }
    

  }
  const removeValue =()=>{
    if (Counter>0) {
      setCounter(Counter-1)
    }
    
  }
  return (
    <>
      <h1>This is my world</h1>
      <h2> Counter value: {Counter}</h2>
      <button onClick={addValue}>Add value: {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {Counter}</button>
    </>
  )
}

export default App
