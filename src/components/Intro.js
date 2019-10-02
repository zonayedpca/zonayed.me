import React from "react"
import { IntroBG, Container, Title } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title />
      <Container>
        {/* <IntroBG /> */}
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Zonayed Ahmed</h1>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>Progammer</li>
              <li>Gamer</li>
              <li>Biker</li>
            </ul>
            <div className="action">
              <a className="btn" href="#">
                Download CV
              </a>
              <a className="btn" href="#">
                About Me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
