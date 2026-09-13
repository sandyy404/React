import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
    <h1 style={{color:'blueviolet', padding:'20px'}}>This is Context Api tutorial</h1>
    <div className="content">
    <Login/>
    <Profile/>
    </div>
    </UserContextProvider>
  )
}

export default App
