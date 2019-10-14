import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState } from "react"
import { FaBars } from "react-icons/fa"

import { Container } from "./container"
import { Logo } from "./logo"

import "./header.css"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const headerEl = useRef()
  let prevScrollPosition = window.pageYOffset
  window.addEventListener("scroll", () => {
    const curScrollPosition = window.pageYOffset
    const difference = prevScrollPosition - curScrollPosition
    const { current } = headerEl
    if (curScrollPosition > 100) {
      current.classList.add("compaq")
    } else {
      current.classList.remove("compaq")
    }
    if (difference < 0) {
      current.classList.add("hide")
    } else {
      current.classList.remove("hide")
    }
    prevScrollPosition = curScrollPosition
  })

  const handleScroll = e => {
    e.preventDefault()
    const hash = e.target.hash
    const el = document.querySelector(hash)
    const offsetTop = el.offsetTop
    setMobileNav(false)
    window.scrollTo({
      top: offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <header ref={headerEl}>
      <Container padding="25px 25px">
        <div className="header">
          <div className="logo">
            <h1>
              <Link to="/">
                <Logo />
              </Link>
            </h1>
          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className="mobile-nav">
            <FaBars />
          </div>
          <ul className={`menubar ${mobileNav ? "mobilenav-activate" : ""}`}>
            <li>
              <a onClick={handleScroll} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#skill">
                Skill
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://with.zonayed.me"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
