
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        axios.post("https://contact-manager-zxwn.onrender.com/signin", {
            email: email,
            password: password
        }).then((res) => {
            if (res.data.message === "success") {
                window.localStorage.setItem("token", res.data.token)
                alert("SignIn Sucessfully!")
                console.log(email);
                navigate("/homePage");

            }
            if (res.data.message === "please add all fields") {
                alert("User not Registered !")
            }
            if (res.data.message === "please enter valid info") {
                alert("Invalid Crediential!")
            }


        })
            .catch(err => {
                console.log(err)
                alert("Enter Valid Details")
            })

    }

    return (

        <>
          
          <div className="main-container">
        <div className="signup-heading">
        <h1>Enter login credintials</h1>
        </div>
        <div className="signin-container">
                    <form className='form' onSubmit={handleOnSubmit}>
                        <input type="text" className='form-input2' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
                        <input type="text" className='form-input2' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required/>
                        
                        <button className='btn-btn-signin' >Sign In</button>
                        
                        <Link to='/Signuppage' id='link'><button className='btn-btn-signup'>Sign Up</button></Link>
                       
                       
                    </form>
                    </div>

                    </div>
           
        </>

    )

}
export default Signin