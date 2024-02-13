import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer class="d-flex flex-column">
    <div class="container-fluid foot1 d-flex justify-content-evenly">
       <div>
            <ul><h3>Customer Support</h3>
                <h6>Timmings:</h6>
                <li>Mon-Fri 8 AM - 8 PM CST</li>
                <li>Saturday 8 AM - 5PM CST</li>
                <li>Sunday 10 AM - 6 PM CST</li>
            </ul>
       </div>
    
       <div>
        <ul>
            <h3>Support</h3>
            {/* <a href="term.html"> <li>Terms and Conditions</li></a> */}
            <Link className="flink" to='/terms'><li>Terms and Conditions</li></Link>

            <Link className="flink" to='/privacy'><li>Privacy Policy</li></Link>
           
            <Link className="flink" to='/about'><li>About Us</li></Link>
            <Link className="flink" to='/contact'><li>FAQs</li></Link>
           
            {/* <a href="privacy.html"><li>Privacy Policy</li></a> */}
    
        </ul>
       </div>

       <div>
        <ul>
           <h3>FOLLOW US</h3>
            <a href="https://www.facebook.com/profile.php?id=61556172429307&sk=about"><li><i class="fa-brands fa-facebook"></i> Facebook</li></a>
            <a href="https://www.instagram.com/resu_craft/"><li><i class="fa-brands fa-instagram"></i> Instagram</li></a>
           <a href="https://twitter.com/ResuCraft"><li><i class="fa-brands fa-twitter"></i> Twitter</li></a> 
           <a href="https://www.linkedin.com/in/harsha-vivek-a47309243"><li><i class="fa-brands fa-linkedin"></i> LinkedIn</li></a> 
            
        </ul>
       </div>
    </div>
    <div class="container-fluid foot2 d-flex align-items-center justify-content-center"> © 2023 Works Limited. All Rights Reserved.</div>
 
</footer>
    </div>
  )
}

export default Footer
