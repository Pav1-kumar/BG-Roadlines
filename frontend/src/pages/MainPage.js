import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

import heroBannerImage from './vincenzo-biancamano-W1wRGZSq_js-unsplash1.jpg';

// import truckImage from './images/truck.jpg';
// import roadImage from './images/road.jpg';

const Home = () => {
  return (
    <div>
     <Header />
      <Main />
      <Footer />
    </div>
  );

  function Header() {
    return (
      <header className="header" data-header>
        <div className="container">
          <h1>
            <a href="#" className="logo">BG Roadlines</a>
          </h1>
          <nav className="navbar" data-navbar>
            {/* Navigation content */}
            <div className="navbar-top">
              <a href="#" className="logo">BG Roadlines</a>
              <button className="nav-close-btn" aria-label="Clsoe menu" data-nav-toggler>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  <span className='nav-text'>Home</span>
                  <ion-icon name="chevron-forward"></ion-icon>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" >
                  <span className='nav-text'>About</span>
                  {/* <ion-icon name="chevron-forward"></ion-icon> */}
                </a>
              </li>
              <li className="navbar-item">
                <a href="#service" className="navbar-link" data-nav-link>
                  <span className='nav-text'>Service</span>
                  <ion-icon name="chevron-forward"></ion-icon>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#contact" className="navbar-link" data-nav-link>
                  <span className='nav-text'>Contact</span>
                  <ion-icon name="chevron-forward"></ion-icon>
                </a>
              </li>
              <li className="navbar-link">
                <Link to="/login" className= 'nav-text' >Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  function Main() {
    return (
      <main>
        <section className="section hero" aria-label="home" id="home" style={{ backgroundImage: `url(${heroBannerImage})` , opacity:0.96 }}>
          <div className="container">
            <div className="hero-content">
              <h2 className="h1 hero-title">
                <h2 className="h2">Welcome to</h2><span className="span">BG Roadlines</span>
              </h2>
              <p className="hero-text">
                Your reliable partner in transportation services
              </p>
            </div>
          </div>
        </section>
  
        <section className="section about" id="about" aria-label="about">
          <div className="container">
            <div className="about-content">
              <h2 className="section-subtitle">About Us</h2>
              <p>BG Roadlines is a leading transport agency specializing in providing efficient and reliable transportation solutions to businesses and individuals. With a fleet of modern vehicles and a team of experienced professionals, we ensure timely delivery and customer satisfaction.Our aim is to optimize and improve your supply chain so that we can give you the best service.</p>
            </div>
          </div>
        </section>
  
        <section className="section service" id="service" aria-label="service">
          <div className="container">
            <h2 className="section-subtitle">Our Services</h2>
            <ul className="h3">
              <li className="section-title">Long-Distance Transportation</li>
              <li className="section-title">Local Transportation</li>
              <li className="section-title">Freight Forwarding</li>
              <li className="section-title">Warehousing</li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-top section">
            <h2 className="section-subtitle">Contact Us</h2>
            <p>For inquiries and bookings, please contact us at:</p>
            <ul>
              <li>Email: bgroadlines@gmail.com</li>
              <li>Phone:+91 9353264452</li>
              <li>Address: Tandur Road,Chatrasal,Chincholi,Karnataka,India</li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2024 BG Roadlines. All Rights Reserved by <a href="#" className="copyright-link">Pavan Kumar</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

}

export default Home;