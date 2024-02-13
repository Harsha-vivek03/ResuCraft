import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Privacy.css'
const Privacy = () => {
  return (
    <div className="container-fluid">
        <Header/>
        <header>
        <h1>Privacy Policy</h1>
    </header>
      <div  id="container1"> 
        <h2>1. Our Terms of Use</h2>
        <p>At Resume Builder, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information. <br/>
            We care about data privacy and security. Please review our Privacy Policy for details about what information we collect, how we use and share it, and how it is protected. In addition, we will maintain certain data that you transmit to the Platform for the purpose of managing the performance of the Platform, as well as data relating to your use of the Platform. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Platform. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect personal information, such as your name, email address, and resume content, to provide you with our services. We do not share your personal information with third parties.</p>

        <h2>3. Cookies and Tracking</h2>
        <p>Our website uses cookies to improve your experience. You can disable cookies in your browser settings if you prefer not to use them.</p>

        <h2>4. Data Security</h2>
        <p>We take the security of your data seriously and use industry-standard measures to protect it. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

        <h2>5. Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices and services. You can always find the latest version on our website.</p>

        <p className="highlight">By using our website, you agree to the terms of this Privacy Policy.</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Privacy
