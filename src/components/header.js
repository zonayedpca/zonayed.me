import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Logo, Container } from "./common"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <Container padding="25px 0">
      <div className="header">
        <div className="logo">
          <h1>
            <Link to="/">
              <Logo />
            </Link>
          </h1>
        </div>
        <ul className="menubar">
          <li>About</li>
          <li>Skill</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Resume</li>
        </ul>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
