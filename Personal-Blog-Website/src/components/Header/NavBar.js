import React, { useEffect, useState, useRef } from "react";
import "./NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const headerRef = useRef();
  const [sideNav, setSideNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const toggleSideNav=()=>{
    setSideNav(sideNav=>!sideNav)
  }

  useEffect(() => {
    let handler = (event) => {
      if (!headerRef.current.contains(event.target)) {
        setSideNav(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  
  return (
    <>
      <div className={`header-main ${scroll ? "scroll-header-main" : ""}`}>
        {/* <div className="wrapper header-wrap"> */}
        <header ref={headerRef}>
          <div className="logo">
            <Link to='/' className="logo">Blog.</Link>
          </div>
          <nav className={`${sideNav? 'toggle-side-nav': ''}`} >
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/article" className="nav-list-item-anchor">
                  Articles
                </Link>
              </li>
              <li
                className="nav-list-item"
              >
                <Link to="/about" className="nav-list-item-anchor">
                  About
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/Contact" className="nav-list-item-anchor">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="booking">
            <button className="header-btn">Request a Blog</button>
          <MenuIcon id="menu-icon" onClick={toggleSideNav}/>
          </div>
        </header>
        {/* </div> */}
      </div>
    </>
  );
}
