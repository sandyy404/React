import React, { useEffect, useState } from 'react'

function Github() {
   const [data,setData] = useState();
   useEffect(()=>{
   fetch("http://api.github.com/users/sandyy404")
   .then(res=>res.json())
   .then(data => setData(data))
   },[])
   if (!data) {
        return <div className='text-white'>Loading...</div>;
    }
  return (
    <div className='bg-gray-800 text-white text-4xl p-4 text-center '>Github Followers :{data.followers}
    <img  className ='rounded-3xl'src={data.avatar_url} alt="" /></div>
  )
}

export default Github