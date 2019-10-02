import React from "react"
import { Container } from "./common"

import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container padding="25px 0">
        <div className="footer">
          <div className="language">
            <ul>
              <li>
                <p>Thanks</p>
                <div className="progress" />
              </li>
              <li>
                <p>Thanks</p>
                <div className="progress" />
              </li>
              <li>
                <p>Thanks</p>
                <div className="progress" />
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>
              By <a href="#">Zonayed Ahmed</a>
            </p>
            <ul className="github">
              <li>Star</li>
              <li>Fork</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
