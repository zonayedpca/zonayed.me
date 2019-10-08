import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              I am Zonayed Ahmed, from a small, beautiful country, Bangladesh. I
              love to work with new things. Also love to add new skills in my
              pocket continuously. Skill is my weapon and perfection is my
              habit. Love to code with JavaScript and also love programming. I
              am currently working as a Full Stack Web Developer. Scroll Down to
              know more about me
            </p>
            <div className="about-action">
              <Button
                link="https://zonayed.me"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
