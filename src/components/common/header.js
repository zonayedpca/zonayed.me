import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container } from "./container"
import { Logo } from "./logo"

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
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
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

export { Header }
