import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from  '../Firebase/FirebaseConfig'
import "../CSS/Login.css"
function Login() {
  const naviagateToPage = useNavigate();
  const [emailController,setEmailController] = useState("")
  const [passwordController,setPasswordController] = useState("")
  const loginUser =()=>{
     
      signInWithEmailAndPassword(auth,emailController,passwordController).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user["email"]);
            
      }).catch((errro)=>{
        console.log("User not Found");
      })

  }
  const wantToRegister=()=>{
      naviagateToPage("/register");
  }
  return (
    <div className='loginForm'>
          <input type="email" placeholder='E-mail' className='inputField' onChange={(e)=>{
              setEmailController(e.target.value);
          }}></input>
          <input type="password" placeholder='pa  ssword'  className='inputField'
           onChange={(e)=>{
            setPasswordController(e.target.value);
           }}></input>
          <button  className='loginButton' onClick={loginUser}>login</button>
          <button  className='loginButton' onClick={wantToRegister}>Register</button>
    </div>
  )
}

export default Login