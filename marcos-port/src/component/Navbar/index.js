import React from 'react'

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <h1>
                  Logo
              </h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/about-me" activeStyle>
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
          <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar