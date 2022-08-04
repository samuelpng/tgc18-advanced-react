import React from "react";
//a hook is a function provided by React or 3rd party package
//useNavigate creates a function which we can use to change pages
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ContactUs() {

    const navigate = useNavigate()
    const [fullname, setFullname] = useState("")
    const [email, setEmail] =  useState("")

    function submitForm() {
        //use  the returned navigate function to change pages
        navigate('/form-submitted')
    }

    const updateFullname = (e) =>{
        setFullname(e.target.value)
    }

    const updateEmail = (e) =>{
        setEmail(e.target.value)
    }

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={fullname} onChange={updateFullname}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={updateEmail}/>
            </div>
            <button onClick={submitForm}>Submit</button>
        </React.Fragment>
    )
}