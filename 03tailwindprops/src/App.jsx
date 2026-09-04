import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-amber-300 text-black p-4 rounded-3xl m-4'>Tailwind Started</h2>
      <Card  design="Happy's design"/>
      <Card name ="Sandeep" design="Sandeep's design"/>
    </>
  )
}

export default App
 