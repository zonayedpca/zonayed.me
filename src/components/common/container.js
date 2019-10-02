import React from "react"

import "./container.css"

export const Container = ({ children, padding }) => {
  return (
    <div
      style={{
        padding,
      }}
      className="container"
    >
      {children}
    </div>
  )
}

Container.defaultProps = {
  padding: `100px 0`,
}
