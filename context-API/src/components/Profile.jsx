import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
   const {user} = useContext(UserContext);
   if (!user) return (
      <p className="login-message" style={{color:'blueviolet'}}>
         Please login 🤗
      </p>
   )
   return(
     <h3 style={{padding:'15px', textAlign:'center',color:'blueviolet'}}>Welcome {user.userName}!</h3>
   )
}

export default Profile