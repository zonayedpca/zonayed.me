import React from "react"

const Intro = () => {
  return (
    <div className="intro-area">
      <div className="title left social-follow">
        <ul>
          <li>Fa</li>
          <li>Tw</li>
          <li>Lk</li>
          <li>Be</li>
        </ul>
        <p>Follow Me</p>
      </div>
      <div className="intro">
        <p>I am</p>
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
  )
}

export { Intro }
