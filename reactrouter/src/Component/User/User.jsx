import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
   const {id} = useParams()
  return (
    <div className=" text-center bg-gray-800 text-white text-4xl p-3">
    <h1>User : {id}</h1>
</div>
  )
}

export default User