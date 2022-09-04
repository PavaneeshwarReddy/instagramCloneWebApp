import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../Firebase/FirebaseConfig"
import "../CSS/Login.css"
function Register() {
  const [emailController, setEmailController] = useState("")
  const [passwordController, setPasswordController] = useState("")
  const registerUser = () => {
    createUserWithEmailAndPassword(auth, emailController, passwordController).then((userCredential)=>{
      const user = userCredential.user;
      console.log(user["email"]); 
    }).catch((registerError)=>{
      console.log(registerError.message);
    })
  }
  return (
    <div className='loginForm'>
      <input type="email" placeholder='E-mail' className='inputField' onChange={(e) => {
        setEmailController(e.target.value);
      }}></input>
      <input type="password" placeholder='password' className='inputField'
        onChange={(e) => {
          setPasswordController(e.target.value);
        }}></input>
      <button className='loginButton' onClick={registerUser}>Register</button>
    </div>
  )
}

export default Register