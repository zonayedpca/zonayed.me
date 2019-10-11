import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef } from "react"

import { Container } from "./container"
import { Logo } from "./logo"

import "./header.css"

const Header = ({ siteTitle }) => {
  // const [theLoader, setTheLoader] = useState(true)

  // useEffect(() => {
  //   const disableLoader = setTimeout(() => {
  //     setTheLoader(false)
  //   }, 2000)
  // }, [theLoader])

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
            {/* <div className={`load-bg ${theLoader ? "" : "hide"}`}></div> */}
          </div>
          <ul className="menubar">
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
              <a className="btn-download" href="https://zonayed.me">
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
