import { useState } from 'react'
import './App.css'
import Header  from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-gray-800 text-white mx-4 mt-3 text-center'>React Router</h1>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
