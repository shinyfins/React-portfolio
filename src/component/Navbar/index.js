import React from 'react'
import {Nav, NavLink, Bars, NavMenu, Navbtn, NavbtnLink} from './NavbarElements'


const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <h1>
                  Marcos Castillo
              </h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/about" activeStyle>
                  About Me
              </NavLink>
              <NavLink to="/portfolio" activeStyle>
                  Portfolio
              </NavLink>
              <NavLink to="/contact" activeStyle>
                  Contact
              </NavLink>
              <NavLink to="/resume" activeStyle>
                  Resume
              </NavLink>
          </NavMenu>
          
      </Nav>
    </>
  );
};

export default Navbar