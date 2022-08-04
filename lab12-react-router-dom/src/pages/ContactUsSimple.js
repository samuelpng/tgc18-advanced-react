import React from "react";
//a hook is a function provided by React or 3rd party package
//useNavigate creates a function which we can use to change pages
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ContactUs() {

    const navigate = useNavigate()
    
    const [formState, setFormState] = useState({
        fullname: '',
        email: ''
    })

    function submitForm() {
        //use  the returned navigate function to change pages
        navigate('/form-submitted')
    }

    const updateFormField = (e) => {
        setFormState({
            ...formState, //<-- duplicating the original form state object
            [e.target.name]: e.target.value //<-- rewrite the key that has been changed
        })
    }

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={formState.email} onChange={updateFormField}/>
            </div>
            <button onClick={submitForm}>Submit</button>
        </React.Fragment>
    )
}