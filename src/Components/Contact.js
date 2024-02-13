
import Header from './Header'
import Footer from './Footer'
import './Contact.css';

import React, { useState } from 'react';




export default function Contact() {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the form from submitting and reloading the page
        // Hide the form and display the thank you message
        setSubmitted(true);
    };



  return (

    <div className="container-fluid">

    <Header />
    <div className=" body1 container-fluid ">
    <h1> Contact Us</h1>

<div className="container body2 " id="feedbackContainer">

{!submitted ? (
    <form id="feedbackForm" onSubmit={handleSubmit}>
        <p className="para"> <br /> Have comments , quetions or feedback to share ? Our team would love to hear from you.
            <br />Give us a call or submit a message below....
        </p>
        <div className="container-fluid">
            <div id="maindiv" className="d-flex flex-row justify-content-evenly ">
                <div id="divone" className="d-flex flex-column bd-highlight"> <br />
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" maxlength="10"></input>
                            <label for="floatingInputGroup1">Username</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <div id="divtwo" className="d-flex align-items-center" >
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                            style={{ height: '18vh' }}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
            </div><br />
            <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </div>
    </form>
    ) :(
    <div id="thankYouMessage1" className="thank-you-message animate__animated animate__tada animate__fadeIn animate__delay-1s animate__slower fade-in" style={{ backgroundColor: '#FFC107' }}>
        <span className="animate__animated animate__heartBeat animate__delay-2s animate__fast" style={{ color: "#fff" }}>&#10003;</span> Thank you for your feedback!
    </div>
    )}
</div>
    </div>
    <br/>
    <Footer />
</div >
  )
}

