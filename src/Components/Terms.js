import React from 'react'
import './Terms.css'
import Header from './Header'
import Footer from './Footer'
const Terms = () => {
  return (
    <div className="container-fluid">
        <Header/>
      <header>
        <h1>Terms and Conditions</h1>
    </header>
    <div className="container1">
        <h2>Table of Contents</h2>
        <ul className="table-of-contents">
            <li><a href="#section1">1. Introduction</a></li>
            <li><a href="#section2">2. Use of the Website</a></li>
            <li><a href="#section3">3. Terms of Service</a></li>
            <li><a href="#section4">4. User Registration</a></li>
            <li><a href="#section5">5. Social Media</a></li>
        </ul>

        <h2 id="section1">1. Introduction</h2>
        <p>These terms and conditions (the "Terms") govern your use of the Resume Builder website (the "Website"). By using the Website, you agree to these Terms in full.
            You agree that by accessing the Platform, you have read, understood, and agree to be bound by all of these Terms including any supplemental terms that apply to you based on where you live. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS (INCLUDING ANY SUPPLEMENTAL TERMS), THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE PLATFORM AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>

        <h2 id="section2">2. Use of the Website</h2>
        <p>You must be at least 18 years of age to use the Website. You agree not to use the Website for any unlawful purpose or in any way that could harm the Website or its users.</p>

        

        <h2 id="section3">3. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@yourresumebuilder.com">support@yourresumebuilder.com</a>.</p>
        <h2 id="section3">4. User Registration</h2>
        <p>You may be required to register with the Platform or one of its component sites. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable. </p>
        <h2 id="section3">4. User Registration</h2>
        <p>As part of the functionality of the Platform, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party Account login information through the Platform; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.</p>
    </div>
    <Footer/>

    </div>
  )
}

export default Terms
