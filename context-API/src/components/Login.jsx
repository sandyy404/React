import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import '../App.css';
function Login() {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const { setUser } = useContext(UserContext);
   const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ userName, password })
   }
   return (
      <div className="login-container" >
         <h2 style={{color:'blueviolet'}}>Login</h2>
         <input type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='yourname' />
         <input type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='yourpassword' />
         <button onClick={handleSubmit}>Submit</button>
      </div>
   )
}

export default Login