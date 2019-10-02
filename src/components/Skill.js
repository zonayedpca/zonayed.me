import React from "react"
import { Container, Title } from "./common"

import "./skill.css"

const Skill = () => {
  return (
    <div className="skill-area">
      <Container>
        <Title title="My Skills" />
        <div className="skills">
          <ul className="skill-nav">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
          <div className="skill">
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
          </div>
          <div className="skill">
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
          </div>
          <div className="skill">
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
            <div className="card">
              <h4>Programming</h4>
              <p>94%</p>
              <div className="progress-ar" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Skill }
