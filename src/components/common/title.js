import React from "react"
import {
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a href="https://zonayed.me">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://zonayed.me">
              <FaCodepen />
            </a>
          </li>
          <li>
            <a href="https://zonayed.me">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://zonayed.me">
              <FaMediumM />
            </a>
          </li>
          <li>
            <a href="https://zonayed.me">
              <FaTwitter />
            </a>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
