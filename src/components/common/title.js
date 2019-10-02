import React from "react"

import "./title.css"

export const Title = ({ title, social, side }) => {
  return (
    <div className={`title ${side} ${social ? "social" : ""}`}>
      {social && (
        <ul>
          <li>Fa</li>
          <li>Tw</li>
          <li>Lk</li>
          <li>Be</li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
}
