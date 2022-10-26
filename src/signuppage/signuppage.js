import axios from "axios";
import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import ellipse from "../images/Ellipse.png";
import ellipse2 from "../images/ellipse2.png";



const Signuppage = ()=>{
   
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [confirmpassword,setConfirmpassword]=useState("")
   const navigate = useNavigate()
    
   
    const handleOnSubmit = async (e) =>{
        
        
        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        const confirmpassword = formdata.get("confirmpassword")
        
        
      await  axios.post('http://localhost:8000/signup',{
        email:email,
        password:password,
        confirmpassword:confirmpassword
       
      }).then( res=>res.json(),
      res=>alert(res.data),
      alert("saved success fully"),
      navigate('/')
      )
        .then(
            (data)=>{console.log(data);
            }
        )
      
        .catch(err=>{
            console.log(err)
        })
           
        

    }
    return(
        <>
        <img src={ellipse} alt="img"/>
        <div className='body'>
        <div className='container'>
        <center>
        <form className='form' onSubmit={handleOnSubmit} >
        <input type="text"  name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-input' placeholder='email'/>
   <br/>
   <input type="text"  name='password' value={password}  onChange={(e)=>setPassword(e.target.value)} className='form-input' placeholder='password'/>
   <br/>
   <input type="text" name='confirmpassword' value={confirmpassword}  onChange={(e)=>setConfirmpassword(e.target.value)} className='form-input' placeholder='confirmpassword'/>
   <br/>
   {password !== confirmpassword?<p>password are not matchng</p>:null}
   <br/>
  <button  className='btn-btn'>Register</button>
        </form>
        </center>
        </div>
        </div>
        <img className='image' src={ellipse2} alt="img"/>
        </>
    )


}
export default Signuppage