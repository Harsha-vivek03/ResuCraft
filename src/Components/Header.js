import React from 'react'
import img1 from '../images/logo4 (2).png'
import './Home.css'
import { Link ,NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom'


export default function Header() {

  const location=useLocation();
  return (
    <div>
        <div className=''>
    <nav class="navbar sticky-top navbar-light bg-light header1">
            <div class="container-fluid ">
               <img src={img1} width="14%"  alt=""></img>
                 {/* <h1><span id="logo1">RESU</span><span id='logo2'>craft</span></h1> */}
                <ul class="nav nav-pills">
                    <li  className={location.pathname === '/' ? 'active' : 'nav-item'} >
                        {/* <a class="nav-link"  href="home.html">Home</a> */}
                        <Link class="nav-link" to="/">Home</Link>
                      </li>
                      <li  className={location.pathname === '/about' ? 'active' : 'nav-item'} >
                        {/* <a class="nav-link" href="about.html">About</a> */}
                        <Link class="nav-link" to="/about" activeClassName="active">About</Link> </li>
                      <li  className={location.pathname === '/contact' ? 'active' : 'nav-item'} >
                      
                      {/* <a class="nav-link" href="about.html">Contact</a> */}
                      <Link class="nav-link" to="/contact" activeClassName="active">Contact</Link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="feedback.html">Feedback</a>
                      </li>
                
                  </ul>
                  <button type="button" class="btn btn-danger btlogin">Login</button>
            </div>
          </nav>
          </div>
    </div>
  )
}
