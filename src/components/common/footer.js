import React from "react"
import { FaAngleUp, FaStar, FaCodeBranch } from "react-icons/fa"

import { Container } from "./container"

import "./footer.css"

export const Footer = () => {
  const handleScroll = e => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <footer className="footer-area">
      <Container padding="50px 0">
        <div className="footer">
          <div className="language">
            <ul>
              <li>
                <p>Thanks</p>
                <div className="progress" />
              </li>
              <li>
                <p>ধন্যবাদ</p>
                <div className="progress" />
              </li>
              <li>
                <p>धन्यवाद</p>
                <div className="progress" />
              </li>
              <li>
                <p>ਧੰਨਵਾਦ</p>
                <div className="progress" />
              </li>
              <li>
                <p>با تشکر</p>
                <div className="progress" />
              </li>
            </ul>
          </div>
          <div className="copyright">
            <ul className="github">
              <li>
                <a href="#">
                  <p>
                    <FaStar /> Star
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>
                    <FaCodeBranch /> Fork
                  </p>
                </a>
              </li>
            </ul>
            <p>
              By Me{" "}
              <span onClick={handleScroll}>
                <FaAngleUp />
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
