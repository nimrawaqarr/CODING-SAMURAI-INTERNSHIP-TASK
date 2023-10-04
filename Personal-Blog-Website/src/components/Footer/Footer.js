import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="main footer-main">
        <div className="wrapper">
            <footer className="container">
                <div className="top">
                    <h2 className="blog">BLOG.</h2>
                    <ul className="footer-list">
                        <li className="footer-list-item"><Link to="/article" className="footer-list-item-anchor">Articles</Link></li>
                        <li className="footer-list-item"><Link to="/about" className="footer-list-item-anchor">About</Link></li>
                        <li className="footer-list-item"><Link to="/contact" className="footer-list-item-anchor">Contact</Link></li>
                    </ul>
                </div>

                <div className="middle">
                    <div className="visit">
                        <p className="title">Visit Us</p>
                        <a href="#" className="footer-content">ABC ABC ABC</a>
                    </div> 
                    <div className="call-us">
                        <p className="title">Call Us</p>
                        <a href="tel:123 456 7890" className="footer-content">123 456 7890</a>
                    </div>
                    <div className="email">
                        <p className="title">Send Email</p>
                        <a href="mailto: info@abc.com" className="footer-content">info@abc.com</a>
                    </div>
                </div>

                <div className="terms">
                    <ul className="footer-term">
                        <li className='footer-term-list-item'>Terms & Conditions</li>
                        <li className='footer-term-list-item'>Privacy Policy</li>
                    </ul>
                    <p className="copyright">Copyright © 2022 All rights reserved.</p>
                    <div className="footer-logo">
                        <img src={'images/Facebook.png'} alt="" />
                        <img src={'images/Instagram.png'} alt="" />
                        <img src={'images/Linkedin.png'} alt="" />
                    </div>
                </div>
            </footer>
        </div>
      </div>
    </>
  )
}
