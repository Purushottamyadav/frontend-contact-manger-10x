import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";


const Signuppage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const navigate = useNavigate();


    const handleOnSubmit = async (e) => {
        try{
            await axios.post('http://localhost:8000/signup', {
                email: email,
                password: password
            },{headers:{
                "Content-Type":"application/json"
            }}).then(res=>{
                alert(res.data.msg);
                navigate("/")
            }).catch(data => {
                    alert("hii " + data.data.msg);
            })
            
        }catch(err){
            alert("error in saving");
        }
    }
    return (
        <>
            <div className="main-container">
                <div className="signup-heading">
                    <h1>Registation Form</h1>
                </div>
                <div className="signup-container">

                    <div className='form'>
                        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-input2' placeholder='abcexample@gmail.com' required />


                        <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-input2' placeholder='Password' required />

                        <input type="text" name='confirmpassword' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} className='form-input2' placeholder='Confirm Password' required />

                        {
                            password !== confirmpassword ? <p>password are not matchng</p> : null
                        }

                        <button className='btn-btn-register' onClick={(e) => { handleOnSubmit(e)}}>Register</button>
                    </div>
                </div>
            </div>





        </>
    )


}
export default Signuppage