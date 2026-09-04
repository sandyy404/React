import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
     <div className='w-full h-screen duration-200'
     style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-25 inset-x-0 px-3'> 
        <div className='flex flex-wrap justify-center gap-4 shadow-2xl bg-green-50 px-3 py-2 rounded-2xl'>
        <button
        onClick={()=>setColor("red")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"red"}}
        >Red</button>
         <button 
         onClick={()=>setColor("violet")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"violet"}}
        >Violet</button>
         <button 
         onClick={()=>setColor("blue")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"blue"}}
        >Blue</button>
         <button 
         onClick={()=>setColor("coral")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"coral"}}
        >Coral</button>
         <button 
         onClick={()=>setColor("gold")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"gold"}}
        >Gold</button>
         <button
         onClick={()=>setColor("cyan")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"cyan"}}
        >Cyan</button>
         <button 
         onClick={()=>setColor("lime")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"lime"}}
        >Lime</button>
         <button 
         onClick={()=>setColor("black")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"black"}}
        >Black</button>
         <button 
         onClick={()=>setColor("pink")}
         className='outline-none px-3  py-1 rounded-full text-red-500 shadow-lg'
        style={{backgroundColor:"pink"}}
        >Pink</button>
         <button 
         onClick={()=>setColor("gray")}
         className='outline-none px-3  py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"gray"}}
        >Gray</button>
        </div>
     </div>
     </div>
    
  )
}

export default App
