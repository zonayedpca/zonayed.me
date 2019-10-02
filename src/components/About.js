import React from "react"

const About = () => {
  return (
    <div className="about-area">
      <div className="title right social-follow">
        <p>Avout Me</p>
      </div>
      <div className="about">
        <div className="about-details">
          <h2>About Me</h2>
          <p>
            I am Zonayed Ahmed, from a small, beautiful country, Bangladesh. I
            love to work with new things. Also love to add new skills in my
            pocket continuously. Skill is my weapon and perfection is my habit.
            Love to code with JavaScript and also love programming. I am
            currently working as a Full Stack Web Developer. Scroll Down to know
            more about me
          </p>
          <div className="about-action">
            <a href="#" className="btn">
              Download CV
            </a>
            <a href="#" className="btn">
              My Skills
            </a>
          </div>
        </div>
        <div className="about-image">
          <div className="image">A Photo of mine smiling...</div>
        </div>
      </div>
    </div>
  )
}

export { About }
