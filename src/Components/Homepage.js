import React from 'react'
import { useEffect } from 'react';
import './Home.css'
import img2 from '../images/imgpng2.png';
import img3 from '../images/imgpng3.png'
import img4 from '../images/cr_img1.jpg'
import img5 from '../images/cr_img3.jpg'
import img6 from '../images/cr_img4.jpg'
import img7 from '../images/cr_img5.jpg'
import ScrollReveal from 'scrollreveal';
import Header from './Header';
import Footer from './Footer';
import WhatIs from './WhatIs';
import Working from './Working';
import { Link } from 'react-router-dom';

export default function Homepage() {

  

useEffect(() => {
    
 

ScrollReveal({ 
    reset: true ,
    distance: '100px',
    duration:2500,
    delay:400
    });

    ScrollReveal().reveal('#imgl', { distance: '400px',delay: 100,origin:'left' });
    ScrollReveal().reveal('#imgr', { distance: '400px',delay: 100,origin:'right' });
    ScrollReveal().reveal('.main-title', { delay: 500,origin:'left' });
    ScrollReveal().reveal('.sec-01 .image', { delay: 500,origin:'bottom' });
    ScrollReveal().reveal('.sec-01 .text-box', { delay: 500,origin:'right' });
    
    ScrollReveal().reveal('.main-title', { delay: 500,origin:'right' });
    ScrollReveal().reveal('.sec-02 .image', { delay: 500,origin:'top' });
    ScrollReveal().reveal('.sec-02 .text-box', { delay: 500,origin:'bottom' });
    
    ScrollReveal().reveal('.main-title', { delay: 500,origin:'top' });
    ScrollReveal().reveal('.sec-03 .image', { delay: 500,origin:'left' });
    ScrollReveal().reveal('.sec-03 .text-box', { delay: 500,origin:'right' });
    ScrollReveal().reveal('.tt2', { delay: 400,origin:'top' });
    ScrollReveal().reveal('.tt3', { delay: 400,origin:'bottom' });
  }, []);
  return (
    <div className='container-fluid'>
      <Header/>
         <section>
      <div className="custom-shape-divider-top-1697544339">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="container-fulid title">
          <img src={img2} className="rounded float-start show1" id='imgl' alt="img"></img>
              <section className="titlesec" id="tit">
                <center>
                  <h1><span id="t1">
                    <span>R</span>
                    <span>e</span>
                    <span>s</span>
                    <span>u</span>
                    <span>C</span>
                    <span>r</span>
                    <span>a</span>
                    <span>f</span>
                    <span>t</span>
                    </span> <br/>
                  <div className="tt2"><span id="t2">Online Resume Builder </span></div>
                 <div className="tt3"></div> <span className="tt3" id="t3">Create your own Personalized & Professional Resume for Free.</span>
            
                  </h1>
                </center> 
              </section>
            <img src={img3} className="rounded float-end show2" id='imgr' alt="img"></img>
          </div>
          </section>
          <div class="container-fluid carousel_div border">
            <div class="container-fluid carousel_left">
                <h1 >
                    The Ultimate Resume Builder
                </h1><br/>

                <p >
                    Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
                </p><br/>
                <button type="button" class="btn btn-info"><Link to="/resumes" style={{'textDecoration':'none', 'color':'white'}}>  Try Now</Link></button>
            </div>
            <div id="carouselExampleInterval" class="container-fluid carousel slide carousel_right " data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="3000">
                    <img src={img4} class="d-block w-100 crimgs"  alt="..."></img>
                  </div>
                 
                  <div class="carousel-item" data-bs-interval="3000">
                    <img src={img5} class="d-block w-100 crimgs" alt="..."></img>
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <img src={img6} class="d-block w-100 crimgs"  alt="..."></img>
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <img src={img7} class="d-block w-100 crimgs"  alt="..."></img>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
          </div>
          <Working/>
      <WhatIs/>
<Footer/>
    </div>
  )
}
