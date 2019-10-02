import React from "react"

import { Container, Title } from "./common"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <p>SVG</p>
            <h4>Title</h4>
          </div>
          <div className="stickpad">
            <p>SVG</p>
            <h4>Title</h4>
          </div>
          <div className="stickpad">
            <p>SVG</p>
            <h4>Title</h4>
          </div>
          <div className="stickpad">
            <p>SVG</p>
            <h4>Title</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
