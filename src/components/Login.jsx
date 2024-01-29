import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser} = useContext(UserContext)

const handleSubmit=(e)=>{
e.preventDefault()
setUser({username,password})
    }
  return (
    <div>
      <h1>Login</h1>
        <input type='text' 
        onChange={(e)=>setUsername(e.target.value)}
         value={username} placeholder='username' />
        <input type='password'
         onChange={(e)=>setPassword(e.target.value)}
         value={password}  placeholder='password' />

        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login