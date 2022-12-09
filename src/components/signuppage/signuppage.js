import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";


const Signuppage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const navigate = useNavigate()


    const handleOnSubmit = async (e) => {


        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        const confirmpassword = formdata.get("confirmpassword")


        await axios.post('https://contact-manager-backend-api.herokuapp.com/signup', {
            email: email,
            password: password,
            confirmpassword: confirmpassword

        }).then(res => res.json(),
            res => alert(res.data),
            alert("saved success fully"),
            navigate('/')
        )
            .then(
                (data) => {
                    console.log(data);
                }
            )

            .catch(err => {
                console.log(err)
            })



    }
    return (
        <>
        <div className="main-container">
        <div className="signup-heading">
               <h1>Registation Form</h1>
               </div>
            <div className="signup-container">
                  
                <form className='form' onSubmit={handleOnSubmit} >
                    <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-input2' placeholder='abcexample@gmail.com' required />


                    <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-input2' placeholder='Password' required />

                    <input type="text" name='confirmpassword' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} className='form-input2' placeholder='Confirm Password' required />

                    {password !== confirmpassword ? <p>password are not matchng</p> : null}
                    <button className='btn-btn-register'>Register</button>
                </form>
            </div>


        </div>
               




        </>
    )


}
export default Signuppage